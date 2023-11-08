import React from "react";
import "./HomePage.css";
import Banner from "../../componentes/Banner/Banner";
import Container from "../../componentes/Container/Container";
import NextEvent from "../../componentes/NextEvent/NextEvent";
import ContactSection from "../../componentes/ContactSection/ContactSection";
import MainContent from "../../componentes/MainContent/MainContent";
import VisionSection from "../../componentes/VisionSection/VisionSection";
import Titulo from "../../componentes/Titulo/Titulo";

const HomePage = () => {
  return (
    <MainContent>
      <Banner />

      <section className="proximos-eventos">
        <Container>
          <Titulo titleText={"Próximos Eventos"} />

          <div className="events-box">
            <NextEvent 
              title={"Evento X"}
              description={"Evento Bacana"}
              eventDate={"10/11/2023"}
              idEvent={"jjiedeidjeduied"}
              />
          </div>
        </Container>
      </section>

      <VisionSection />
      <ContactSection />
    </MainContent>
  );
};

export default HomePage;
