import cls from "./banner.module.scss";

const Banner = (): React.ReactNode => {
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
          <p className={cls.banner__slogan}>
            эффективный ремонт - наш приоритет
          </p>
          <h2 className={cls.banner__title}>
            Ремонт гидравлического оборудования
          </h2>
          <p className={cls.banner__desc}>
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
