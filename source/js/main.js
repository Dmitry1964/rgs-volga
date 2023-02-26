import { getSlidesPump } from './pump';
import { getSlidesDispenser } from './dispenser';
import { getSlidesMotor } from './motor';
import './slides';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  ymaps.ready(init);
  function init() {
    const coords = [48.822733, 44.609915];
    const myMap = new ymaps.Map('map', {
      center: [48.822733, 44.609915],
      zoom: 17,
      controls: ['zoomControl'],
      behaviors: ['drag'],
    }, {
      searchControlProvider: 'yandex#search',
    });

    const placeMark = new ymaps.Placemark(coords, {
      hintContent: 'Лавренева, 19Д',
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/svg/map-mark.svg',
      iconSize: [80, 80],
    });

    myMap.geoObjects.add(placeMark);
  }
  getSlidesPump();
  getSlidesDispenser();
  getSlidesMotor();
});

