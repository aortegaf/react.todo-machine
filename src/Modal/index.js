import React from "react";
import ReactDOM from "react-dom";

function Modal(props) {
  return ReactDOM.createPortal(
    <div className="Modal">{props.children}</div>,
    document.getElementById("modal")
  );
}

export { Modal };
