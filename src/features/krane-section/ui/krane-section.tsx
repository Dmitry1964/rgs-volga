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

    // tl.from('.scroll-sections__item--blue', { yPercent: 0 });
    tl.from('#section-kmu', { yPercent: 100, opacity: 1 });
    tl.from('#section-vipo', { yPercent: 100, opacity: 1 });

    ScrollTrigger.create({
      animation: tl,
      trigger: container.current,
      start: 'top top',
      end: '+=5000',
      scrub: true,
      pin: true,
      anticipatePin: 1,
    });
  });


  return (
    <section className={cls.krane_sections}>
      <div className={cls.krane_sections__list} ref={container}>
        <div id="section-krane" className={cls.krane_sections__item}>
          <div className={cls.krane_sections__content}>
            <div className="container">
              <h2 className={cls.krane_sections__title}>Ремонт и обслуживание автокранов</h2>
            </div>
          </div>
        </div>
        <div id="section-kmu" className={cls.krane_sections__item}>
          <div className={cls.krane_sections__content}>
            <div className="container">
              <h2 className={cls.krane_sections__title}>Ремонт и обслуживание кранов-манипуляторов</h2>
            </div>
          </div>
        </div>
        <div id="section-vipo" className={cls.krane_sections__item}>
          <div className={cls.krane_sections__content}>
            <div className="container">
              <h2 className={cls.krane_sections__title}>Ремонт и обслуживание автовышек</h2>
            </div>
          </div>
        </div>


      </div>
    </section >
  )
}

export default KraneSection;
