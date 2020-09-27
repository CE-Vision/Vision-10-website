import React, { useState, useRef } from "react";
import SwiperCore, { Autoplay, Pagination, Navigation, Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import event from "../data/events.json";
import Event from "./Event";
import Modal from "./Modal";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Autoplay, Pagination, Navigation, Zoom]);

const Events = () => {
  const [modalState, setModalState] = useState(false);

  function showModal(rounds) {
    setEventRounds(rounds);
    console.log("This is firing");
    swiperRef.current.swiper.autoplay.stop();
    setModalState(true);
  }

  const [eventRounds, setEventRounds] = useState([]);
  const swiperRef = useRef(null);
  const [swiperSlides] = useState(
    event.map((event, index) => {
      return (
        <>
          <SwiperSlide>
            <div id="card-wrapper" key={index}>
              <Event
                eventTitle={event.eventname}
                eventTagline={event.tagline}
                img={event.image}
                type={event.category}
                rounds={event.rounds}
                showModal={showModal}
              />
            </div>
          </SwiperSlide>
        </>
      );
    })
  );

  const swiper = (
    <Swiper
      loop={true}
      ref={swiperRef}
      // zoom={true}
      centeredSlides={true}
      spaceBetween={10}
      slidesPerView={"1.25"}
      pagination={{ clickable: true }}
      navigation
      setWrapperSize={true}
      scrollbar={{ draggable: true }}
      speed={1000}
      autoplay={{ delay: 1000 }}
      data-swiper-autoplay={2000}
    >
      {swiperSlides}
    </Swiper>
  );

  return (
    <div id="events">
      <div className="container">
        <h1
          style={{
            textAlign: "center",
            fontSize: "45px",
          }}
        >
          EVENTS
        </h1>
      </div>

      {swiper}
      {modalState ? (
        <>
          <div
            className="Backdrop"
            onClick={() => {
              setModalState(false);
            }}
          />
          <Modal show={modalState} rounds={eventRounds}></Modal>
        </>
      ) : null}
    </div>
  );
};

export default Events;

// Legendary Nested Switch Case

/* function setTech() {
  changeSlides(
    event.map((event, index) => {
      if (index < 3) return;
      return (
        <SwiperSlide>
          <div id="card-wrapper" key={index}>
            <Event
              eventTitle={event.eventname}
              eventTagline={event.tagline}
              img={event.image}
              type={event.category}
              rounds={event.rounds}
            />
          </div>
        </SwiperSlide>
      );
    })
  );
}
function setNonTech() {
  changeSlides(
    event.map((event, index) => {
      if (index > 2) return;
      return (
        <SwiperSlide>
          <div id="card-wrapper" key={index}>
            <Event
              eventTitle={event.eventname}
              eventTagline={event.tagline}
              img={event.image}
              type={event.category}
              rounds={event.rounds}
            />
          </div>
        </SwiperSlide>
      );
    })
  );
}
function setBoth() {
  changeSlides(
    event.map((event, index) => {
      return (
        <SwiperSlide>
          <div id="card-wrapper" key={index}>
            <Event
              eventTitle={event.eventname}
              eventTagline={event.tagline}
              img={event.image}
              type={event.category}
              rounds={event.rounds}
            />
          </div>
        </SwiperSlide>
      );
    })
  );
}
function handleChipOnClick(index) {
  switch (index) {
    case 0:
      switch (chipState[0]) {
        case 0:
          //State with chipState [0,0] is not possible
          changeChipState([1, 1]);
          setBoth();
          break;
        case 1:
          changeChipState([0, 1]);
          setNonTech();
          break;
        default:
          break;
      }
      if (chipState[0] === 1) {
        chipState = [0, 1];
        setTech();
      } else {
        chipState = [1, chipState[1]];
        setBoth();
      }
      break;
    case 1:
      switch (chipState[1]) {
        case 0:
          //State with chipState [0,0] is not possible
          changeChipState([1, 1]);
          setBoth();
          break;
        case 1:
          changeChipState([1, 0]);
          setTech();
          break;

        default:
          break;
      }
      if (chipState[1] === 1) {
        chipState = [1, 0];
        setNonTech();
      } else {
        chipState = [chipState[0], 1];
        setBoth();
      }
      break;
    default:
      break;
  }
} 
<div
    className={chipState[0] ? "chipActive" : "chip"}
     onClick={() => {
     handleChipOnClick(0);
          }}
          >
            TECH
          </div>
          <div
            className={chipState[1] ? "chipActive" : "chip"}
            onClick={() => {
              handleChipOnClick(1);
            }}
          >
            NON-TECH
          </div> */
