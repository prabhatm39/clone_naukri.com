import React from "react";
import styles from "./Compan.module.css";
import data from "../../../json/tp.json";
import Compan from "./Compan.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#F16E49",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#F16E49",
        borderRadius: "50%",
        left: "-25px !important",
      }}
      onClick={onClick}
    />
  );
}

export const TopCom = () => {
  const caraouselOne = () =>
    data.comp.map((item) => <Compan {...item} key={item.id} />);
  return (
    <div className={styles.caraousel}>
      <div className={styles.caraouselInfo}>
        <h2>Trending on Naukri today</h2>
      </div>
      <Slider
        dots={false}
        slidesToShow={5}
        slidesToScroll={5}
        autoplay={true}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        responsive={[
          {
            breakpoint: 480,
            settings: { slidesToShow: 4, slidesToScroll: 4 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 4, slidesToScroll: 4 },
          },
          {
            breakpoint: 1024,
            settings: { slidesToShow: 5, slidesToScroll: 5 },
          },
        ]}
      >
        {caraouselOne()}
      </Slider>
    </div>
  );
};
