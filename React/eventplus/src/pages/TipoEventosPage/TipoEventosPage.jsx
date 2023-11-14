import React, { useEffect, useState } from "react";
import Titulo from "../../componentes/Titulo/Titulo";
import MainContent from "../../componentes/MainContent/MainContent";
import Container from "../..//componentes/Container/Container";
import ImageIllustrator from "../../componentes/ImageIllustrator/ImageIllustrator";
import tipoEventoImagem from "../../assets/images/tipo-evento.svg";
import TableTp from "./TableTp/TableTp";
import {Input, Button} from "../../componentes/FormComponents/FormComponents";
import api, { eventsTypeResource } from "../../Services/Service"
import "./TipoEventosPage.css";

const TipoEventosPage = () => {
  const [frmEdit, SetFrmEdit] = useState(false); //esta em modo de edição?
  const [titulo, SetTitulo] = useState();
  const [tipoEventos, SetTipoEvento] = useState([]);

  useEffect(() => {
    // define  a chamda da nossa api
   async function loadEventsType() {
    try {
      const retorno = await api.get(eventsTypeResource)
      SetTipoEvento(retorno.data)
      console.log(retorno)
    } catch (error) {
      console.log("Erro na api")
      console.log(error)
    }
    }

    loadEventsType();
  }, [])

 async function handleSubmit(e) {
    e.preventDefault();
    if (titulo.trim().length < 3) {
      alert("O titulo dever ter ao menos 3 caracteres")
      return;
    }
    try {
      const retorno = await api.post(eventsTypeResource, {
        titulo:titulo
      });

      SetTitulo("");
      alert("Cadastrado com sucesso!")
      console.log(retorno)


    } catch (error) {
      alert("Deu ruim no submit!")
    }

  }

  function handleUpdate() {
    alert("Bora editar");
  }

  //apaga o tipo de evento na api
  function handleDelete(idElement) {
    alert(`Vamos apagar o evento de id: ${idElement}`)
  }

 // cancela a tela de edição (volta para a tela de cadastro)
  function editActionAbort() {
    alert("Cancelar a tela de edição de dados")
  }

  //mostra o formulário de edição
  function showUpdateForm() {
    alert(`Vamos editar o formulário de edição`)
  }

  return (
    <>
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
                  </>
                ) : (
                  // editar
                  <p>Tela de Edição</p>
                )}
              </form>


            </div>
          </Container>
        </section>

        <section className="lista-eventos-section">
          <Container>
            <Titulo titleText={"Lista Tipo de Evento"} color="white"/>
            <TableTp
            dados={tipoEventos}
              fnUpdate={() => {showUpdateForm();} }
              fnDelete={() => {handleDelete();} }
             />
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default TipoEventosPage;
