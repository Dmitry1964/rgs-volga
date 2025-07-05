import { FC, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import './krane-section.scss';
import cls from './krane-list.module.scss';


const KraneService: FC = () => {

  const container = useRef<HTMLDivElement>(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);


  useGSAP(() => {

    // tl.from('.scroll-sections__item--blue', { yPercent: 0 });
    tl.from('#section-kmu', { yPercent: 100, opacity: 1 });
    tl.from('#section-vipo', { yPercent: 100, opacity: 1 });

    ScrollTrigger.create({
      animation: tl,
      trigger: container.current,
      start: 'top top',
      end: '+=4000',
      scrub: true,
      pin: true,
      anticipatePin: 1,
    });
  });


  return (
    <section className={cls.krane_sections}>
      <div className={cls.krane_sections__list} ref={container}>
        <div className={cls.krane_sections__item}>
          <div className={cls.krane_sections__content}>
            <div className="container">
              <h2 className={cls.krane_sections__title}>Ремонт и обслуживание автокранов</h2>
            </div>
          </div>
          <div className={cls.krane_sections__banner}>
            <picture>
              <source srcSet="img/content/krane-banner.webp, img/content/krane-banner@2x.webp 2x" type="image/webp" />
              <img className={cls.krane_sections__img} src="img/content/krane-banner.jpg" srcSet="img/content/krane-banner@2x.jpg 2x" alt="Изображение автокрана" />
            </picture>
          </div>
        </div>
        <div id="section-kmu" className={cls.krane_sections__item}>
          <div className={cls.krane_sections__content}>
            <div className="container">
              <h2 className={cls.krane_sections__title}>Ремонт и обслуживание кранов-манипуляторов</h2>
            </div>
          </div>
          <div className={cls.krane_sections__banner}>
            <picture>
              <source srcSet="img/content/kmu-banner.webp, img/content/kmu-banner@2x.webp 2x" type="image/webp" />
              <img className={cls.krane_sections__img} src="img/content/kmu-banner.jpg" srcSet="img/content/kmu-banner@2x.jpg 2x" alt="Изображение автокрана" />
            </picture>
          </div>
        </div>
        <div id="section-vipo" className={cls.krane_sections__item}>
          <div className={cls.krane_sections__content}>
            <div className="container">
              <h2 className={cls.krane_sections__title}>Ремонт и обслуживание автовышек</h2>
            </div>
          </div>
          <div className={cls.krane_sections__banner}>
            <picture>
              <source srcSet="img/content/vipo-banner.webp, img/content/vipo-banner@2x.webp 2x" type="image/webp" />
              <img className={cls.krane_sections__img} src="img/content/vipo-banner.jpg" srcSet="img/content/vipo-banner@2x.jpg 2x" alt="Изображение автокрана" />
            </picture>
          </div>
        </div>


      </div>
    </section >
  )
}

export default KraneService;
