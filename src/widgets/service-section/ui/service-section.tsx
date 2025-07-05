import { FC, useRef } from "react";
import './service-section.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const ServiceSection: FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);


  useGSAP(() => {

    // tl.from('.scroll-sections__item--blue', { yPercent: 0 });
    tl.from('.scroll-sections__item--orange', { yPercent: 100, opacity: 0 });
    tl.from('.scroll-sections__item--green', { yPercent: 100, opacity: 0 });

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
  });



  return (
    <section className='scroll-sections'>
      <div className='scroll-sections__list' ref={container}>
        <div className='scroll-sections__item scroll-sections__item--blue blue'>
          <span>Blue</span>
        </div>
        <div className='scroll-sections__item scroll-sections__item--orange orange'>
          <span>Orange</span>
        </div>
        <div className='scroll-sections__item scroll-sections__item--green green'>
          <span>Green</span>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

