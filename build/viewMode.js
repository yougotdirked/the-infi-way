if (window.location.search.indexOf('view') > -1) {
  var style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = '/style_monitor.css';
  document.head.appendChild(style);
}

const blocks = document.getElementById('blocks');

// Function to scroll to the anchor link and center it on the screen
function scrollToAnchor(anchorId) {
  const anchorElement = document.getElementById(anchorId);

  if (anchorElement) {
    const yOffset = -window.innerHeight / 2 + 150 ; // Offset to center the element vertically
    const y = anchorElement.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}



document.addEventListener("DOMContentLoaded", function (event) {
  if (window.location.search.indexOf('view') > -1) {
    const anchorLinks = document.querySelectorAll('a[href*="#"]');
    anchorLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const anchorId = this.getAttribute('href').substring(1);
        scrollToAnchor(anchorId);
      });
    });
  }
});
