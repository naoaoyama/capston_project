'use strict';

// console.log('haha');
// document.getElementById('btn').addEventListener('click', function(){
  // });
  const navList = document.getElementsByClassName('nav--list__wrapper');
  document.getElementById('btn').addEventListener('mouseover',()=>{
    // console.log(navList);
    // navList.classList.toggle('active')

    gsap.to('.nav--list__wrapper',{
      x:-300,
      // duration:2
    })

});
