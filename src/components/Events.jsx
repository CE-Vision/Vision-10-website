import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import event from "../data/events.json";
import Event from "./Event";

import "swiper/swiper.scss";

const Events = () => {
  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          marginTop: "1em",
          fontSize: "5em",
          fontWeight: "700",
        }}
      >
        Events
      </h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {event.map((event, index) => {
          return (
            <SwiperSlide>
              <div key={index}>
                <Event
                  img=""
                  eventTitle={event.eventname}
                  eventTagline={event.tagline}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Events;
