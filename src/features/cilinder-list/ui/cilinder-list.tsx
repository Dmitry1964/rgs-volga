import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './services.scss';
import { UnitCard } from 'src/entities/unit-card';

const CilinderList = () => {
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
          <UnitCard
            img="img/content/dump-track.jpg"
            img2x="img/content/dump-track2x.jpg"
            webp="img/content/dump-track.webp"
            webp2x="img/content/dump-track2x.webp"
            title="Телескопические цилиндры"
            list={['цилиндры самосвалов', 'цилиндры зерновозов', 'цилиндры сельхозтележек']}
            listImg={[]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <UnitCard
            img="img/content/krane.jpg"
            img2x="img/content/krane2x.jpg"
            webp="img/content/krane.webp"
            webp2x="img/content/krane2x.webp"
            title="Гидроцилиндры автокранов"
            list={['гидроцилиндр подъема стрелы', 'гидроцилиндр выдвижения стрелы', 'гидроцилиндры опор', 'гидроцилиндры выдвижения опор']}
            listImg={[]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <UnitCard
            img="img/content/village.jpg"
            img2x="img/content/village2x.jpg"
            webp="img/content/village.webp"
            webp2x="img/content/village2x.webp"
            title="Цилиндры сельхозтехники"
            list={['Гидроцилиндры К700', 'Гидроцилиндры навески', 'Гидроцилиндры опрыскивателя', 'Прочая сельхозтехника']}
            listImg={[]}
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <UnitCard
            img="img/content/rvd.jpg"
            img2x="img/content/rvd2x.jpg"
            webp="img/content/rvd.webp"
            webp2x="img/content/rvd2x.webp"
            title="Изготовление РВД"
          />
        </SwiperSlide>
        <SwiperSlide>
          <UnitCard
            img="img/content/shtock.jpg"
            img2x="img/content/shtock2x.jpg"
            webp="img/content/shtock.webp"
            webp2x="img/content/shtock2x.webp"
            title="Штоки и гильзы"
          />
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default CilinderList;

