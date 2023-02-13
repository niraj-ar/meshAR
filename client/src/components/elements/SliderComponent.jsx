import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import SliderCard from "./SliderCard";
import { ARObjects } from "../../data/ARObjects";

const SliderComponents = () => {
  const slider = useRef();

  const settings = {
    className: "slider variable-width",
    arrows: false,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    draggable: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    touchMove: true,
    useCSS: true,
    swipe: true,
    useTransform: true,
  };

  return (
    <>
      <Slider
        {...settings}
        ref={slider}
        style={{
          width: "120%",
        }}
      >
        {ARObjects.map((ARObject) => (
          <SliderCard
            key={ARObject.id}
            id={ARObject.id}
            name={ARObject.name}
            poster={ARObject.poster}
            src={ARObject.src}
            place={ARObject.placement}
          />
        ))}
      </Slider>
    </>
  );
};

export default SliderComponents;
