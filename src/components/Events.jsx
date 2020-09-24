import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import event from "../data/events.json";
import Event from "./Event";

import "swiper/swiper.scss";

SwiperCore.use([Autoplay]);

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
        loop={true}
        centeredSlides={true}
        spaceBetween={10}
        slidesPerView={"1.20"}
        setWrapperSize={true}
        speed={1000}
        autoplay={{ delay: 1000 }}
        data-swiper-autoplay={2000}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {event.map((event, index) => {
          return (
            <SwiperSlide>
              <div id="card-wrapper" key={index}>
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
