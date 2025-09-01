
document.addEventListener('DOMContentLoaded', function() {
  console.log('🔧 Navigation script loaded!');


  const nav = document.querySelector('.nav');
  const toggleButton = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');


  if (!nav) {
    console.error('❌ .nav not found');
    return;
  }
  if (!toggleButton) {
    console.error('❌ .nav__toggle not found');
    return;
  }
  if (!navList) {
    console.error('❌ .nav__list not found');
    return;
  }

  console.log('✅ All elements found');

  function toggleMenu() {
    console.log('🔄 Toggling menu');
    nav.classList.toggle('nav--opened');

    const isOpen = nav.classList.contains('nav--opened');
    toggleButton.setAttribute('aria-expanded', isOpen);

    if (window.innerWidth < 768) {
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }
  }

  function closeMenu() {
    console.log('🚪 Closing menu');
    nav.classList.remove('nav--opened');
    toggleButton.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggleButton.addEventListener('click', function(event) {
    event.stopPropagation();
    toggleMenu();
  });

  navList.addEventListener('click', function(event) {
    if (event.target.classList.contains('nav__link')) {
      console.log('🔗 Link clicked, closing menu');
      closeMenu();
    }
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768 && nav.classList.contains('nav--opened')) {
      console.log('📱 Resized to desktop, closing menu');
      closeMenu();
    }
  });

  document.addEventListener('click', function(event) {
    if (nav.classList.contains('nav--opened') &&
        !event.target.closest('.nav') &&
        window.innerWidth < 768) {
      console.log('👆 Click outside, closing menu');
      closeMenu();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && nav.classList.contains('nav--opened')) {
      console.log('⌨️ ESC pressed, closing menu');
      closeMenu();
    }
  });

  console.log('🎯 Navigation initialized successfully');
});