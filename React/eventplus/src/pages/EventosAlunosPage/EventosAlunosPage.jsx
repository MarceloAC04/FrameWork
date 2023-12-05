import React, { useContext, useEffect, useState } from "react";
import MainContent from "../../componentes/MainContent/MainContent";
import Titulo from "../../componentes/Titulo/Titulo";
import Table from "./TableEva/TableEva";
import Container from "../../componentes/Container/Container";
import { Select } from "../../componentes/FormComponents/FormComponents";
import Spinner from "../../componentes/Spinner/Spinner";
import Modal from "../../componentes/Modal/Modal";
import api, { eventResource, myEventsResource } from "../../Services/Service";
import { UserContex } from "../../context/AuthContext";
import "./EventosAlunosPage.css";

const EventosAlunoPage = () => {
  // state do menu mobile
  const [eventos, setEventos] = useState([]);
  // select mocado
  const [quaisEventos, setQuaisEventos] = useState([
    { value: 1, titulo: "Todos os eventos" },
    { value: 2, titulo: "Meus eventos" },
  ]);

  const [tipoEvento, setTipoEvento] = useState("1"); //código do tipo do Evento escolhido
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // recupera os dados globais do usuário
  const { userData, setUserData } = useContext(UserContex);

  async function loadEventsType() {
    setShowSpinner(true);
    setEventos([]);
    if (tipoEvento === "1") {
      try {
        const retornoEventos = await api.get(eventResource);
        setEventos(retornoEventos.data);
      } catch (error) {
        console.log("Error na api");
      }
    } else if (tipoEvento === "2") {
      try {
        const retornoEventos = await api.get(
          `${myEventsResource}/${userData.id}`
        );
        const arrEventos = [];

        retornoEventos.data.forEach((e) => {
          arrEventos.push(e.evento);
        });
        setEventos(arrEventos);
      } catch (error) {
        console.log("Error na api");
      }
    }
    else {
      setEventos([]);
    }
    setShowSpinner(false);
  }

  const verificaPresenca = (arrAllEvents, eventUser) => {
    for (let e = 0; e < arrAllEvents.length; e++) {
      for (let u = 0; u < eventUser.length; u++) {
        if (arrAllEvents[e].idEvento === eventUser[u].idEvento) {
          arrAllEvents[e].situacao = true;
          break;
        }
      }
    }
  }

  useEffect(() => {
    loadEventsType();
  }, [tipoEvento]);

  // toggle meus eventos ou todos os eventos
  function myEvents(tpEvent) {
    setTipoEvento(tpEvent);
  }

  async function loadMyComentary(idComentary) {
    return "????";
  }

  const showHideModal = () => {
    setShowModal(showModal ? false : true);
  };

  const commentaryRemove = () => {
    alert("Remover o comentário");
  };

  function handleConnect() {
    alert("Desenvolver a função conectar evento");
  }
  return (
    <>
      <MainContent>
        <Container>
          <Titulo
            titleText={"Eventos"}
            potatoClass="custom-title"
            color="#fde100"
          />

          <Select
            id="id-tipo-evento"
            name="tipo-evento"
            required={true}
            options={quaisEventos} // aqui o array dos tipos
            manipulationFunction={(e) => myEvents(e.target.value)} // aqui só a variável state
            value={tipoEvento}
            additionalClass="select-tp-evento"
          />
          <Table
            dados={eventos}
            fnConnect={handleConnect}
            fnShowModal={() => {
              showHideModal();
            }}
          />
        </Container>
      </MainContent>

      {/* SPINNER -Feito com position */}
      {showSpinner ? <Spinner /> : null}

      {showModal ? (
        <Modal
          userId={userData.userId}
          showHideModal={showHideModal}
          fnDelete={commentaryRemove}
        />
      ) : null}
    </>
  );
};

export default EventosAlunoPage;
