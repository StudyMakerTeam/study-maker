import React from "react";
import "./modal.css";

const Modal = (props) => {
  const { open, close } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <button className="close" onClick={close}>
            &times;
          </button>
          {props.children}
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
