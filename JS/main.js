  window.onload = ()=> {
    let nav = document.getElementById('nav-wrapper');
    let hamburger = document.getElementById('js-hamburger');
  
    hamburger.addEventListener('click', ()=> {
        nav.classList.toggle('open');
    });
    
  };

  gsap.fromTo('#title',1,{
    x:'-100px',
    y:'-100px'
  },
  {
    x:'0px',
    y:'0px'
  })
  gsap.fromTo('.header--wrapper__leftImg',1,{
    x:'-100px',
    y:'100px'
  },
  {
    x:'0px',
    y:'0px'
  })
  gsap.fromTo('.header--wrapper__leftContents',1,{
    x:'-100px',
    y:'100px'
  },
  {
    x:'0px',
    y:'0px'
  })
  gsap.fromTo('.header--wrapper__rightImg',1,{
    x:'100px',
    // y:'100px'
  },
  {
    x:'0px',
    y:'0px'
  })



  const listWrapperEl = document.querySelector('.side-scroll-list-wrapper');
  const listEl = document.querySelector('.bestSeller--img');
  
  gsap.to(listEl, {
    x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
    ease: 'none',
    scrollTrigger: {
      trigger: '.side-scroll',
      start: 'top center', 
      end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
      scrub: true,
      // pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
  