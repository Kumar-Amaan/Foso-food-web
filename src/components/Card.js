import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "../Modal/Modal";

// import Item from "../pages/It";
import Menu from "../pages/Menu";

function Card(props) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="col-md-4 col-10 mb-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              Some quick example card title and make up the
              bulk of the card's content.
            </p>
            <p className="card-text">{props.desc}</p>
            {props.Rating}
            <br />
            <hr />
            <button className="btn btn-primary" onClick={() => setShow(true)}>
              {props.btname}
            </button>
            <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
              <Menu />
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
