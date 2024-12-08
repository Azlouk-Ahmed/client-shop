import { useState } from 'react';
import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import AdSlide from './AdSlide';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function AdSection() {
  const [background, setBackground] = useState('bg-default'); // Initial background class

  const handleSlideChange = (swiper) => {
    const backgrounds = [
      'bg-slide1',
      'bg-slide2',
      'bg-slide3',
      'bg-slide4',
      'bg-slide5',
      'bg-slide6',
    ];
    setBackground(backgrounds[swiper.activeIndex]);
  };

  // Define an array of primary colors for the slides
  const primaryColors = ['#189ab4', '#009688', '#a1a1ff', '#e3be63', '#F79489', '#62c4ff'];

  return (
    <div className={`pr ad-sec pt-16 ${background}`}>
      <img src="/img/hiddenbg.png" className="hiddenbg" alt="Hidden Background" />

      <Swiper
        direction="vertical"
        pagination={{
          clickable: true,
        }}
        onSlideChange={handleSlideChange}
        modules={[Pagination, Navigation]}
        speed={1000}
        className="mySwiper"
      >
        {primaryColors.map((color, index) => (
          <SwiperSlide key={index}>
            <AdSlide primaryColor={color} />
          </SwiperSlide>
        ))}
      </Swiper>

      <img src="/img/hiddenrev-bg.png" className="hidad" />
    </div>
  );
}

export default AdSection;
