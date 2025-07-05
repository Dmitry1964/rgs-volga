import { FC, useRef } from "react";
import cls from './krane-list.module.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";



const KraneService: FC = () => {

  const container = useRef<HTMLDivElement>(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);


  useGSAP(() => {

    tl.from('#krane', { yPercent: -100 });
    tl.from('#kmu', { yPercent: 100 });

    ScrollTrigger.create({
      animation: tl,
      trigger: container.current,
      start: 'top top',
      end: '+=4000',
      scrub: true,
      markers: true,
      pin: true,
      anticipatePin: 1,
    });
  }, { scope: container });

  return (
    <section className={cls.krane_service} ref={container}>
      <div className={cls.krane_service__container}>
        <div id='krane' className={cls.krane_service__wrapper}>
          <div className={cls.krane_service__banner}>
            <picture>
              <source srcSet="img/content/krane-banner.webp 1x, img/content/krane-banner@2x.webp 2x" type="image/webp" />
              <img className={cls.krane_service__image} srcSet="img/content/krane-banner.jpg 1x, img/content/krane-banner@2x.jpg 2x" alt="Баннер автокран" />
            </picture>
          </div>
          <div className={cls.krane_service__content}>
            <div className='container'>
              <h2 className={cls.krane_service__title}>Ремонт и сервис автокранов</h2>
              {/* <p className={cls.krane_service__text}>
              Мы предлагаем широкий спектр услуг по ремонту и сервису автокранов, включая текущий ремонт и техническое обслуживание. Наши специалисты имеют большой опыт в ремонте и обслуживании автокранов различных марок и моделей, что позволяет нам предлагать качественные и эффективные решения для ваших задач.
            </p>
            <ul className={cls.krane_service__list}>
              <li className={cls.krane_service__item}>
                <span>Ремонт гидравлического оборудования</span>
              </li>
              <li className={cls.krane_service__item}>
                <span>Ремонт механизма поворота</span>
              </li>
              <li className={cls.krane_service__item}>
                <span>Ремонт механизма выдвижения стрелы</span>
              </li>
              <li className={cls.krane_service__item}>
                <span>Ремонт и диагностика электрооборудования</span>
              </li>
            </ul> */}
            </div>
          </div>
        </div>
        <div id='kmu' className={cls.krane_service__wrapper}>
          <div className={cls.krane_service__banner}>
            <picture>
              <source srcSet="img/content/kmu-banner.webp 1x, img/content/kmu-banner@2x.webp 2x" type="image/webp" />
              <img className={cls.krane_service__image} srcSet="img/content/kmu-banner.jpg 1x, img/content/kmu-banner@2x.jpg 2x" alt="Баннер автокран" />
            </picture>
          </div>
          <div className={cls.krane_service__content}>
            <div className='container'>
              <h2 className={cls.krane_service__title}>Ремонт и сервис краново-манипуляторных установок</h2>
              {/* <p className={cls.krane_service__text}>
              Мы предлагаем широкий спектр услуг по ремонту и сервису краново-манипуляторных установок, включая текущий ремонт и техническое обслуживание. Наши специалисты имеют большой опыт в ремонте и обслуживании краново-манипуляторных установок различных марок и моделей, что позволяет нам предлагать качественные и эффективные решения для ваших задач.
            </p>
            <ul className={cls.krane_service__list}>
              <li className={cls.krane_service__item}>
                <span>Ремонт гидравлического оборудования</span>
              </li>
              <li className={cls.krane_service__item}>
                <span>Ремонт механизма поворота</span>
              </li>
              <li className={cls.krane_service__item}>
                <span>Ремонт механизма выдвижения стрелы</span>
              </li>
              <li className={cls.krane_service__item}>
                <span>Ремонт и диагностика электрооборудования</span>
              </li>
            </ul> */}
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default KraneService;