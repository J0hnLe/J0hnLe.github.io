function detectColorScheme() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function updateImageSrc(isDarkMode) {
  const imgElement = document.querySelector('img[src="./img/me.jpg"]');
  
  if (imgElement) {
    const src = isDarkMode ? './img/me-dark.png' : './img/me-light.png';
    imgElement.src = src;
  } else {
    console.error('No image element found');
  }
}

// Initial setup
const isDarkMode = detectColorScheme();
updateImageSrc(isDarkMode);

// Add event listener for color scheme changes
window.matchMedia('(prefers-color-scheme)').addListener(function(mql) {
  const isDarkMode = mql.matches;
  updateImageSrc(isDarkMode);
});
