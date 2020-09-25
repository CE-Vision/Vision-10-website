import React from "react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import event from "../data/events.json";
import Event from "./Event";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Events = () => {
  return (
    <div className="container" id="events">
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
        pagination={{ clickable: true }}
        navigation
        setWrapperSize={true}
        scrollbar={{ draggable: true }}
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
