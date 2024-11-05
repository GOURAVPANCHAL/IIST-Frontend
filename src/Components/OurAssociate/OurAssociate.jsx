import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './associate.css'
import image1 from "../../Assets/associates_logos/1.png";
import image2 from "../../Assets/associates_logos/2.png";
import image3 from "../../Assets/associates_logos/3.png";
import image4 from "../../Assets/associates_logos/4.png";
import image5 from "../../Assets/associates_logos/5.png";
import image6 from "../../Assets/associates_logos/6.png";
import image7 from "../../Assets/associates_logos/7.png";
import image8 from "../../Assets/associates_logos/8.png";
import image9 from "../../Assets/associates_logos/9.png";
import image10 from "../../Assets/associates_logos/10.png";
import image11 from "../../Assets/associates_logos/11.png";
import image12 from "../../Assets/associates_logos/12.png";
import image13 from "../../Assets/associates_logos/13.png";
import image14 from "../../Assets/associates_logos/14.png";
import image15 from "../../Assets/associates_logos/15.png";
import image16 from "../../Assets/associates_logos/16.png";
import image17 from "../../Assets/associates_logos/17.png";
import image18 from "../../Assets/associates_logos/18.png";
import image19 from "../../Assets/associates_logos/19.png";

const OurAssociate = () => {
  const swiperRef = useRef(null);
  const associatesImages = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9,
    image10, image11, image12, image13, image14, image15, image16, image17,
    image18, image19,
  ];

  return (
    <section className="container py-5">
      <h2 className="section-title text-center">OUR ASSOCIATES</h2>
      <section className="ourAssociatesslider">
        <div className="our-associate-prev-btn" onClick={() => swiperRef.current.swiper.slidePrev()}>
          <i className="bi bi-arrow-left"></i>
        </div>
        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={2}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 4 },
            480: { slidesPerView: 1 },
          }}
        >
          {associatesImages.map((image, index) => (
            <SwiperSlide key={index} className="slider-item">
              <img
                src={image}
                className="program-img img-fluid"
                alt={`associate-${index + 1}`}
                style={{ width: "100%", height: "auto" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="our-associate-next-btn" onClick={() => swiperRef.current.swiper.slideNext()}>
          <i className="bi bi-arrow-right"></i>
        </div>
      </section>
    </section>
  );
};

export default OurAssociate;
