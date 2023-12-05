'use strict';

// console.log('haha');
// document.getElementById('btn').addEventListener('click', function(){
  // });
  const navList = document.getElementsByClassName('nav--list__wrapper');
  document.getElementById('btn').addEventListener('click',()=>{
    // console.log(navList);
    // navList.classList.toggle('active')

    gsap.to('.nav--list__wrapper',{
      x:-1200,
      duration:2
    })

    
  });

  // gsap.registerPlugin(ScrollTrigger);
  
  gsap.to('#title',{
    scrollTrigger:{
      trigger:"#title",
      toggleActions:"restart pause reverse pause"
    },
    rotation:360,
    duration:3
  });