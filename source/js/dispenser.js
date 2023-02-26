const dispensers = [
  {
    title: 'Гидрораспределители серии Р-80',
    info: 'экскаваторы-погрузчики погрузчики на базе МТЗ-82 буровые установки БКМ',
    src: '"img/p80.png"',
    srcset: '"img/p80@2x.png 2x"',
  },
  {
    title: 'Гидроравпределители серии Р-100',
    info: 'экскаваторы-погрузчики на базе МТЗ-82 ',
    src: '"img/р100.png"',
    srcset: '"img/р100@2x.png 2x"',
  },
  {
    title: 'Гидрорапспределители серии Р-160 (р-130)',
    info: 'сельскохозяйственная техника на базе трактора Кировец',
    src: '"img/p160.png"',
    srcset: '"img/p160@2x.png 2x"',
  },
  {
    title: 'Гидрорапспределители серии РП-70',
    info: 'сельскохозяйственная техника на базе трактора МТЗ, Кировец',
    src: '"img/p70.png"',
    srcset: '"img/p70@2x.png 2x"',
  }
];

const dispenserSliderList = document.querySelector('.dispenser__slider-list');
const getSlidesDispenser = () => {
  const slides = dispensers.map(({title, info, src, srcset}) =>
    `
  <li class="dispenser__slider-item slider__item">
  <img class="slider__img" src=${src} srcset=${srcset} alt="Изображение гидрораспределителя">
  <div class="dispenser__slider-info slider__info">
    <h3 class="slider__title dispenser__slider-title">${title}</h3>
   <img src="img/svg/marker.svg" width="362" height="34" alt="Маркер">
   <p class="slider__description dispenser__slider-desc">${info}</p>
  </div>
</li>
  `).join('');
  dispenserSliderList.insertAdjacentHTML('beforeend', slides);
  const dispenserSlides = dispenserSliderList.querySelectorAll('.dispenser__slider-item');
  dispenserSlides[0].classList.add('slider__item--current');
};

export {getSlidesDispenser};
