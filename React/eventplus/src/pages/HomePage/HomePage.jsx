import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Banner from "../../componentes/Banner/Banner";
import Container from "../../componentes/Container/Container";
import NextEvent from "../../componentes/NextEvent/NextEvent";
import ContactSection from "../../componentes/ContactSection/ContactSection";
import MainContent from "../../componentes/MainContent/MainContent";
import VisionSection from "../../componentes/VisionSection/VisionSection";
import Titulo from "../../componentes/Titulo/Titulo";
import axios from "axios";

const HomePage = () => {
  const [nextEvents, setNextEvents] = useState([]); 

  const url = 'https://localhost:7118/api'


  useEffect(()=> {
    async function  getNextEvents() {
      try {
        const promise = await axios.get(`${url}/Evento/ListarProximos`)
        const dados = await promise.data;

        setNextEvents(dados); //atualiza o estado
      } catch (error) {
        alert("Deu ruim na api!")
      }   
    }
     getNextEvents(); //roda a função
  }, [])



  return (
    <MainContent>
      <Banner />

      <section className="proximos-eventos">
        <Container>
          <Titulo titleText={"Próximos Eventos"} />

          <div className="events-box">

           {
            nextEvents.map((e) => {
              return (
              <NextEvent 
              key={e.id}
              title={e.nomeEvento}
              description={e.descricao}
              eventDate={e.dataEvento}
              idEvent={e.id}
              />
              );
            })
           }

          </div>
        </Container>
      </section>

      <VisionSection />
      <ContactSection />
    </MainContent>
  );
};

export default HomePage;
