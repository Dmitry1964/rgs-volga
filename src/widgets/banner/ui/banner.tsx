import {gsap} from 'gsap';
import { useGSAP } from "@gsap/react";
import cls from "./banner.module.scss";

const Banner = (): React.ReactNode => {


  useGSAP(() => {
    gsap.from('#title', {opacity: 0, y: -100, duration: 1});
    gsap.from('#slogan', {opacity: 0, y: -100, duration: 1})
    gsap.from('#desc', {opacity: 0, y: 100, duration: 1})

  })

  return (
    <section className={cls.banner}>
      <div className={cls.banner__wrapper}>
        <div className={cls.banner__image}>
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/banner-desktop.webp, img/content/banner-desktop@2x.webp 2x"
            />
            <img
              src="img/content/banner-desktop.jpg"
              width={1920}
              height={803}
              alt="Баннер"
              srcSet="img/content/banner-desktop@2x.jpg 2x"
            />
          </picture>
        </div>
        <div className={cls.banner__content}>
          <p id="slogan" className={cls.banner__slogan}>
            эффективный ремонт - наш приоритет
          </p>
          <h2 id="title" className={cls.banner__title}>
            Ремонт гидравлического оборудования
          </h2>
          <p id="desc" className={cls.banner__desc}>
            Наша компания уже больше 20 лет занимается ремонтом гидравлического
            оборудования,<br/>сервисом и ремонтом гидравлических систем
            специализированной техники.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
