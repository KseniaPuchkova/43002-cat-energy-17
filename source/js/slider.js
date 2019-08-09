'use strict';

(function () {

var TABLET_WIDTH = 768;
var scale = document.querySelector('.slider__scale');
var button = scale.querySelector('.slider__button');

if (document.body.clientWidth >= TABLET_WIDTH) {
  var initSlider = function (callback) {
    var Coord = {
      MIN: 0,
      MAX: 100
    };
    var effectLevel;

    var movePinHandler = function (downEvt) {
      downEvt.preventDefault();

      var mouseMoveHandler = function (moveEvt) {
        moveEvt.preventDefault();
        var shiftCoordX = moveEvt.clientX - scale.getBoundingClientRect().left;
        var currentCoordPin = Math.round(shiftCoordX * Coord.MAX / scale.getBoundingClientRect().width);

        if (currentCoordPin >= Coord.MIN && currentCoordPin <= Coord.MAX) {
          button.style.left = currentCoordPin + '%';
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

    button.addEventListener('mousedown', movePinHandler);
  };

  initSlider(window.toggle.setWidth);
}

window.slider = {
  scale: scale,
  button: button
};

})();
