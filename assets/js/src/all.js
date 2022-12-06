import '../../scss/kcc-theme.scss';

function loadModule(...moduleArgs) {
  const module = moduleArgs[0];
  let defaultFunc;
  let funcArg = undefined;
  
  moduleArgs.length > 1 ? defaultFunc = moduleArgs[1] : defaultFunc = moduleArgs[0];
  moduleArgs.length > 2 ? funcArg = moduleArgs[2] : null;

  import(`./${module}`).then(({ default: defaultFunc }) => {
    return funcArg = undefined ? defaultFunc() : defaultFunc(funcArg);
  });
}

// Modules that load before window.onload
window.addEventListener('load', () => {

  //  0.)  Import NECESSARY Bootstrap 5 JS modules
  import('bootstrap/js/src/dropdown')
    .then(({ default: Dropdown }) => Dropdown)
    .then(Dropdown => {
      import('bootstrap/js/src/collapse').then(({ default: Collapse }) => {
        //  0.1)   Import non-essential Bootstrap 5 JS on-demand
        //  0.1.1  Import BS5 Modal JS if the .modal class is present in the current page
        //  0.1.2  Import BS5
        if (document.querySelector('.modal')) {
          import('bootstrap/js/src/modal').then(({ default: Modal }) => Modal);
        }
        if (document.querySelector('.tab-content')) {
          import('bootstrap/js/src/tab').then(({ default: Tab }) => Tab);
        }
        //  1.) Import hero slider JS modules
        // './wrapPowerText'
        // 'sliders', 'initSliders'
        // Hero slider module import error handler

        // 2.) 'walkText', 'walkText', document.body
        // 3.) 'lazyLoad'
        // 4.) 'footerDate'
        // 5.) 'addClassToOpenNavbar'
        // 6.) 'errorPageSearch'
          
        // 7. 'darkMode' JS modules
        // 8.) 'darkMode.scss'
          
        // 9. '../../scss/searchPageOverrides.scss'
        // 10.) document.getElementById('google_translate_element') ? loadModule('translateScript', 'watchForMenuClicks') : null;
        import('../alerts/alerts')
          .then(({ default: alerts }) => alerts(Collapse))
          .then(() => {
            if (document.querySelector('.hero-slider__slider')) {
              Promise.resolve()
                .then(() => loadModule('wrapPowerText'))
                .then(() => loadModule('sliders', 'initSliders'))
                .catch((err) => console.error(`Error loading slider modules :${err}`, err))
            }
            loadModule('walkText', 'walkText', document.body)
            document.querySelector('img[data-src]') ? loadModule('lazyLoad') : null;
            loadModule('footerDate')
            loadModule('addClassToOpenNavbar')
          })
          .then(async () => {
            const { default: megaNav } = await import('../nav/megaNav/megaNav');
            return megaNav();
          })
          .catch(err => console.error(`Error loading window.onload modules: ${err}`, err))

          if (window.localStorage.getItem('darkModeSetting') == 'true' || window.location.pathname == '/settings/') {
            import('./darkMode').then(({ default: darkMode }) => {
              return darkMode;
            }).then(darkMode => {
              import('../../scss/darkMode.scss').then(() => {
                return darkMode();
              });
            })
          }
          if (window.location.pathname == "/search/") {
            import('../../scss/searchPageOverrides.scss')
              .catch(err => console.error(`Error loading searchPageOverrides.scss \n${err}`, err));
          }
          if (document.getElementById('google_translate_element')) {
            import('./translateScript').then(({ default: watchForMenuClicks }) => {
              return watchForMenuClicks();
            })
          }
          if (document.getElementById('SearchTermForm')) {
            import('./watchForWebsiteSearch').then(({ default: init }) => init()); 
          }
      })
    })
  
});

// Bootstrap 5 JS modules must be imported for the component to work in the page
// List of all possible Bootstrap 5 JS modules
//    (must be imported to use first):
// alert.js
// base-component.js
// button.js
// carousel.js
// collapse.js
// dom/
//  |-- data.js
//  |-- event-handler.js
//  |-- manipulator.js
//  |__ selector-engine.js
//
// dropdown.js
// modal.js
// offcanvas.js
// popover.js
// scrollspy.js
// tab.js
// toast.js
// tooltip.js
// util/
//  |-- backdrop.js
//  |-- component-functions.js
//  |-- config.js
//  |-- focustrap.js
//  |-- index.js
//  |-- sanitizer.js
//  |-- scrollbar.js
//  |-- swipe.js
//  |__ template-factory.js
