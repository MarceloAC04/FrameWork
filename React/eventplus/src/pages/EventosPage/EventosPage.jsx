import React, {useState} from "react";
import ImageIllustrator from "../../componentes/ImageIllustrator/ImageIllustrator";
import Titulo from "../../componentes/Titulo/Titulo";
import eventoImage from "../../assets/images/evento.svg";
import "./EventosPage.css";
import MainContent from "../../componentes/MainContent/MainContent";
import { Input, Button } from "../../componentes/FormComponents/FormComponents";
import Container from "../../componentes/Container/Container";

const EventosPage = () => {
  const [frmEdit, SetFrmEdit] = useState(false); //esta em modo de edição?
  const [nome, SetNome] = useState();

  function handleSubmit() {
    SetFrmEdit()
  }

  function handleUpdate() {
    
  }
  return (
    <MainContent>
      <section className="cadastro-evento-section">
        <Container>
          <div className="cadastro-evento__box">
            <Titulo titleText="Eventos page" />
            <ImageIllustrator imageRender={eventoImage} />
            <form className="ftipo-evento"  
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
    </MainContent>
  );
};

export default EventosPage;
