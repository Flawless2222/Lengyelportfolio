  var nav = document.querySelector('nav');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
      nav.classList.add('bg-dark1', );
      } 
    if (window.pageYOffset < 1) {
      nav.classList.add('bg-transparent',);
    } else {
      nav.classList.remove('bg-transparent');
    }
    
  });