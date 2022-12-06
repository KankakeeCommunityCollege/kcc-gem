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
  if ( document.querySelector(`.nav-tabs a[href="${hash}"]`) ) {  // Looks for a matching BS4 tab element
    let tab = $(`.nav-tabs a[href="${hash}"]`);  // **SIGH**, BS4 requires JQuery

    tab
      .on('shown.bs.tab', () => {  // Bootstrap 4 method for tab events // Must be defined before the tab is activated
        window.location.search ?
          checkForQuery(window.location.search.replace(queryStartRegex, ''), hash)
          : findContentTarget(`${hash}-label`); // You need to .scrollIntoView() & .focus() on the tab-label which is an <a href="...">. It won't work to do .scrollIntoView() and .focus() on the div
        })
      .tab('show');  // Bootstrap 4 Tab method
  } else if ( document.querySelector(`${hash}.collapse`) ) {  // Looks for a matching BS4 collapse element
    let collapse = document.querySelector(hash);

    // Bootstrap 5 method for doing something after a collapse was shown
    collapse.addEventListener('shown.bs.collapse', (e) => {
      if (window.location.search) {
        checkForQuery(window.location.search.replace(queryStartRegex, ''), hash);
      }
      findContentTarget(`button[data-bs-target="${hash}"]`);
    });
    // `Collapse.getOrCreateInstance(element)` is a Bootstrap 5 method
    Collapse.getOrCreateInstance(collapse); // Creating the instance also toggles it open
  }
}

function checkForHash() {
  if (!window.location.hash)
    return;

  let hash = window.location.hash.replace(endingSlashRegex, '');

  checkForMatchingTabOrAccordion(hash);
}

/**
 * 
 * @param {class} Collapse is the Bootstrap 5 Collapse class imported in .../src/all.js
 */
function contentHashLink(Collapse) {
  checkForMatchingTabOrAccordion.collapse = Collapse;
  checkForHash();
  window.addEventListener('hashchange', checkForHash, false);

  import('./addAccordionOrTabHistoryStates').then(({ default: addAccordionOrTabHistoryStates }) => {
    addAccordionOrTabHistoryStates();
  });
}

export default contentHashLink;
