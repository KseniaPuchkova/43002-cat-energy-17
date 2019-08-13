ymaps.ready(init);
   var myMap;

   function init() {
     if (document.body.clientWidth < 768) {
       myMap = new ymaps.Map("map", {
         center: [59.938640, 30.323055],
         zoom: 16
       });

       var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
         iconLayout: 'default#image',
         iconImageHref: 'img/map-pin.png',
         iconImageSize: [80, 68],
         iconImageOffset: [-36, -53]
       });

     } else if (document.body.clientWidth >= 768 && document.body.clientWidth < 1300){
       myMap = new ymaps.Map("map", {
         center: [59.938640, 30.323055],
         zoom: 17
       });

       var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
         iconLayout: 'default#image',
         iconImageHref: 'img/map-pin.png',
         iconImageSize: [117, 100],
         iconImageOffset: [-72, -106]
       });

     } else {
       myMap = new ymaps.Map("map", {
         center: [59.938963, 30.319293],
         zoom: 17
       });

       var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
         iconLayout: 'default#image',
         iconImageHref: 'img/map-pin.png',
         iconImageSize: [117, 100],
         iconImageOffset: [-72, -106]
       });
     }

     myMap.geoObjects.add(myPlacemark);
   }
