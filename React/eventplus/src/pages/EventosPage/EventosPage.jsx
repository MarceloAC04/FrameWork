import React, { useEffect, useState } from "react";
import ImageIllustrator from "../../componentes/ImageIllustrator/ImageIllustrator";
import Titulo from "../../componentes/Titulo/Titulo";
import eventoImage from "../../assets/images/evento.svg";
import TableEv from "./TableEv/TableEv";
import "./EventosPage.css";
import MainContent from "../../componentes/MainContent/MainContent";
import {
  Input,
  Button,
  Select,
} from "../../componentes/FormComponents/FormComponents";
import api, { eventResource, eventsTypeResource } from "../../Services/Service";
import Container from "../../componentes/Container/Container";
import Notification from "../../componentes/Notification/Notification";

const EventosPage = () => {
  const [frmEdit, setFrmEdit] = useState(false); //esta em modo de edição?
  const [idEvento, setIdEvento] = useState(null);
  const [nomeEvento, setNomeEvento] = useState();
  const [descricaoEvento, setDescricaoEvento] = useState();
  const [idTipoEventos, setIdTipoEventos] = useState();
  const [date, setDate] = useState();

  const [eventos, setEventos] = useState([]); //array
  const [optionsTipoEventos, setOptionsTipoEventos] = useState([]);

  const [showSpinner, setShowSpinner] = useState(false); // componente notification
  const [notifyUser, setNotifyUser] = useState(); // componente notification

  const instituicaoId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";

  useEffect(() => {
    // define  a chamda da nossa api
    async function loadEvents() {
      try {
        const retorno = await api.get(eventResource);
        setEventos(retorno.data);
        console.log(retorno);
      } catch (error) {
        console.log("Erro na api");
        console.log(error);
      }
    }

    loadEvents();
  }, []);

  useEffect(() => {
    async function loadEventsType() {
      try {
        const retorno = await api.get(eventsTypeResource);
        setOptionsTipoEventos(retorno.data);
        console.log(retorno);
      } catch (error) {
        console.log("Erro na api");
        console.log(error);
      }
    }
    loadEventsType();
  }, []);
  //chamada do tipo de eventos na api

  async function loadEvents() {
    try {
      const retorno = await api.get(eventResource);
      setEventos(retorno.data);
      console.log(retorno);
    } catch (error) {
      console.log("Erro na api");
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const retorno = await api.post(eventResource, {
        dataEvento: date,
        nomeEvento: nomeEvento,
        descricao: descricaoEvento,
        idTipoEvento: idTipoEventos,
        idInstituicao: instituicaoId,
      });
      notify("Evento cadastrado com sucesso!");
      console.log(retorno);
      loadEvents();
      limparForms();
    } catch (error) {
      notifyDanger("Error ao cadastrar!");
      console.log(date);
      console.log(nomeEvento);
      console.log(descricaoEvento);
      console.log(idTipoEventos);
      console.log(instituicaoId);
    }
  }

  async function handleDelete(idElement) {
    if (!window.confirm(`Confirma a exclusão do evento do Id: ${idElement}`)) {
      return;
    }
    try {
      const retorno = await api.delete(`${eventResource}/${idElement}`);
      if (retorno.status === 204) {
        notify("Evento excluido com sucesso!");
        loadEvents();
      }
    } catch (error) {
      notifyDanger("Error ao deletar!");
    }
  }

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      const retorno = await api.put(`${eventResource}/${idEvento}`, {
        dataEvento: date,
        nomeEvento: nomeEvento,
        descricao: descricaoEvento,
        idTipoEvento: idTipoEventos,
        idInstituicao: instituicaoId,
      });
      console.log(retorno);
      if (retorno.status === 204) {
        notify("Evento atualizado com sucesso");
        const retorno = await api.get(eventResource);
        setEventos(retorno.data);
        editActionAbort();
        loadEvents();
      }
    } catch (error) {
      notifyDanger("Error ao atualizar!");
    }
  }

  async function showUpdateForm(idElement) {
    setFrmEdit(true);
    setIdEvento(idElement);
    try {
      const eventoBuscado = await api.get(
        `${eventResource}/${idElement}`,
        idElement
      );
      setNomeEvento(eventoBuscado.data.nomeEvento);
      setDescricaoEvento(eventoBuscado.data.descricao);
      setIdTipoEventos(eventoBuscado.data.idTipoEvento);
      setDate(eventoBuscado.data.dataEvento);
      console.log(eventoBuscado.data);
    } catch (error) {}
  }

  function editActionAbort() {
    setFrmEdit(false);
    limparForms();
  }

  function notify(textNote) {
    setNotifyUser({
      titleNote: "Sucesso",
      textNote,
      imgIcon: "Success",
      imgAlt:
        "Imagem de ilustração de sucesso, Moça segurando um balão com símbolo de configuração ok",
      showMessage: true,
    });
  }

  function notifyWarning(textNote) {
    setNotifyUser({
      titleNote: "Alerta",
      textNote,
      imgIcon: "warning",
      imgAlt:
        "Imagem de ilustração de alerta, Moça chutando um símbolo de exclamação!",
      showMessage: true,
    });
  }
  function notifyDanger(textNote) {
    setNotifyUser({
      titleNote: "Error",
      textNote,
      imgIcon: "danger",
      imgAlt:
        "Imagem de ilustração de error, Homem segurando um balão com  símbolo de error!",
      showMessage: true,
    });
  }

  function limparForms() {
    setNomeEvento("");
    setDescricaoEvento("");
    setOptionsTipoEventos([0]);
    setDate("");
  }

  return (
    <>
      {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}

      <MainContent>
        <section className="cadastro-evento-section">
          <Container>
            <div className="cadastro-evento__box">
              <Titulo titleText="Eventos page" />
              <ImageIllustrator imageRender={eventoImage} />
              <form
                className="ftipo-evento"
                onSubmit={frmEdit ? handleUpdate : handleSubmit}
              >
                {!frmEdit ? (
                  // cadastrar
                  <>
                    <Input
                      id="Nome"
                      placeholder="Nome"
                      name={"nome"}
                      type={"text"}
                      required={"required"}
                      value={nomeEvento}
                      manipulationFunction={(e) => {
                        setNomeEvento(e.target.value);
                      }}
                    />
                    <Input
                      id="Descricao"
                      placeholder="Descrição"
                      name={"descricao"}
                      type={"text"}
                      required={"required"}
                      value={descricaoEvento}
                      manipulationFunction={(e) => {
                        setDescricaoEvento(e.target.value);
                      }}
                    />
                    <Select
                      id="TipoEventos"
                      name={"tipoEventos"}
                      required={"required"}
                      options={optionsTipoEventos}
                      value={idTipoEventos}
                      manipulationFunction={(e) => {
                        setIdTipoEventos(e.target.value);
                      }}
                    />
                    <Input
                      id="Date"
                      placeholder="dd/mm/aaaa"
                      name={"Date"}
                      type={"date"}
                      required={"required"}
                      value={date}
                      manipulationFunction={(e) => {
                        setDate(e.target.value);
                      }}
                    />
                    <Button
                      textButton="Cadastrar"
                      id="cadastrar"
                      name="cadastrar"
                      type="submit"
                    />
                  </>
                ) : (
                  // editar
                  <>
                    <Input
                      id="Nome"
                      placeholder="Nome"
                      name={"nome"}
                      type={"text"}
                      required={"required"}
                      value={nomeEvento}
                      manipulationFunction={(e) => {
                        setNomeEvento(e.target.value);
                      }}
                    />
                    <Input
                      id="Descricao"
                      placeholder="Descrição"
                      name={"descricao"}
                      type={"text"}
                      required={"required"}
                      value={descricaoEvento}
                      manipulationFunction={(e) => {
                        setDescricaoEvento(e.target.value);
                      }}
                    />
                    <Select
                      id="TipoEventos"
                      name={"tipoEventos"}
                      required={"required"}
                      options={optionsTipoEventos}
                      value={idTipoEventos}
                      manipulationFunction={(e) => {
                        setIdTipoEventos(e.target.value);
                      }}
                    />
                    <Input
                      id="Date"
                      placeholder="dd/mm/aaaa"
                      name={"Date"}
                      type={"date"}
                      required={"required"}
                      value={date}
                      manipulationFunction={(e) => {
                        setDate(e.target.value);
                      }}
                    />
                    <div className="buttons-editbox">
                      <Button
                        additonalClass="button-component--middle"
                        textButton="Atualizar"
                        id="atualizar"
                        name="atualizar"
                        type="submit"
                        manipulationFunction={handleUpdate}
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

        {/* Section card de eventos */}
        <section className="lista-eventos-section">
          <Container>
            <Titulo titleText={"Lista de Evento"} color="white" />
            <TableEv
              dados={eventos}
              fnUpdate={showUpdateForm}
              fnDelete={handleDelete}
            />
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default EventosPage;
