import { FC, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import cls from './krane-section.module.scss';
import {CustomEase} from 'gsap/CustomEase';


const KraneSection: FC = () => {

  const KRANE_LIST = ['автокраны','авто-гидроподъёмники', 'крано-манипуляторные установки'];
  const KRANE_REPAIR_LIST = ['ремонт гидравлического оборудования', 'ремонт механизма телескопирования стрелы', 'ремонт опорно-поворотного устройства', 'диагностика и ремонт электрооборудования'];

  const container = useRef<HTMLDivElement>(null);
  const kraneList = useRef<HTMLUListElement>(null)
  const tl = gsap.timeline();
  const tlKraneList = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger, CustomEase);

  const customEase = CustomEase.create('custom', "M0,0 C0,0.408 0.154,1.102 0.223,1.068 0.763,0.797 1,1 1,1.074 " )


  useGSAP(() => {
    tl.from('#section-title', { yPercent: 0, opacity: 1});
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

    tlKraneList.to('#item-1', {x: 0, opacity: 1, ease: customEase, duration: 1});
    tlKraneList.to('#item-2', {x: 0, opacity: 1, ease: customEase, duration: 1 });
    tlKraneList.to('#item-3', {x: 0, opacity: 1, ease: customEase, duration: 1});
    tlKraneList.to('#krane-repair-list', {x: 0, opacity: 1, ease: customEase, duration: 1})


    ScrollTrigger.create({
      animation: tlKraneList,
      trigger: container.current,
      start: '60% 80%',
    })

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
              <ul className={cls.krane_section__names_list} ref={kraneList}>
                {KRANE_LIST.map((item, index) => (
                  <li className={cls.krane_section__names_item} id={`item-${index + 1}`}>
                    <img src="img/svg/icon-checkbox.svg" width={30} height={30} alt="Чекбокс" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className={cls.krane_section__repair_list} id="krane-repair-list">
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
