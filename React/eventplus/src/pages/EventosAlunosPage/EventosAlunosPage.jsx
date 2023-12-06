import React, { useContext, useEffect, useState } from "react";
import MainContent from "../../componentes/MainContent/MainContent";
import Titulo from "../../componentes/Titulo/Titulo";
import Table from "./TableEva/TableEva";
import Container from "../../componentes/Container/Container";
import { Select } from "../../componentes/FormComponents/FormComponents";
import Spinner from "../../componentes/Spinner/Spinner";
import Notification from "../../componentes/Notification/Notification";
import Modal from "../../componentes/Modal/Modal";
import api, {
  eventResource,
  myEventsResource,
  presenceEventResource,
} from "../../Services/Service";
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
  const [notifyUser, setNotifyUser] = useState(); // componente notification

  // recupera os dados globais do usuário
  const { userData, setUserData } = useContext(UserContex);

  const verificaPresenca = (arrAllEvents, eventUser) => {
    for (let e = 0; e < arrAllEvents.length; e++) {
      for (let u = 0; u < eventUser.length; u++) {
        if (arrAllEvents[e].idEvento === eventUser[u].idEvento) {
          arrAllEvents[e].situacao = true;
          arrAllEvents[e].idPresencaEvento = eventUser[u].idPresencaEvento;
          break;
        }
      }
    }
    return arrAllEvents;
  };

  useEffect(() => {
    
    loadEventsType();
  }, [tipoEvento, userData.id]);
  
  async function loadEventsType() {
    setShowSpinner(true);
    setEventos([]);
    if (tipoEvento === "1") {
      try {
        const todosEventos = await api.get(eventResource);
        const meusEventos = await api.get(
          `${myEventsResource}/${userData.id}`
        );
        const eventosMarcados = verificaPresenca(
          todosEventos.data,
          meusEventos.data
        );
        setEventos(eventosMarcados);
      } catch (error) {
        console.log(error);
      }
    } else if (tipoEvento === "2") {
      try {
        const retornoEventos = await api.get(
          `${myEventsResource}/${userData.id}`
        );
        const arrEventos = [];

        retornoEventos.data.forEach((e) => {
          arrEventos.push({ ...e.evento, situacao: e.situacao , idPresencaEvento: e.idPresencaEvento});
        });
        setEventos(arrEventos);
      } catch (error) {
        console.log(error);
      }
    } else {
      setEventos([]);
    }
    setShowSpinner(false);
  }
  
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

  async function handleConnect(eventId, whatTheFunction, presencaId = null) {
    if (whatTheFunction === "connect") {
      alert("CONECTAR AO EVENTO:" + eventId);
      try {
        const promise = await api.post(presenceEventResource, {
          situacao: true,
          idUsuario: userData.id,
          idEvento: eventId,
        });
        if (promise.status === 201) {
          loadEventsType()
          notify("Presença confirmada!");
        }
      } catch (error) {
        notifyDanger("Error na api");
      }
      return;
    }
    alert("DESCONECTAR AO EVENTO:" + presencaId);
    try {
      const unconnected = await api.delete(`${eventResource}/${presencaId}`);
      if (unconnected.status === 204) {
        loadEventsType()
        notify("Presença cancelada!");
      }
    } catch (error) {
      notifyDanger("Error na api");
    }
  }
  return (
    <>
      <MainContent>
        <div className="lista-eventos-section">
          <Container>
            <Titulo
              titleText={"Eventos"}
              potatoClass="custom-title"
              color="black"
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
        </div>
      </MainContent>

      {/* SPINNER -Feito com position */}
      {showSpinner ? <Spinner /> : null}

      {showModal ? (
        <Modal
          userId={userData.id}
          showHideModal={showHideModal}
          fnDelete={commentaryRemove}
        />
      ) : null}
    </>
  );
};

export default EventosAlunoPage;
