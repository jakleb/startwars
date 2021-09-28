import "./../index.scss";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { Person, ButtonKind, ModalProps } from "../types";
import { useOnClickOutside, useRouter } from "../CustomHooks/hooks";


export const Modal = ({ toggleModal, list, buttons, title, coordinates }: ModalProps) => {
  const dispatch = useDispatch();

  let initialCoordinates = {
    top: 0,
    left: 0,
  }

  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, toggleModal);

  useEffect(() => {
    if (coordinates) {
      initialCoordinates = { ...{ top: coordinates.y + 20, left: coordinates.y } }
    }
  }, [])

  return (
    
      <div ref={modalRef} className="modal-wrapper" style={coordinates?.x ? initialCoordinates : {}}>
        <div className={`modal`}>
          <div className="modal-header">{title}</div>
          <div className="modal-content-conteiner">
            {list}
          </div>
          <div className="modal-btns-container">
            {buttons}
          </div>
        </div>
      </div>
    
  );
};
