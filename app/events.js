// window.onscroll = function() {stickScroll()};

const dHeader = document.getElementById("myHeader");
const sticky = dHeader.offsetTop;


window.addEventListener('scroll', (event) => {
    if (window.pageYOffset > sticky) {
        dHeader.classList.add("stick-menu");
    } else {
        dHeader.classList.remove("stick-menu");
  }
});

// Mobile

const mHeader = document.getElementById("myHeader2");
const sticky2 = mHeader.offsetTop;

window.addEventListener('scroll', (event) => {
    if (window.pageYOffset > sticky2) {
        mHeader.classList.add("stick-menu");
    } else {
        mHeader.classList.remove("stick-menu");
  }
});