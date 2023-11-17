import React, { useEffect, useState } from "react";
import Titulo from "../../componentes/Titulo/Titulo";
import MainContent from "../../componentes/MainContent/MainContent";
import Container from "../..//componentes/Container/Container";
import ImageIllustrator from "../../componentes/ImageIllustrator/ImageIllustrator";
import tipoEventoImagem from "../../assets/images/tipo-evento.svg";
import TableTp from "./TableTp/TableTp";
import { Input, Button } from "../../componentes/FormComponents/FormComponents";
import api, { eventsTypeResource } from "../../Services/Service";
import Notification from "../../componentes/Notification/Notification";
import "./TipoEventosPage.css";

const TipoEventosPage = () => {
  const [frmEdit, SetFrmEdit] = useState(false); //esta em modo de edição?
  const [titulo, SetTitulo] = useState();
  const [tipoEventos, SetTipoEvento] = useState([]); //array
  const [notifyUser, setNotifyUser] = useState(); // componente notification

  useEffect(() => {
    // define  a chamda da nossa api
    async function loadEventsType() {
      try {
        const retorno = await api.get(eventsTypeResource);
        SetTipoEvento(retorno.data);
        console.log(retorno);
      } catch (error) {
        console.log("Erro na api");
        console.log(error);
      }
    }

    loadEventsType();
  }, []);

  async function loadEventsType() {
    try {
      const retorno = await api.get(eventsTypeResource);
      SetTipoEvento(retorno.data);
      console.log(retorno);
    } catch (error) {
      console.log("Erro na api");
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (titulo.trim().length < 3) {
      alert("O titulo dever ter ao menos 3 caracteres");
      return;
    }
    try {
      const retorno = await api.post(eventsTypeResource, {
        titulo: titulo,
      });

      SetTitulo("");
      notifySubmit();
      console.log(retorno);
      loadEventsType();
    } catch (error) {
      alert("Deu ruim no submit!");
    }
  }

  //* APAGAR DADOS
  //apaga o tipo de evento na api
  async function handleDelete(idElement) {
    if (
      !window.confirm(`Confirma a exclusão do tipo evento do Id: ${idElement}`)
    ) {
      return;
    }
    try {
      const retorno = await api.delete(`${eventsTypeResource}/${idElement}`);
      if (retorno.status === 204) {
        notify();
        loadEventsType();
      }
    } catch (error) {
      alert("Deu ruim no delete!");
    }
  }

  // EDIÇÃO DOS DADOS
  //mostra o formulário de edição
  async function showUpdateForm(idElement) {
    try {
      const eventoBuscado = await api.get(`${eventsTypeResource}/${idElement}`)
      SetTitulo(eventoBuscado.data.titulo)
      console.log(eventoBuscado.data)
      SetFrmEdit(true);
      
    } catch (error) {
      
    }
  }

  function editActionAbort() {
    SetFrmEdit(false);
    SetTitulo("")
  }

  // cancela a tela de edição (volta para a tela de cadastro)
  function handleUpdate(e, idElement) {
    e.preventDefault();
  }

  function notify() {
    setNotifyUser({
      titleNote: "Sucesso",
      textNote: "Evento excluido com sucesso",
      imgIcon: "Success",
      imgAlt:
        "Imagem de ilustração de sucesso, Moça segurando um balão com símbolo de configuração ok",
      showMessage: true,
    });
  }
  function notifySubmit() {
    setNotifyUser({
      titleNote: "Sucesso",
      textNote: "Evento cadastrado com sucesso",
      imgIcon: "Success",
      imgAlt:
        "Imagem de ilustração de sucesso, Moça segurando um balão com símbolo de configuração ok",
      showMessage: true,
    });
  }
  return (
    <>
      {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}
      <MainContent>
        <section className="cadastro-evento-section">
          <Container>
            <div className="cadastro-evento__box">
              <Titulo titleText={"Cadastro Tipo de Eventos"} />

              <ImageIllustrator imageRender={tipoEventoImagem} />
              <form
                className="ftipo-evento"
                onSubmit={frmEdit ? handleUpdate : handleSubmit}
              >
                {!frmEdit ? (
                  // cadastrar
                  <>
                    <Input
                      id="Titulo"
                      placeholder="Título"
                      name={"titulo"}
                      type={"text"}
                      required={"required"}
                      value={titulo}
                      manipulationFunction={(e) => {
                        SetTitulo(e.target.value);
                      }}
                    />
                    {/* <span>{titulo}</span> */}
                    <Button
                      textButton="Cadastrar"
                      id="cadastrar"
                      name="cadastrar"
                      type="submit"
                    />
                    {/* <Button
                      textButton="Notify"
                      id="notify"
                      name=""
                      type="submit"
                      manipulationFunction={notify}
                    /> */}
                  </>
                ) : (
                  // editar
                  <>
                    <Input
                      id="Titulo"
                      placeholder="Título"
                      name={"titulo"}
                      type={"text"}
                      required={"required"}
                      value={titulo}
                      manipulationFunction={(e) => {
                        SetTitulo(e.target.value);
                      }}
                    />
                    <div className="buttons-editbox">
                      <Button
                        additonalClass="button-component--middle"
                        textButton="Atualizar"
                        id="atualizar"
                        name="atualizar"
                        type="submit"
                        />
                      <Button
                        additonalClass="button-component--middle"
                        textButton="Cancelar"
                        id="cancelar"
                        name="cancelar"
                        type="submit"
                        manipulationFunction={editActionAbort}
                      />
                    </div>
                  </>
                )}
              </form>
            </div>
          </Container>
        </section>

        <section className="lista-eventos-section">
          <Container>
            <Titulo titleText={"Lista Tipo de Evento"} color="white" />
            <TableTp
              dados={tipoEventos}
              fnUpdate={showUpdateForm}
              fnDelete={handleDelete}
            />
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default TipoEventosPage;
