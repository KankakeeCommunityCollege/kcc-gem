// Custom JS to do cool stuff with BS accordions and tabs by manipulating URL hashes and query's
// EXAMPLE:
//  https://<ORIGIN>/?id=course-withdrawals#tuition-payment-and-deadlines
//    The above URL will:
//      1. Open the #tuition-payment-and-deadlines accordion if it exists
//      2. The ?id=course-withdrawals query will:
//         - look inside the opened accordion for an element with the id 'course-withdrawals', and
//         - scroll that matching element into the user's viewport (in this case it's a heading within that accordion card)
//
//  This JS will allow us to link to a specific area of content in a page where a traditional hash link wouldn't work
//  In this case hash links won't work because the element with he matching ID is "stuck" in a closed accordion or tab.
//
const idRegex = /^id=/g; // Lets just cache these reused regex's here
const queryStartRegex = /^\?/g;
const endingSlashRegex = /\/$/g;
const prefersReduced = window.matchMedia('(prefers-reduced-motion)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const scrollIntoViewOptions = {
  behavior: (prefersReduced) ? 'auto' : 'smooth',
  block: 'center'
}

function focusElement(el) {
  el.scrollIntoView(scrollIntoViewOptions);
  return el.focus();
}

function processIdQuery(query, hash) {
  let id = query.replace(idRegex, '');
  const parentEl = document.querySelector(hash);
  const heading = parentEl.querySelector(`#${id}`);

  focusElement(heading);
}

function checkForQuery(query, hash) {
  query.search(idRegex) !== -1 ?
    processIdQuery(query, hash)
  : null;
}

function findContentTarget(hash) {
  const target = document.querySelector(hash);

  focusElement(target);
}

function checkForMatchingTabOrAccordion(hash) {
  const Collapse = checkForMatchingTabOrAccordion.collapse;
  const Tab = checkForMatchingTabOrAccordion.tab;

  // Handle Bootstrap 5 Tabs (if it was a tab that was clicked):
  if (document.querySelector(`.navTabs button[data-bs-target="${hash}"]`)) {
    let tabEl = document.querySelector(`.navTabs button[data-bs-target="${hash}"]`);

    // Bootstrap 5 method for doing something after a tab was opened
    tabEl.addEventListener('shown.bs.tab', (e) => {
      if (window.location.search !== '') {
        checkForQuery(window.location.search.replace(queryStartRegex, ''), hash);
      }
      findContentTarget(`button[data-bs-target="${hash}"]`);
    });
    // `Tab.getOrCreateInstance(el)` is a Bootstrap 5 method
    const tab = Tab.getOrCreateInstance(tabEl);

    tab.show(); // Bootstrap 5 method to show a tab
  }
  // Handle Bootstrap 5 Accordion (if it was an accordion):
  if (document.querySelector(`${hash}.collapse`)) {  // Looks for a matching BS4 collapse element
    let collapseEl = document.querySelector(hash);

    // Bootstrap 5 method for doing something after a collapse was shown
    collapseEl.addEventListener('shown.bs.collapse', (e) => {
      if (window.location.search) {
        checkForQuery(window.location.search.replace(queryStartRegex, ''), hash);
      }
      findContentTarget(`button[data-bs-target="${hash}"]`);
    });
    // `Collapse.getOrCreateInstance(element)` is a Bootstrap 5 method
    const collapse = Collapse.getOrCreateInstance(collapseEl);

    collapse.show(); // Bootstrap 5 `.show()` opens the collapsed element
  }
}

function checkForHash() {
  if (window.location.hash === '')
    return;

    checkForMatchingTabOrAccordion(window.location.hash.replace(endingSlashRegex, ''));
}

/**
 * 
 * @param {class} Collapse is the Bootstrap 5 Collapse class imported in .../src/all.js
 */
async function contentHashLink(Collapse) {
  let tabClass = undefined;

  if (document.querySelector('.navTabs')) {
    // Import the Bootstrap 5 Tab class if the page has tabs
    const { default: Tab } = await import('bootstrap/js/src/tab');

    tabClass = Tab;
  }
  // Hand off the Bootstrap 5 methods to our handler function
  checkForMatchingTabOrAccordion.tab = tabClass;
  checkForMatchingTabOrAccordion.collapse = Collapse;
  
  checkForHash(); // Make an initial check for a hash in the URL (& open its' tab or accordion)
  // Watch for the `onhashchange` event - which happens when a user clicks the browser/history
  //    back button after clicking through some accordion or tabs.
  window.addEventListener('hashchange', checkForHash, false);

  // Browser history states are added via `addAccordionOrTabHistoryStates` as a user navigates 
  //    through either interface.
  import('./addAccordionOrTabHistoryStates').then(({ default: addAccordionOrTabHistoryStates }) => {
    addAccordionOrTabHistoryStates();
  });
}

export default contentHashLink;
