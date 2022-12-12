const lazyLoadImages = document.querySelectorAll('img[data-src]');
// Lazy load images
// ex. <img src="/path/to/small-placeholder_image.png" data-src="/path/to/actual_image.jpg" alt="You better not leave it blank">
function lazyLoad() {

  for (let img of lazyLoadImages) {
    img.src = img.getAttribute('data-src');
    img.onload = () => {
      img.removeAttribute('data-src');
    };
  }
}
export default lazyLoad;
