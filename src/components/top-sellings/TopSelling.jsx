import "./topsell.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductSlide from "../productSlide/ProductSlide";

function TopSelling() {
  return (
    <div className="top-sellings pr" style={{ direction: "rtl" }}>
      <img src="/img/spl3.png" className="spl3" />
      <div className="blur tl"></div>
      <div className="title ta-c mt-8">الأكثر مبيعًا</div>
      <div className="options df ta-c w-1/2 mx-auto">
        <div className="option">اليوم</div>
        <div className="option active">هذا الأسبوع</div>
        <div className="option">هذا الشهر</div>
        <div className="option">كل الوقت</div>
      </div>
      <div className="top-container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          speed={1000}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          centeredSlides={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProductSlide />
          </SwiperSlide>
          <SwiperSlide>
            <ProductSlide />
          </SwiperSlide>
          <SwiperSlide>
            <ProductSlide />
          </SwiperSlide>
          <SwiperSlide>
            <ProductSlide />
          </SwiperSlide>
          <SwiperSlide>
            <ProductSlide />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default TopSelling;
