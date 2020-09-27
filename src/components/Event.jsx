import React, { useState } from "react";
import "../scss/event.scss";
import Modal from "./Modal";

export default function Event(props) {
  const [modalState, setModalState] = useState(false);
  // let children = props.rounds.map((value, index) => {
  //   return (
  //     <div>
  //       <h1>{value.name}</h1>
  //       <h2>{value.tagline}</h2>
  //       <p>{value.info}</p>
  //     </div>
  //   );
  // });

  // function showModal(bool) {
  //   if (bool) {
  //     return (
  //       // <h1>Hello THIS WORKS</h1>
  //       <div className="Backdrop">
  //         <Modal
  //           show={true}
  //           rounds={props.rounds}
  //           key={props.eventTagline}
  //         ></Modal>
  //       </div>
  //     );
  //   }
  // }

  return (
    <>
      {modalState ? (
        <>
          <div
            className="Backdrop"
            onClick={() => {
              setModalState(false);
            }}
          />
          <Modal show={modalState} rounds={props.rounds}></Modal>
        </>
      ) : null}
      <div
        className="card"
        onClick={() => {
          console.log("onCLickFired");
          setModalState(true);
        }}
      >
        <div className="img">
          <img src={props.img} alt="" />
        </div>
        <div className="txt">
          <div>
            <h2>{props.eventTitle}</h2>
            <p>{props.eventTagline}</p>
            <div className="tag">{props.type}</div>
          </div>

          <div id="more">Learn more </div>
        </div>
      </div>
    </>
  );
}
