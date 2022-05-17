window.onload = function() {
  if (window.matchMedia("(min-width: 1000px)").matches) {
    document.getElementById('mobil').style.display = "none";
    document.getElementById('header').style.display = "block";
  }
  else {
    document.getElementById('mobil').style.display = "block";
    document.getElementById('header').style.display = "none";
  }}

window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 1000px)").matches) {
    document.getElementById('mobil').style.display = "none";
    document.getElementById('header').style.display = "block";
  }
  else {
    document.getElementById('mobil').style.display = "block";
    document.getElementById('header').style.display = "none";
  }})

function clickhamburger() {
  if (document.getElementById('mobilmenu').style.display = "none") {
    document.getElementById('mobilmenu').style.display = "block";
  }
  else {
    document.getElementById('mobilmenu').style.display = "none";
  }}
