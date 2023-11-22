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
import api, {
  eventResource,
  eventsTypeResource,
  instituicaoResource,
} from "../../Services/Service";
import Container from "../../componentes/Container/Container";
import Notification from "../../componentes/Notification/Notification";

const EventosPage = () => {
  const [frmEdit, SetFrmEdit] = useState(false); //esta em modo de edição?
  const [eventos, setEventos] = useState([]); //array
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [tipoEventos, setTipoEventos] = useState({});
  const [optionsTipoEventos, setOptionsTipoEventos] = useState([]);
  const [date, setDate] = useState();
  const [showSpinner, setShowSpinner] = useState(false); // componente notification
  const [notifyUser, setNotifyUser] = useState(); // componente notification

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

  //chamada do tipo de eventos na api
  useEffect(() => {
    // define  a chamda da nossa api
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
      const instituicaoEvento = await api.get(instituicaoResource);
      const retorno = await api.post(eventResource, {
        nomeEvento: nome,
        descricao: descricao,
        dataEvento: date,
        idTipoEvento: tipoEventos,
        idInstituicao: instituicaoEvento.idInstituicao,
      });
      limparForms();
      notify("Evento cadastrado com sucesso!");
      console.log(retorno);
      loadEvents();
    } catch (error) {
      notifyDanger("Error ao cadastrar!");
    }
  }

  function handleDelete(idElement) {}

  function handleUpdate() {}

  function showUpdateForm() {
    SetFrmEdit(true);
  }
  function editActionAbort() {
    SetFrmEdit(false);
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
    setNome("");
    setDescricao("");
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
                      value={nome}
                      manipulationFunction={(e) => {
                        setNome(e.target.value);
                      }}
                    />
                    <Input
                      id="Descricao"
                      placeholder="Descrição"
                      name={"descricao"}
                      type={"text"}
                      required={"required"}
                      value={descricao}
                      manipulationFunction={(e) => {
                        setDescricao(e.target.value);
                      }}
                    />
                    <Select
                      id="TipoEvento"
                      name={"tipoEventos"}
                      required={"required"}
                      value={tipoEventos}
                      manipulationFunction={(e) => {
                        setTipoEventos(e.target.value);
                      }}
                      options={optionsTipoEventos}
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
    </>
  );
};

export default EventosPage;
