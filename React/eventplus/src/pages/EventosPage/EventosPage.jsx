import React, { useEffect, useState } from "react";
import ImageIllustrator from "../../componentes/ImageIllustrator/ImageIllustrator";
import Titulo from "../../componentes/Titulo/Titulo";
import eventoImage from "../../assets/images/evento.svg";
import TableEv from "./TableEv/TableEv"
import "./EventosPage.css";
import MainContent from "../../componentes/MainContent/MainContent";
import { Input, Button } from "../../componentes/FormComponents/FormComponents";
import api, { eventResource} from "../../Services/Service";
import Container from "../../componentes/Container/Container";
import Notification from "../../componentes/Notification/Notification";
import Spinner from "../../componentes/Spinner/Spinner"

const EventosPage = () => {
  const [frmEdit, SetFrmEdit] = useState(false); //esta em modo de edição?
  const [eventos, setEventos] = useState([]); //array
  const [nome, SetNome] = useState();
  const [showSpinner, setShowSpinner] = useState(false); // componente notification

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

  function handleSubmit() {}

  function handleDelete(idElement) {}

  function handleUpdate() {}

  function showUpdateForm() {
    SetFrmEdit(true);
  }
  function editActionAbort() {
    SetFrmEdit(false);
  }
  
  return (
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
                    value={nome}
                    manipulationFunction={(e) => {
                      SetNome(e.target.value);
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
  );
};

export default EventosPage;
