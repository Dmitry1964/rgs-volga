import { FC, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import cls from './krane-section.module.scss';


const KraneSection: FC = () => {

  const KRANE_LIST = ['автокраны','авто-гидроподъёмники', 'крано-манипуляторные установки'];
  const KRANE_REPAIR_LIST = ['ремонт гидравлического оборудования', 'ремонт механизма телескопирования стрелы', 'ремонт опорно-поворотного устройства', 'диагностика и ремонт электрооборудования'];

  const container = useRef<HTMLDivElement>(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);


  useGSAP(() => {
    tl.from('#section-title', { yPercent: 0, opacity: 1 });
    tl.from('#section-krane', { yPercent: 0, opacity: 1 });
    tl.from('#section-kmu', { yPercent: 100, opacity: 1 });
    tl.from('#section-vipo', { yPercent: 100, opacity: 1 });

    ScrollTrigger.create({
      animation: tl,
      trigger: container.current,
      start: 'top top',
      end: '+=4000',
      scrub: true,
      pin: true,
      // anticipatePin: 1,
    });
  });


  return (
    <section className={cls.krane_sections}>
      <div className={cls.krane_sections__list} ref={container}>
        <div id="section-title" className={cls.krane_sections__item}>
          <h2 className={cls.krane_sections__title}>
            Ремонт и обслуживание подъёмно-транспортных машин
          </h2>
          <div className={cls.krane_section__item_wrapper}>
            <div className="container">
              <ul className={cls.krane_section__names_list}>
                {KRANE_LIST.map((item) => (
                  <li className={cls.krane_section__names_item}>
                    <img src="img/svg/icon-checkbox.svg" width={30} height={30} alt="Чекбокс" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className={cls.krane_section__repair_list}>
                {KRANE_REPAIR_LIST.map((item) => (
                  <li className={cls.krane_section__repair_item}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
        <div id="section-krane" className={cls.krane_sections__item}>
          <div className={cls.krane_sections__banner}>
            <picture>
              <source srcSet="img/content/krane-banner-1.webp, img/content/krane-banner@2x-1.webp 2x" type="image/webp" />
              <img className={cls.krane_sections__img} src="img/content/krane-banner-1.jpg" srcSet="img/content/krane-banner@2x-1.jpg 2x" alt="Изображение автокрана" />
            </picture>
          </div>
        </div>
        <div id="section-kmu" className={cls.krane_sections__item}>
          <div className={cls.krane_sections__banner}>
            <picture>
              <source srcSet="img/content/kmu-banner-1.webp, img/content/kmu-banner@2x-1.webp 2x" type="image/webp" />
              <img className={cls.krane_sections__img} src="img/content/kmu-banner-1.jpg" srcSet="img/content/kmu-banner@2x-1.jpg 2x" alt="Изображение автокрана" />
            </picture>
          </div>
        </div>
        <div id="section-vipo" className={cls.krane_sections__item}>
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
