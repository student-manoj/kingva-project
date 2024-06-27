"use client";

import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { TestimoialsData } from "@/utils/TestimoialData";
import Heading from "./Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "#FF9301",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#FF9301" }}
      onClick={onClick}
    />
  );
}

const TestimonialSection = () => {
  const [items, setitems] = useState(TestimoialsData);

  var settings = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <Heading
            title="TESTIMONIAL"
            titleName="What Clients say"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur fermentum sem vitae dolor porta, quis auctor velit
              varius."
          />

          <div className="py-16">
            <Slider {...settings}>
              {items.map((val) => (
                <div key={val.id} className="px-4">
                  <TestimonialCard {...val} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
