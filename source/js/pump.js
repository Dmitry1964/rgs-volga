const pumps = [
  {
    title: 'Гидронасосы серии Rexroth a4VG',
    info: 'гидростатические  передачи сельскохозяйственной и строительной техники',
    src: '"img/rexroth4vg.png"',
    srcset: '"img/rexroth4vg@2x.png 2x"',
  },
  {
    title: 'Гидронасосы серии<br>НП-90 (НП-112)',
    info: 'гидростатические передачи сельскозяйственной и строительной техники отечественного производства',
    src: '"img/pvs112.png"',
    srcset: '"img/pvs112@2x.png 2x"',
  },
  {
    title: 'Гидронасосы серии 313.3.55',
    info: 'основное применение экскаваторы твэкс серии ек-14(18) и еТ-14(16)',
    src: '"img/313.png"',
    srcset: '"img/313@2x.png 2x"',
  },
  {
    title: 'Гидронасосы серии Rexroth A8VO',
    info: 'основное применение экскаваторы твэкс серии ек-14(18) и еТ-14(16)',
    src: '"img/a8vo.png"',
    srcset: '"img/a8vo@2x.png 2x"',
  }
];

const pumpSliderList = document.querySelector('.pump__slider-list');
const getSlidesPump = () => {
  const slides = pumps.map(({title, info, src, srcset}) =>
    `
    <li class="pump__slider-item slider__item">
    <img class="slider__img" src=${src} srcset=${srcset} alt="Изображение насоса">
    <div class="pump__slider-info slider__info">
      <h3 class="slider__title">${title}</h3>
     <img src="img/svg/marker.svg" width="362" height="34" alt="Маркер">
     <p class="slider__description">${info}</p>
    </div>
  </li>
    `
  ).join('');
  pumpSliderList.insertAdjacentHTML('beforeend', slides);
  const pumpSlides = pumpSliderList.querySelectorAll('.pump__slider-item');
  pumpSlides[0].classList.add('slider__item--current');
};

export {getSlidesPump};

