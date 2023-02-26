const motors = [
  {
    title: 'регулируемые Гидромоторы серии 303',
    info: 'привод лебедки автокранов отечественного производства',
    src: '"img/motor-303.png"',
    srcset: '"img/motor-303@2x.png 2x"',
  },
  {
    title: 'Гидромоторы серии НП-90 (НП-112)',
    info: 'гидростатические передачи сельскозяйственной и строительной техники отечественного производства',
    src: '"img/pvh112.png"',
    srcset: '"img/pvh112@2x.png 2x"',
  },
  {
    title: 'Гидромоторы серии 310',
    info: 'основное применение отечественная строительная технка',
    src: '"img/310.png"',
    srcset: '"img/310@2x.png 2x"',
  }
];

const motorSliderList = document.querySelector('.motor__slider-list');
const getSlidesMotor = () => {
  const slides = motors.map(({title, info, src, srcset}) =>
    `
    <li class="motor__slider-item slider__item">
    <img class="slider__img" src= ${src} srcset= ${srcset} alt="Изображение мотора">
    <div class="motor__slider-info slider__info">
      <h3 class="slider__title">${title}</h3>
     <img src="img/svg/marker.svg" width="362" height="34" alt="Маркер">
     <p class="slider__description">${info}</p>
    </div>
  </li>
`
  ).join('');
  motorSliderList.insertAdjacentHTML('beforeend', slides);
  const motorSlides = motorSliderList.querySelectorAll('.motor__slider-item');
  motorSlides[0].classList.add('slider__item--current');
};

export {getSlidesMotor};

