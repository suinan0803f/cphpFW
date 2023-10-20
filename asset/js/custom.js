document.addEventListener('DOMContentLoaded', function() {

  // AOS option
  AOS.init({
    duration: 400,
    easing: 'ease'
  })

  // Materialize option
  // sidenav
  var sidenavElem = document.querySelectorAll('.sidenav');
  var sidenavInstance = M.Sidenav.init(sidenavElem, {
    // specify options here
    edge: 'right'
  });

  // collapsible
  var collapsibleElem = document.querySelector('.collapsible');
  var collapsibleInstance = M.Collapsible.init(collapsibleElem, {
  // specify options here
  });

  // slider
  var sliderElem = document.querySelectorAll('.slider');
  var sliderInstance = M.Slider.init(sliderElem, {
    indeicators: true,
    height: 720,
    duration: 500,
    interval: 5000,
    pauseOnFocus: false,
    pauseOnHover: true,
    indeicatorLabelFunc: null,
  });

  // sliderのスライド処理をボタンに用いる
  var sliderElem2 = document.querySelector('.slider');
  var l = M.Slider.getInstance(sliderElem2);
  const btnPrev = document.querySelector('#prev');
  const btnNext = document.querySelector('#next');
  btnPrev.addEventListener('click', e => {
    l.prev();
  });
  btnNext.addEventListener('click', e => {
    l.next();
  })

  // テーマを変更するボタンの処理
  const currentTheme = localStorage.getItem('theme');
  const switchElems = document.getElementsByName('theme-switch');
  
  const setTheme = (isDark) => {
    if (isDark) {
      switchElems.forEach( (switchElem) => {
        switchElem.classList.add('is-dark');
        switchElem.querySelector('i').innerText = 'light_mode';
        switchElem.title = 'Switch to light mode';
      });
    }
    else {
      switchElems.forEach( (switchElem) => {
        switchElem.classList.remove('is-dark');
        switchElem.querySelector('i').innerText = 'dark_mode';
        switchElem.title = 'Switch to dark mode';
      });
    }
  }

  if (switchElems) {
    // Load
    if (currentTheme) setTheme(true);
    // Change
    window.changeTheme = function() {
      if (!switchElems[0].classList.contains('is-dark')) {
        // Dark Theme
        document.documentElement.setAttribute('theme', 'dark');
        localStorage.setItem('theme', 'dark');
        setTheme(true);
      }
      else {
        // Light Theme
        document.documentElement.removeAttribute('theme');
        localStorage.removeItem('theme');
        setTheme(false);
      }
    }
  }



});