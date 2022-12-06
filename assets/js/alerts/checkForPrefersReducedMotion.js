function setStorage(setting) {
  window.localStorage.setItem('userPrefersReducedMotion', setting);
}

function checkForPrefersReduceMotion() {
  const mql = window.matchMedia('(prefers-reduced-motion)');
  const userPrefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(prefers-reduced-motion)').matches;
  let setting = userPrefersReducedMotion ? 'true' : 'false';

  setStorage(setting);
  mql.addEventListener('change', (e) => {

    setStorage(setting);
  });
}

export default checkForPrefersReduceMotion;
