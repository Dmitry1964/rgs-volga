const slideButtons = document.querySelectorAll('.slider__buttons');




const showSlidePrev = (section, button) => {
  let count = 0;
  const slideList = section.querySelectorAll('.slider__item');
  const len = slideList.length;
  if (button.classList.contains('slider__button--disabled')) {
    return;
  } else {
    section.querySelector('.slider__button--next').classList.remove('slider__button--disabled');
    for (let i = 0; i < len; i++) {
      if (slideList[i].classList.contains('slider__item--current')) {
        count = i;
      }
    }
    slideList.forEach((item) => {
      item.classList.remove('slider__item--current');
    });
    count--;
    slideList[count].classList.add('slider__item--current');
  }
  if (count === 0) {
    button.classList.add('slider__button--disabled');
  } else {
    button.classList.remove('slider__button--disabled');
  }
};

const showSlideNext = (section, button) => {

  let count = 0;
  const btnPrev = section.querySelector('.slider__button--prev');
  const slideList = section.querySelectorAll('.slider__item');
  const len = slideList.length;
  if (button.classList.contains('slider__button--disabled')) {
    return;
  } else {
    btnPrev.classList.remove('slider__button--disabled');
    for (let i = 0; i < len; i++) {
      if (slideList[i].classList.contains('slider__item--current')) {
        count = i;
      }
    }
    slideList.forEach((item) => {
      item.classList.remove('slider__item--current');
    });
    count++;
    slideList[count].classList.add('slider__item--current');
  }
  if (count === len - 1) {
    button.classList.add('slider__button--disabled');
  } else {
    button.classList.remove('slider__button--disabled');
  }
};







const changeSlidePicture = (evt) => {
  const button = evt.target.closest('button');
  const section = evt.target.closest('section');

  if (button.getAttribute('data-button') === 'prev') {
    // листаем влево
    showSlidePrev(section, button);
  }
  if (button.getAttribute('data-button') === 'next') {
    // листаем вправо
    showSlideNext(section, button);
  }

}
















slideButtons.forEach((element) => {
  element.addEventListener('click', changeSlidePicture);
})
