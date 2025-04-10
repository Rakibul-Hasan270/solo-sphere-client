import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';

import bg1 from '../../assets/images/carousel1.jpg'
import bg2 from '../../assets/images/carousel2.jpg'
import bg3 from '../../assets/images/carousel3.jpg'

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Slider image={bg1} text={'Intrinsicly utilize market-driven web-readiness rather than synergistic initiatives.'}></Slider>
        </SwiperSlide>
        <SwiperSlide>
            <Slider image={bg2} text={'Intrinsicly utilize market-driven web-readiness rather than synergistic initiatives.'}></Slider>
        </SwiperSlide>
        <SwiperSlide>
            <Slider image={bg3} text={'Intrinsicly utilize market-driven web-readiness rather than synergistic initiatives.'}></Slider>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
