import { Divider, Grid, Button, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState, createRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Slider1() {
  const mySlider = createRef();

  var settings = {
    dots: true,
    autoplay: 300,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const images = [
    { image: "/Assets/sbihm/img_1_1628229558197.jpg" },
    { image: "/Assets/sbihm/img_1_1628229558197.jpg" },
    { image: "/Assets/sbihm/img_1_1628229558197.jpg" },
    { image: "/Assets/sbihm/img_1_1628229558197.jpg" },
  ];

  const playSlide = () => {
    return images.map((item) => {
      return <img src={item.image} height={500} />;
    });
  };

  return (
    <React.Fragment>
      <Slider ref={mySlider} {...settings}>
        {playSlide()}
      </Slider>
    </React.Fragment>
  );
}