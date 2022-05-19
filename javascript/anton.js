window.onload = function() {
  if (window.matchMedia("(min-width: 1000px)").matches) {
    document.getElementById('toggle').style.display = "none";
    document.getElementById('menuheader').style.display = "block";
  }
  else {
    document.getElementById('toggle').style.display = "flex";
    document.getElementById('menuheader').style.display = "none";
  }}

window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 1000px)").matches) {
    document.getElementById('toggle').style.display = "none";
    document.getElementById('menuheader').style.display = "block";
  }
  else {
    document.getElementById('toggle').style.display = "flex";
    document.getElementById('menuheader').style.display = "none";
  }})


let menuTog = document.querySelector('.menu-toggle');
let nav = document.querySelector('.nav');
let navVenstre = document.querySelector('.nav-venstre');
let navRight = document.querySelector('.nav-right');
let navLinks = Array.from(document.querySelectorAll('.nav-link'));

menuTog.addEventListener('click', () => {
  menuTog.classList.toggle('active');
  navRight.classList.toggle('active');
  navVenstre.classList.toggle('active');
  nav.classList.toggle('active');


    navRight.classList.remove('active');

    if(menuTog.classList.contains('active')){
      setTimeout(()=>{
        navRight.classList.add('active');
      },100)

      for(let i = 0; i < navLinks.length; i++){
        navLinks[i].classList.remove('active');
        setTimeout(()=>{
          navLinks[i].classList.add('active')
        }, i * 100)
      }
    }

})
