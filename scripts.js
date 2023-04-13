// scripts.js
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 0) {
      header.style.backgroundColor = '#fff';
      header.style.color = '#000';
    } else {
      header.style.backgroundColor = 'transparent';
      header.style.color = '#fff';
    }
  });

