const YEAR_SPAN = document.getElementById('currentYear');

function footerDate() {
  const d = new Date();
  const fullYear = d.getFullYear();
  YEAR_SPAN.innerHTML = fullYear;
}
export default footerDate;
