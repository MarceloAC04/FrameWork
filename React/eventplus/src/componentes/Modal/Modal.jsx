import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import trashDelete from "../../assets/images/trash-delete-red.png";

import { Button, Input } from "../../componentes/FormComponents/FormComponents";
import { UserContex } from "../../context/AuthContext";
import "./Modal.css";

const Modal = ({
  modalTitle = "Feedback",
  comentaryText = "Não informado. Não informado. Não informado.",
  idEvento = null,
  idCommentary,
  fnGet = null,
  showHideModal = false,
  fnDelete = null,
  fnPost = null

}) => {

  const {userData, setUserData} = useContext(UserContex);
  const [commentary, setCommentary] = useState("")
  console.clear()
  console.log(userData);
  console.log(idCommentary);
 

   useEffect(() =>
   {
     async function loadCommentary() {
       fnGet(userData.id, userData.idEvento)
     }
     loadCommentary();
   },[])

  return (
    <div className="modal">
      <article className="modal__box">
        
        <h3 className="modal__title">
          {modalTitle}
          <span onClick={()=> showHideModal(true)} className="modal__close">X</span>
        </h3>

        <div className="comentary">
          <h4 className="comentary__title">Comentário</h4>
          <img
            src={trashDelete}
            className="comentary__icon-delete"
            alt="Ícone de uma lixeira"
            onClick={() => {
              fnDelete(idCommentary)
            }}
          />
          <p className="comentary__text"
          >{comentaryText}</p>

          <hr className="comentary__separator" />
        </div>

        <Input
          placeholder="Escreva seu comentário..."
          additionalClass="comentary__entry"
          value={commentary}
          manipulationFunction={(e) => {
            setCommentary(e.target.value);
          }}
        />

        <Button
          textButton="Comentar"
          additionalClass="comentary__button"
          manipulationFunction={() => {
            fnPost(commentary)
          }}
        />
      </article>
    </div>
  );
};

export default Modal;
