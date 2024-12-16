import "./styles.css";
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

function Partners() {
  const imageSources = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
  ];

  return (
    <div className="df-c items-center !gap-12 w-full partners">
      <div className="title pr"><div className="wave"></div>شركاؤنا</div>
      <div className="our-part-cont df">
        <div className="title sdnone">شركاؤنا</div>
        <Swiper
             spaceBetween={30}
             centeredSlides={true}
             speed={1000}
             navigation={true}
             autoplay={{
             delay: 2000,
             disableOnInteraction: false,
             reverseDirection: true,
             }}
             pagination={{
             clickable: true,
             }}
             slidesPerView={5}
             dir="rtl"
             loop={true}
             modules={[Autoplay, Navigation]}
             className="mySwiper"
             breakpoints={{
                0: {
                  slidesPerView: 1, // 2 slides per view for screens smaller than 600px
                  spaceBetween: 10,
                },
                600: {
                  slidesPerView: 5, // 5 slides per view for screens larger than 600px
                  spaceBetween: 30,
                },
              }}
        >
            {imageSources.map((src, index) => (
            <SwiperSlide key={index}>
                <img src={src} alt={`Partner ${index + 1}`} height="100" width="250" />
            </SwiperSlide>
            ))}
        </Swiper>

      </div>
    </div>
  );
}

export default Partners;
