const slider = document.querySelector('.slider .list');
const items = document.querySelectorAll('.slider .list .item');
const dots = document.querySelectorAll('.slider .dots li');
let lastActiveDot = document.querySelector('.slider .dots li.active');


function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + 'px';

  // Update the active dot
  lastActiveDot.classList.remove('active');
  dots[active].classList.add('active');
  lastActiveDot = dots[active];

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => { next.click() }, 3000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})


let resizeTimeout;

window.onresize = function (event) {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    reloadSlider();
  }, 200);
};