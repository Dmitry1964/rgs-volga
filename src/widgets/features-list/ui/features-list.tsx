import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import ServiceCard from 'src/features/service-card/ui/service-card';
import './services.scss';
import { AppRoutes } from 'src/app/routes/routes';

const FeaturesList = () => {
  return (
    <section className='services'>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={5}
        slidesPerView={3}
        loop={true}
        navigation={true}
        pagination={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2.5,
          },

          1280: {
            slidesPerView: 3
          }

        }}
        // autoplay={{
        //   delay: 0,
        //   pauseOnMouseEnter: true,
        //   disableOnInteraction: false,
        // }}
        // speed={3000}
      >
        <SwiperSlide>
          <ServiceCard
            img="img/content/diag.jpg"
            img2x="img/content/diag2x.jpg"
            webp="img/content/diag.webp"
            webp2x="img/content/diag2x.webp"
            title="Диагностика"
            desc="диагностика гидравлической системы и гидравлического оборудования"
            url="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            img="img/content/remont-hidr.jpg"
            img2x="img/content/remont-hidr2x.jpg"
            webp="img/content/remont-hidr.webp"
            webp2x="img/content/remont-hidr2x.webp"
            title="Ремонт оборудования"
            desc="ремонт гидравлического оборудования"
            url= {AppRoutes.Repair}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            img="img/content/remont-obor.jpg"
            img2x="img/content/remont-obor2x.jpg"
            webp="img/content/remont-obor.webp"
            webp2x="img/content/remont-obor2x.webp"
            title="Ремонт спецтехники"
            desc='ремонт спецтехники - автокраны, АГП, манипуляторы'
            url={AppRoutes.Sevice}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            img="img/content/rvd.jpg"
            img2x="img/content/rvd2x.jpg"
            webp="img/content/rvd.webp"
            webp2x="img/content/rvd2x.webp"
            title="Изготовление РВД"
            desc="изготовление рукавов высокого давления"
            url={AppRoutes.Rvd}
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <ServiceCard
            img="img/content/shtock.jpg"
            img2x="img/content/shtock2x.jpg"
            webp="img/content/shtock.webp"
            webp2x="img/content/shtock2x.webp"
            title="Штоки и гильзы"
            desc="изготовление штоков и гильз гидроцилиндров"
            url="#"
          />
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default FeaturesList;

