'use strict';

(function () {

var TABLET_WIDTH = 768;

if (document.body.clientWidth >= TABLET_WIDTH) {
  var initSlider = function (callback) {
    var Coord = {
      MIN: 0,
      MAX: 100
    };
    var sliderScale = document.querySelector('.slider__scale');
    var sliderButton = sliderScale.querySelector('.slider__button');
    var effectLevel;

    var movePinHandler = function (downEvt) {

       downEvt.preventDefault();

      var mouseMoveHandler = function (moveEvt) {
        moveEvt.preventDefault();
        var shiftCoordX = moveEvt.clientX - sliderScale.getBoundingClientRect().left;
        var currentCoordPin = Math.round(shiftCoordX * Coord.MAX / sliderScale.getBoundingClientRect().width);

        if (currentCoordPin >= Coord.MIN && currentCoordPin <= Coord.MAX) {
          sliderButton.style.left = currentCoordPin + '%';
          effectLevel = currentCoordPin;
        }
        callback(effectLevel);
      };

      var mouseUpHandler = function (upEvt) {
        upEvt.preventDefault();
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };

    sliderButton.addEventListener('mousedown', movePinHandler);
  };

  initSlider(window.toggle.setWidth);
}

})();
