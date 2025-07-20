import { FC, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import cls from './krane-section.module.scss';


const KraneSection: FC = () => {

  const container = useRef<HTMLDivElement>(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);


  useGSAP(() => {
    tl.from('#section-title', { yPercent: 0, opacity: 1});
    tl.from('#section-krane', { yPercent: 100, opacity: 1 });
    tl.from('#section-kmu', { yPercent: 100, opacity: 1 });
    tl.from('#section-vipo', { yPercent: 100, opacity: 1 });

    ScrollTrigger.create({
      animation: tl,
      trigger: container.current,
      start: 'top top',
      end: '+=4500',
      scrub: true,
      pin: true,
      // anticipatePin: 1,
    });
  });


  return (
    <section className={cls.krane_sections}>
      <div className={cls.krane_sections__list} ref={container}>
        <div id="section-title" className={cls.krane_sections__item}>
          <p className={cls.krane_sections__title}>
            Ремонт и обслуживание подъёмно-транспортных машин
          </p>

        </div>
        <div id="section-krane" className={cls.krane_sections__item}>
          {/* <div className={cls.krane_sections__content}>
            <h2 className={cls.krane_sections__title}>Ремонт и обслуживание автокранов1111</h2>
          </div> */}
          <div className={cls.krane_sections__banner}>
            <picture>
              <source srcSet="img/content/krane-banner-1.webp, img/content/krane-banner@2x-1.webp 2x" type="image/webp" />
              <img className={cls.krane_sections__img} src="img/content/krane-banner-1.jpg" srcSet="img/content/krane-banner@2x-1.jpg 2x" alt="Изображение автокрана" />
            </picture>
          </div>
        </div>
        <div id="section-kmu" className={cls.krane_sections__item}>
          {/* <div className={cls.krane_sections__content}>
            <h2 className={cls.krane_sections__title}>Ремонт и обслуживание кранов-манипуляторов</h2>
          </div> */}
          <div className={cls.krane_sections__banner}>
            <picture>
              <source srcSet="img/content/kmu-banner-1.webp, img/content/kmu-banner@2x-1.webp 2x" type="image/webp" />
              <img className={cls.krane_sections__img} src="img/content/kmu-banner-1.jpg" srcSet="img/content/kmu-banner@2x-1.jpg 2x" alt="Изображение автокрана" />
            </picture>
          </div>
        </div>
        <div id="section-vipo" className={cls.krane_sections__item}>
          {/* <div className={cls.krane_sections__content}>
            <h2 className={cls.krane_sections__title}>Ремонт и обслуживание автовышек</h2>
          </div> */}
          <div className={cls.krane_sections__banner}>
            <picture>
              <source srcSet="img/content/vipo-banner-1.webp, img/content/vipo-banner@2x-1.webp 2x" type="image/webp" />
              <img className={cls.krane_sections__img} src="img/content/vipo-banner-1.jpg" srcSet="img/content/vipo-banner@2x-1.jpg 2x" alt="Изображение автокрана" />
            </picture>
          </div>
        </div>


      </div>
    </section >
  )
}

export default KraneSection;
