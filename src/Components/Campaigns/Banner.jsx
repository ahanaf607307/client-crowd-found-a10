import React from "react";
import { Fade } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderOne from "../../assets/b1.jpg";
import sliderTwo from "../../assets/b2.jpg";
import sliderThree from "../../assets/b3.jpg";
import sliderFour from "../../assets/b4.jpg";
function Banner() {
  return (
    <div>
      <Fade>
      <Swiper
      pagination={true}
      modules={[Pagination]}
      className="h-[400px] max-w-[2000px] mx-auto md:h-[500px] lg:h-[650px] rounded-xl"
    >
      <SwiperSlide>
        <img
          className="w-full h-[200px] md:h-[400px] lg:h-[700px]  "
          src={sliderOne}
          alt=""
          
        />
      
        <div className="absolute md:bottom-32 lg:bottom-14 bottom-16">

            <Fade>
          <h1 className="text-sm md:text-2xl font-semibold text-[#fb944f]  bg-white/70 px-3 py-2 animate__animated animate__fadeInLeft">A community-driven platform to bring ideas to life.</h1>
            </Fade>
        </div>
      
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[200px] md:h-[400px] lg:h-[700px] "       
          src={sliderTwo}
          alt=""
          
        />
        <div className="absolute md:bottom-32 lg:bottom-14 bottom-16">
         <Fade>
         <h1 className="text-sm md:text-2xl font-semibold text-[#fb944f] bg-white/70 px-3 py-2 animate__animated animate__fadeInLeft">Where small contributions grow big dreams.</h1>
         </Fade>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[200px] md:h-[400px] lg:h-[700px] "
          src={sliderThree}
          alt=""
          
        />
        <div className="absolute md:bottom-32 lg:bottom-14 bottom-16">
          <Fade>
          <h1 className="text-sm md:text-2xl font-semibold text-[#fb944f] bg-white/70 px-3 py-2 animate__animated animate__fadeInLeft">Empowering projects with the power of community</h1>
          </Fade>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[200px] md:h-[400px] lg:h-[700px] "
          src={sliderFour}
          alt=""
          
        />
        <div className="absolute md:bottom-32 lg:bottom-14 bottom-16">
         <Fade> 
         <h1 className="text-sm md:text-2xl font-semibold text-[#fb944f] bg-white/70 px-3 py-2 animate__animated animate__fadeInLeft">Weaving support for innovative ideas</h1>
         </Fade>
        </div>
      </SwiperSlide>
    </Swiper>
      </Fade>
    </div>
  );
}

export default Banner;

