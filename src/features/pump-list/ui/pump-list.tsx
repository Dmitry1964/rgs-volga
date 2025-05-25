import { PumpCard } from 'src/entities/pump-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import cls from './pump-list.module.scss';

const PumpList = (): React.ReactNode => {
  return (
    <section className={cls.pump_list}>
      <div className='container'>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          // pagination={true}
          spaceBetween={5}
          loop={true}
          autoHeight={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },

            // 375: {
            //   slidesPerView: 1.6,
            // },

            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <PumpCard
              img={'img/content/a10vso.jpg'}
              img2x={'img/content/a10vso@2x.jpg'}
              webp={'img/content/a10vso.webp'}
              webp2x={'img/content/a10vso@2x.webp'}
              title={'Гидронасосы серии Rexroth A10VSO'}
              desc={
                'Гидропривод навески сельскозяйственной и строительной техники'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <PumpCard
              img={'img/content/PVS112.jpg'}
              img2x={'img/content/PVS112@2x.jpg'}
              webp={'img/content/PVS112.webp'}
              webp2x={'img/content/PVS112@2x.webp'}
              title={'Гидронасосы серии НП-90/НП-112'}
              desc={
                'Гидропривод автомиксеров,комбайнов, минипогрузчиков'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <PumpCard
              img={'img/content/313_3_55.jpg'}
              img2x={'img/content/313_3_55@2x.jpg'}
              webp={'img/content/313_3_55.webp'}
              webp2x={'img/content/313_3_55@2x.webp'}
              title={'Гидронасосы серии ПСМ 313.3.55'}
              desc={'Основное применение экскаваторы ТВЕКС ЕК-14(18) и ЕТ-14(16)'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PumpCard
              img={'img/content/rexrorh4vg.jpg'}
              img2x={'img/content/rexrorh4vg@2x.jpg'}
              webp={'img/content/rexrorh4vg.webp'}
              webp2x={'img/content/rexrorh4vg@2x.webp'}
              title={'Гидронасосы серии Rexroth A4VG/A10VG'}
              desc={
                'Гидростатические передачи сельскозяйственной и дорожно-строительной техники.'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <PumpCard
              img={'img/content/303_4_112.jpg'}
              img2x={'img/content/303_4_112@2x.jpg'}
              webp={'img/content/303_4_112.webp'}
              webp2x={'img/content/303_4_112@2x.webp'} 
              title={'Регулируемые гидромоторы ПСМ 303.4.112, МГ112'}
              desc={
                'Привод лебедок автокранов, исполнительного механизма бурильных машин'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <PumpCard
              img={'img/content/pvh112.jpg'}
              img2x={'img/content/pvh112@2x.jpg'}
              webp={'img/content/pvh112.webp'}
              webp2x={'img/content/pvh112@2x.webp'}
              title={'Гидромоторы серии МП-90/МП-112'}
              desc={
                'Гидропривод автомиксера, гидростатические передачи комбайнов, минипогрузчиков МКСМ-800, UNC'
              }
            />
          </SwiperSlide>
        </Swiper>

      </div>
    </section>
  );
};

export default PumpList;

{
  /* <PumpCard
img={'img/content/a10vso.jpg'}
img2x={'img/content/a10vso@2x.jpg'}
webp={'img/content/a10vso.webp'}
webp2x={'img/content/a10vso@2x.webp'}
title={'Гидронасосы серии Rexroth a10VSO'}
desc={'гидропривод навески сельскозяйственной и строительной техники'}
/> */
}
