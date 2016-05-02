$(function(){
  $('.home-slide').css('visibility','visible');
  $('#home-slider').lightSlider(
          {
              item: 1,
              mode: 'fade',
              auto: true,
              loop: true,
              controls: true,
              pause: 4000,
              speed: 800,

          }
  );
});
