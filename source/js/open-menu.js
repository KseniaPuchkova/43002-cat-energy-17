'use strict';

var button = document.querySelector('.main-navigation__toggle');
var navigation = document.querySelector('.main-navigation__list');

navigation.classList.remove("main-navigation__list--nojs");
button.classList.remove("main-navigation__toggle--nojs");

var openNavigation = function (evt) {
  evt.preventDefault;
  navigation.classList.toggle('main-navigation__list--opened');
  button.classList.toggle('main-navigation__toggle--closed');
};

button.addEventListener('click', openNavigation);
