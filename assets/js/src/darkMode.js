const htmlElement = document.querySelector('html');
const DARK_MODE_BUTTON_ID = 'darkModeButton';

function darkModeClickHandler(e) {
  return htmlElement.classList.toggle('dark-mode');
}

function darkMode() {
  if (window.localStorage.getItem('darkModeSetting') === 'true') htmlElement.classList.add('dark-mode');
  if (window.location.pathname !== '/settings/') return; // Remaining JS should only run on /settings page!
  const darkModeButton = document.getElementById(DARK_MODE_BUTTON_ID);

  darkModeButton.addEventListener('click', darkModeClickHandler);
}

export default darkMode;
