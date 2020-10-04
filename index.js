'use strict';

const starElms = document.querySelectorAll('.rating__star');

const updateRating = (rating) => {
  const valueElm = document.querySelector('.rating__value');
  valueElm.textContent = rating;

  starElms.forEach((elm, idx) => {
    if (idx < rating) {
      elm.classList.add('rating__star--on');
    } else {
      elm.classList.remove('rating__star--on');
    }
  });
};

starElms.forEach((elm, idx) => {
  elm.addEventListener('click', () => updateRating(idx + 1));
});
