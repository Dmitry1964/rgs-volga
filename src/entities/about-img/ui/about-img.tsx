import cls from './about-img.module.scss';

const AboutImg = () => {
  return (
    <ul className={cls.about_img__list}>
      <li className={cls.about_img__item}>
        <picture>
          <source
            type="image/webp"
            srcSet="img/content/about-mobile-1.webp, img/content/about-mobile-1@2x.webp 2x"
          />
          <img
            src="img/content/about-mobile-1.jpg"
            srcSet="img/content/about-mobile-1@2x.jpg 2x"
            width={100}
            height={150}
            alt="Изображение спецтехники на фоне города"
          />
        </picture>
      </li>
      <li className={cls.about_img__item}>
        <picture>
          <source
            type="image/webp"
            srcSet="img/content/about-mobile-2.webp, img/content/about-mobile-2@2x.webp 2x"
          />
          <img
            src="img/content/about-mobile-2.jpg"
            srcSet="img/content/about-mobile-2@2x.jpg 2x"
            width={100}
            height={150}
            alt="Изображение спецтехники на фоне города"
          />
        </picture>
      </li>
      <li className={cls.about_img__item}>
        <picture>
          <source
            type="image/webp"
            srcSet="img/content/about-mobile-3.webp, img/content/about-mobile-3@2x.webp 2x"
          />
          <img
            src="img/content/about-mobile-3.jpg"
            srcSet="img/content/about-mobile-3@2x.jpg 2x"
            width={100}
            height={150}
            alt="Изображение спецтехники на фоне города"
          />
        </picture>
      </li>
    </ul>
  );
};

export default AboutImg;
