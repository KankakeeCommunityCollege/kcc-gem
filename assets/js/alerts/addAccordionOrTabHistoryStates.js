/**
 * 
 * @function addAccordionOrTabHistoryStates adds browser history states
 *    as a user navigates through tabs and/or accordions. Allows user
 *    to navigate back through visited items using browser back button.
 */
const ACCORDION_ID = 'accordion';
const TABS_SELECTOR = '.navTabs';

function addHistoryState(target, hashTarget) {
  const title = ''; // Pass empty string as pushState() title parameter
  let url = new URL(window.location);
  let state = {
    page: document.title,
    accordion: target
  };

  url.search = ''; // Remove any searchParams/queries from the URL (e.g. /?id=heading#page)
  url.hash = hashTarget;
  window.history.pushState(state, title, url);
}

function accordionHandler(e) {
  if ( !e.target.matches('.accordion__button') )
    return;
  
  // We don't want to add a duplicate history state, when an accordion item is clicked closed
  if (e.target.getAttribute('aria-expanded') === 'true') {
    // .trim() is needed b/c of the accordion's HTML--each accordion button's text is proceeded by a space
    addHistoryState(e.target.innerText.trim(), e.target.dataset.bsTarget);
  }
}

function tabHandler(e) {
  if (!e.target.matches('.nav-link'))
    return;

  addHistoryState(e.target.innerText.trim(), e.target.dataset.bsTarget);
}

function addAccordionOrTabHistoryStates() {
  if (document.getElementById('accordion')) {
    const accordion = document.getElementById(ACCORDION_ID);

    accordion.addEventListener('click', accordionHandler);
  }
  if (document.querySelector('.navTabs')) {
    const tabs = document.querySelector(TABS_SELECTOR);
  
    tabs.addEventListener('click', tabHandler);
  }
}

export default addAccordionOrTabHistoryStates;
