  window.onload = ()=> {
    let nav = document.getElementById('nav-wrapper');
    let hamburger = document.getElementById('js-hamburger');
  
    hamburger.addEventListener('click', ()=> {
        nav.classList.toggle('open');
        console.log('hiii');
    });
    
  };
  