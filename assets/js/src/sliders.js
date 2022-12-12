// Custom JS to initialize slick slider (https://github.com/kenwheeler/slick) and then build a play/pause toggle button
// Uses slick-specific methods & slick events. See slick events at: https://github.com/kenwheeler/slick/#events
// [IMPORTS]
import '../../scss/slick-custom.scss'; // Imports all the required slick styling + our custom slick style overrides
// This funny looking import uses Webpack's expose-loader to import jquery & expose it to the window as both $ and jQuery
import $ from 'expose-loader?exposes=$,jQuery!jquery';
// Apparently you need to import the "Slick" class (and not a default function in the module)
// Unfortunately there is zero slick documentation on using slick this way:
import Slick from 'slick-carousel/slick/slick'; // Slick class from slick-carousel (node_modules/)

const HERO_SLIDER_CLASSNAME = '.hero-slider__slider';  // Our classname for the hero-slider's DOM parent
const SLICK_PLAY = 'slickPlay';  // Method unique to slick (e.g. $(el).slick('slickPlay') starts slider autoplay)
const SLICK_PAUSE = 'slickPause';  // Methods unique to slick (e.g. $(el).slick('slickPause') pauses slider)
const SLICK_NEXT_SLIDE = 'slickNext';  // Method unique to slick (e.g. $(el).slick('slickNext') go to next slide)

function initSlick() {
  // Initialize slick using configuration object & specify custom next/prev arrow HTML
  $(HERO_SLIDER_CLASSNAME).slick({
    dots: true,           // toggles slide-indicator dots
    slidesToShow: 1,      // number of visible slides
    slidesToScroll: 1,    // number of slides to scroll at a time
    autoplay: true,       // toggles autoplay
    autoplaySpeed: 4000,  // slide duration in milliseconds
    prevArrow:'<button type="button" data-role="none" class="prev slick-prev" aria-label="Previous" role="button" style="display: block;">Previous</button>',
    nextArrow:'<button type="button" data-role="none" class="next slick-next" aria-label="Next" role="button" style="display: block;">Next</button>'
  });
}

function clickHandler(e) {
  const btn = e.target;
  const btnIsPause = (btn.innerHTML === 'Pause');
  const playState = btnIsPause ? 'Play' : 'Pause';
  const slickState = btnIsPause ? SLICK_PAUSE : SLICK_PLAY;

  $(HERO_SLIDER_CLASSNAME).slick(slickState); // Pauses or starts the slider's autoplay
  btn.setAttribute('aria-label', playState);
  btn.classList.toggle('hero-slider__button--play');
  btn.innerHTML = playState;

  if (!btnIsPause) {
    $(HERO_SLIDER_CLASSNAME).slick(SLICK_NEXT_SLIDE); // Advances to next slide
  }
}

function createButton() {
  const SLICK_PARENT_EL = document.querySelector(HERO_SLIDER_CLASSNAME);
  const button = document.createElement('button');

  button.type = 'button';
  button.setAttribute('aria-label', 'Pause');
  button.classList.add('d-block', 'hero-slider__button--toggle'); // d-block is a Bootstrap class (sets display: block !important)
  button.innerHTML = 'Pause';
  SLICK_PARENT_EL.append(button);

  button.addEventListener('click', clickHandler);
}

function initSliders() {
  // slick's on 'init' function (See events in slick docs):
  // According to slick doc's; you have to call a $(slick).on('init', function(){ //... }); before you initialize slick
  $(HERO_SLIDER_CLASSNAME).on('init', function(event, slick){
    createButton();
  });
  initSlick();
}

export default initSliders;
