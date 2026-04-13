(function () {
  'use strict';

  var body = document.body;
  var header = document.getElementById('header');

  // Prevent transitions/animations during initial page load
  body.classList.add('is-loading');
  window.addEventListener('load', function () {
    body.classList.remove('is-loading');
  });

  // Touch device detection
  if (navigator.maxTouchPoints > 0 || 'ontouchstart' in window) {
    body.classList.add('is-touch');
  }

  // Parallax header background (wide screens, non-touch only)
  if (header && !body.classList.contains('is-touch')) {
    var PARALLAX_FACTOR = 20;

    function applyParallax() {
      if (window.innerWidth > 980) {
        var scrollY = window.scrollY || window.pageYOffset;
        header.style.backgroundPosition =
          'top left, left ' + (-scrollY / PARALLAX_FACTOR) + 'px';
      } else {
        // Let CSS media query take over
        header.style.backgroundPosition = '';
      }
    }

    window.addEventListener('scroll', applyParallax, { passive: true });
    window.addEventListener('resize', applyParallax, { passive: true });
    applyParallax();
  }

  // Lightbox for blog travel gallery
  if (typeof GLightbox !== 'undefined') {
    var blogSection = document.getElementById('blog');
    if (blogSection) {
      GLightbox({
        selector: '#blog .work-item a.image',
        touchNavigation: true,
        loop: true,
      });
    }
  }

})();
