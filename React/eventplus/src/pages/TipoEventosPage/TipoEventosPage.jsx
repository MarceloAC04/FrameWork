import React, {useState} from "react";
import Titulo from "../../componentes/Titulo/Titulo";
import MainContent from "../../componentes/MainContent/MainContent";
import Container from "../..//componentes/Container/Container";
import ImageIllustrator from "../../componentes/ImageIllustrator/ImageIllustrator";
import tipoEventoImagem from '../../assets/images/tipo-evento.svg'
import FormCompenents from '../../componentes/FormComponents/FormComponents'
import "./TipoEventosPage.css";

const TipoEventosPage = () => {
  const [frmEdit, SetFrmEdit] = useState(false); //esta em modo de edição?

  function handleSubmit() {
    alert('Bora Cadastrar')
  }

  function handleUpdate() {
    alert('Bora editar')
  }

  return (
    <>
      <MainContent>
        <section className="cadastro-evento-section">
          <Container>
            <div className="cadastro-evento__box">
              <Titulo titleText={"Cadastro Tipo de Eventos"} />

              <ImageIllustrator imageRender={tipoEventoImagem} />
              <form className="ftipo-evento"
                    onSubmit={frmEdit ? handleUpdate : handleSubmit}
              >
                {
                  !frmEdit ? (<p>Tela de Cadastro</p>) : (<p>Tela de Edição</p>)
                }
              </form>
            </div>
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default TipoEventosPage;
