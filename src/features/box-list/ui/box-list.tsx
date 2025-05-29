import { PumpCard } from 'src/entities/pump-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import cls from './box-list.module.scss';

const BoxList = (): React.ReactNode => {
  return (
    <section className={cls.box_list}>
      <div className='container'>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          // pagination={true}
          spaceBetween={3}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1.05,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.5,
            },

            1280: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <PumpCard
              img={'img/content/r160.jpg'}
              img2x={'img/content/r160@2x.jpg 2x'}
              webp={'img/content/r160.webp'}
              webp2x={'img/content/r160@2x.webp 2x'}
              title={'Гидрораспределители Р-160'}
              desc={
                'Гидропривод навески сельскозяйственной техники, трктора Кировец'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <PumpCard
              img={'img/content/r80.jpg'}
              img2x={'img/content/r80@2x.jpg 2x'}
              webp={'img/content/r80.webp'}
              webp2x={'img/content/r80@2x.webp 2x'}
              title={'Гидрораспределители Р-80'}
              desc={
                'Гидропривод навески трктора МТЗ, бурильных машин'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <PumpCard
              img={'img/content/r100.jpg'}
              img2x={'img/content/r100@2x.jpg 2x'}
              webp={'img/content/r100.webp'}
              webp2x={'img/content/r100@2x.webp 2x'}
              title={'Гидрораспределители Р-100 / P-200'}
              desc={'Гидропривод экскаваторов-погрузчиков на базе трактора МТЗ'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PumpCard
              img={'img/content/rp70.jpg'}
              img2x={'img/content/rp70@2x.jpg 2x'}
              webp={'img/content/rp70.webp'}
              webp2x={'img/content/rp70@2x.webp 2x'}
              title={'Гидрораспределители РП-70'}
              desc={
                'Гидропривод навески трктора МТЗ'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <PumpCard
              img={'img/content/bosh.jpg'}
              img2x={'img/content/bosh@2x.jpg 2x'}
              webp={'img/content/bosh.webp'}
              webp2x={'img/content/bosh@2x.webp 2x'}
              title={'Гидрораспределители Bosch Rexroth'}
              desc={
                'Гидропривод навески сельскозяйственной техники, трктора Кировец'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <PumpCard
              img={'img/content/box-krane.jpg'}
              img2x={'img/content/box-krane@2x.jpg 2x'}
              webp={'img/content/box-krane.webp'}
              webp2x={'img/content/box-krane@2x.webp 2x'}
              title={'Гидрораспределители автокранов'}
              desc={
                'Гидрораспределитель осноных операций автокрана'
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default BoxList;
