import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import ImageMagnifier from "../img magnifier/ImageMagnifier";

function ProductImages() {
  return (
      <Swiper navigation={true} centeredSlides={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><ImageMagnifier 
                src="../img/product1.png"
                width={300}
                height={200}
                magnifierHeight={500}
                magnifierWidth={500}
                zoomLevel={2}
                alt="Sample Image"
            /></SwiperSlide>
        <SwiperSlide><img src="/img/product2.png" /></SwiperSlide>
        
      </Swiper>
  );
}

export default ProductImages;
