import cls from './about.module.scss';
import { AboutImg } from 'src/entities/about-img';
import { useScreenWidth } from 'src/shared/lib/hooks';
import { TABLET_VIEWPORT } from 'src/shared/lib/constans';

const About = () => {
  const screenWidth = useScreenWidth();

  return (
    <section className={cls.about}>
      <div className="container">
        <div className={cls.about__wrapper}>
          <div className={cls.about__content}>
            <span>25 ЛЕТ ОПЫТА РАБОТ </span>
            <h2>ТД ГИДРАВЛИКА-М</h2>
            <p>
              ТД ГИДРАВЛИКА-М ведущее предприятие региона, которое оказывает
              услуги, связанные с ремонтом и обслуживанием спецтехники и
              гидравлического оборудования данной техники. Мы ремонтируем и
              обслуживаем разнообразные виды автокранов, автовышек,
              манипуляторов, дорожно-строительной техники. Производим ремонт
              гидронасосов, гидромоторов, цилиндров и прочего гидравлического
              оборудования.
            </p>
          </div>
          {screenWidth < TABLET_VIEWPORT && (
            <div>
              <AboutImg />
            </div>
          )}
          {screenWidth >= TABLET_VIEWPORT && (
            <div className={cls.about__image}>
              <picture>
                <source
                  type="image/webp"
                  srcSet="img/content/about-first.webp, img/content/about-first@2x.webp 2x"
                />
                <img
                  src="img/content/about-first.jpg"
                  srcSet="img/content/about-first@2x.jpg 2x"
                  width={438}
                  height={657}
                  alt="Изображение спецтехники на фоне города"
                />
              </picture>
            </div>
          )}
          <ul className={cls.about__list}>
            <li className={cls.about__item}>
              <img
                src="img/svg/quality.svg"
                width={100}
                height={100}
                alt="Знак качества"
              />
              <span>
                ВЫСОКОЕ&nbsp;
                <br />
                КАЧЕСТВО
              </span>
            </li>
            <li className={cls.about__item}>
              <img
                src="img/svg/price.svg"
                width={100}
                height={100}
                alt="Знак стоимости"
              />
              <span>
                ДОСТУПНЫЕ&nbsp;
                <br />
                ЦЕНЫ
              </span>
            </li>
            <li className={cls.about__item}>
              <img
                src="img/svg/experience.svg"
                width={100}
                height={100}
                alt="Знак опыта"
              />
              <span>
                БОЛЬШОЙ&nbsp;
                <br />
                ОПЫТ
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
