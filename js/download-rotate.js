  var frontDesktopRotate = document.querySelector('.card-desktop__front');
  var backDesktopRotate = document.querySelector('.card-desktop__back');
  var linkDesktopRequirements = document.querySelector('.downloads-desktop__requirements');
  var linkDesktopDownload = document.querySelector('.card-desktop__downloads');
  
  linkDesktopRequirements.addEventListener('click', function() {
    frontDesktopRotate.classList.remove('front-rotate');
    frontDesktopRotate.classList.add('back-rotate');
    backDesktopRotate.classList.add('front-rotate');

  });

 linkDesktopDownload.addEventListener('click', function() {
    frontDesktopRotate.classList.add('front-rotate');
    frontDesktopRotate.classList.remove('back-rotate')
    backDesktopRotate.classList.remove('front-rotate');

 });   


var frontLaptopRotate = document.querySelector('.card-laptop__front');
var backLaptopRotate = document.querySelector('.card-laptop__back');
var linkLaptopRequirements = document.querySelector('.downloads-laptop__requirements');
var linkLaptopDownload = document.querySelector('.card-laptop__downloads');

linkLaptopRequirements.addEventListener('click', function() {
  frontLaptopRotate.classList.remove('front-rotate');
  frontLaptopRotate.classList.add('back-rotate');
  backLaptopRotate.classList.add('front-rotate');

});

linkLaptopDownload.addEventListener('click', function() {
  frontLaptopRotate.classList.add('front-rotate');
  frontLaptopRotate.classList.remove('back-rotate');
  backLaptopRotate.classList.remove('front-rotate');

});  


var frontMobileRotate = document.querySelector('.card-mobile__front');
var backMobileRotate = document.querySelector('.card-mobile__back');
var linkMobileRequirements = document.querySelector('.downloads-mobile__requirements');
var linkMobileDownload = document.querySelector('.card-mobile__downloads');

linkMobileRequirements.addEventListener('click', function() {
  frontMobileRotate.classList.remove('front-rotate');
  frontMobileRotate.classList.add('back-rotate');
  backMobileRotate.classList.add('front-rotate');

});

linkMobileDownload.addEventListener('click', function() {
  frontMobileRotate.classList.add('front-rotate');
  frontMobileRotate.classList.remove('back-rotate');
  backMobileRotate.classList.remove('front-rotate');

});

