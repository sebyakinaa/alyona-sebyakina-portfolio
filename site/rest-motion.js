const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
const images = [...document.querySelectorAll('img[data-motion]')];
function applyMotionPreference() {
  images.forEach(image => { image.src = preference.matches ? image.dataset.poster : image.dataset.gif; });
}
applyMotionPreference();
preference.addEventListener('change', applyMotionPreference);
