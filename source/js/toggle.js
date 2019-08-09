'use strict';

(function () {

  var TABLET_WIDTH = 768;
  var ImageWidth = {
    MIN: 0,
    MAX: 690
  };

  var imageBefore = document.querySelector('.slider__item--before');
  var imageAfter = document.querySelector('.slider__item--after');
  var toggleBefore = document.querySelector('.slider__toggle--before');
  var toggleAfter = document.querySelector('.slider__toggle--after');

  if (document.body.clientWidth >= TABLET_WIDTH) {
    var buttonBeforeHandler = function () {
      imageBefore.style.clip = "rect(auto, 690px, auto, 0)";
      imageAfter.style.clip = "rect(0, auto, auto, 690px)";
      window.slider.button.style.left = "0%";
    };

    var buttonAfterHandler = function () {
      imageBefore.style.clip = "rect(0, 0, auto, 0)";
      imageAfter.style.clip = "rect(0, auto, auto, 0)";
      window.slider.button.style.left = "100%";
    };

    var setWidth = function (effectLevel) {
      var value = ImageWidth.MAX - (effectLevel * ImageWidth.MAX / 100);
      imageBefore.style.clip = "rect(0," + value + "px" + ", auto, 0)";
      imageAfter.style.clip = "rect(0, auto, auto," + value + "px" + ")";
    };

    toggleBefore.addEventListener('click', buttonBeforeHandler);
    toggleAfter.addEventListener('click', buttonAfterHandler);
  }

  window.toggle = {
    setWidth: setWidth
  };

})();
