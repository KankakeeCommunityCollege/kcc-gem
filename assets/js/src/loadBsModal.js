/**
 * 
 * @function loadBsModal Lazily loads the Bootstrap 5 Modal JavaScript
 *    (which enables Modal functionality) after a modal-button has 
 *    actually been clicked!
 *  This prevents loading the Modal JS on pages that don't have a modal,
 *    or when in the event the user never clicks a modal-button.
 * @function Modal Bootstrap 5 modal JavaScript module (required for modal functionality)
 *   @method getOrCreateInstance gets the modal element & initializes it if it hasn't already initialized
 * 
 */
// Modals will always have a corresponding button element with data-bs-toggle="modal" attribute
// A page may have more than 1 modal in it (hence the use of `querySelectorAll()`)
const MODAL_BUTTONS = document.querySelectorAll('button[data-bs-toggle="modal"]');

function importModal(e) {
  const clicked = e.target; // capture the clicked modal-button
  const modalEl = document.querySelector(clicked.dataset.bsTarget); // Get the modal that corresponds to the clicked modal-button

  // Importing the BS5 Modal JS enables all modals in the page to function (once clicked.)
  // If the HTML Modal markup is correct the JS will handle everything for us (showing, hiding modals when clicked)
  import('bootstrap/js/src/modal').then(({ default: Modal }) => {
    // `Modal.getOrCreateInstance()`  is a Bootstrap 5 method
    let modal = Modal.getOrCreateInstance(modalEl);

    // We still need to manually open the clicked modal since the necessary JS was not imported yet.
    modal.show(); // Bootstrap 5 `modal.show()` method to open the modal that was clicked
  });
  // Cleanup all event listeners – we don't want another import() call!
  [...MODAL_BUTTONS]
    .map(btn => btn.removeEventListener('click', importModal));
}

function loadBsModal() {
  // Don't import the modal dependency until after a modal button has been clicked
  [...MODAL_BUTTONS]
    .map(btn => btn.addEventListener('click', importModal));
}

export default loadBsModal;
