import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import images
import img1 from "../../Assets/banners/homepageBanner.jpg";
// import img2 from "../../Assets/banners/banner2.jpg";
// import img3 from "../../Assets/banners/banner3.jpg";
// import img4 from "../../Assets/banners/banner4.jpg";
// import img5 from "../../Assets/banners/banner5.jpg";
// import img6 from "../../Assets/banners/banner6.jpg";
// import img7 from "../../Assets/banners/banner7.jpg";
// import img8 from "../../Assets/banners/banner8.jpg";
// import img9 from "../../Assets/banners/banner9.jpg";
// import img10 from "../../Assets/banners/banner10.jpg";

const Carasol = () => {
  const [caraImg, setImage] = useState([]);

  useEffect(() => {
    setImage([img1]);
  }, []);

  // useEffect(() => {
  //   setImage([img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]);
  // }, []);

  return (
    <>
      <section className="hero-cara">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {caraImg.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} alt={`carousel-image-${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Carasol;
