import "./../index.scss";
import { useRef } from "react";
import { ModalProps } from "../types";
import { useOnClickOutside} from "../CustomHooks/hooks";


export const Modal = ({ toggleModal, list, buttons, title, coordinates }: ModalProps) => {

  const modalRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalRef, toggleModal);

  return (
    
      <div ref={modalRef} className="modal-wrapper" style={coordinates?.top || coordinates?.left ? coordinates : {}}>
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
