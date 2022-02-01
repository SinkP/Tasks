
let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__body-menu');

headerBurger.onclick = function() {
    
    headerMenu.classList.toggle('active');
    headerBurger.classList.toggle('active');
  };// Menu Burger






  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  } // Плавный переход по ссылкам
