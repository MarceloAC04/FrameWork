import React from "react";
import ImageIllustrator from "../../componentes/ImageIllustrator/ImageIllustrator";
import Titulo from "../../componentes/Titulo/Titulo";
import eventoImage from "../../assets/images/evento.svg";
import "./EventosPage.css";
import MainContent from "../../componentes/MainContent/MainContent";
import Container from "../../componentes/Container/Container";

const EventosPage = () => {
  return (
    <MainContent>
      <section className="cadastro-evento-section">
        <Container>
          <div className="cadastro-evento__box">
            <Titulo titleText="Eventos page" />
            <ImageIllustrator imageRender={eventoImage} />
          </div>
        </Container>
      </section>
    </MainContent>
  );
};

export default EventosPage;
