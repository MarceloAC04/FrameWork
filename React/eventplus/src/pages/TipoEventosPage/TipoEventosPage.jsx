import React from "react";
import Titulo from "../../componentes/Titulo/Titulo";
import MainContent from "../../componentes/MainContent/MainContent";
import Container from "../..//componentes/Container/Container";
import ImageIllustrator from "../../componentes/ImageIllustrator/ImageIllustrator";
import "./TipoEventosPage.css";

const TipoEventosPage = () => {
  return (
    <>
      <MainContent>
        <section className="cadastro-evento-section">
          <Container>
            <div className="cadastro-evento-box">
              <Titulo titleText={"Cadastro Tipo de Eventos"} />

              <ImageIllustrator />
              <form className="ftipo-evento">
                <p>Formúlario será criado aqui</p>
              </form>
            </div>
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default TipoEventosPage;
