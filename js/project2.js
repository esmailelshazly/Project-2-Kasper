let navIcon = document.querySelector(".toggle-menu");
let nav = document.querySelector(".nav-ul");
let navA = document.querySelectorAll("ul li a");
let cancel = document.querySelector(".cancel");
let cancelTwo = document.querySelector(".cancel-two");
let search = document.querySelector(".form .search");
let searchBar = document.querySelector(".search-bar");
let searchBarText = document.querySelector(".search-bar .text");
let searchBarSub = document.querySelector(".search-bar .submit");
let landing = document.querySelector('.landing');
let bullets = document.querySelector(".bullets");
let bulletsLis = document.querySelectorAll(".bullets li");
let shuffles = document.querySelectorAll('.shuffle li');
let shuffle = document.querySelector('.shuffle');
let management = document.querySelectorAll('.imgs-container img');
let skills = document.querySelector('.skills');
let prog = document.querySelectorAll('.prog span');
navIcon.addEventListener('click', function() {
  nav.classList.toggle('show');
  navIcon.classList.toggle('hidden');
  cancel.classList.toggle('op');
})
cancel.addEventListener('click', function() {
  navIcon.classList.remove('hidden');
  cancel.classList.remove('op');
  nav.classList.remove('show');
})
navA.forEach(function(e) {
  navA[0].classList.add('active')
  e.addEventListener('click', function() {
    check()
    e.classList.add('active');
  });
});
function check() {
  navA.forEach(function(e) {
    e.classList.remove('active');
  });
}
search.addEventListener('click', function() {
  searchBar.classList.add('show');
});
searchBar.onsubmit = function(){
  if (searchBarText.value != '') {
    return true;
  } else {
    return false;
  };
};
cancelTwo.addEventListener('click', function() {
  searchBar.classList.remove('show');
});
let imgsChange = ['../imgs/landing2.jpg', '../imgs/subscribe.jpg', '../imgs/shuffle-03.jpg'];

setInterval(function() {
  let randomImgs = Math.floor(Math.random() * imgsChange.length);
  landing.style.backgroundImage = 'url('+imgsChange[randomImgs]+')';
  checkTwo();
}, 3000);
setInterval(function() {
  checkOne();
}, 6000);
setInterval(function() {
  checkThree();
}, 9000);
function checkOne() {
  bulletsLis.forEach(function(e) {
    e.classList.remove("active");
    bulletsLis[2].classList.add("active");
  });
};
function checkTwo() {
  bulletsLis.forEach(function(e) {
    e.classList.remove("active");
    bulletsLis[0].classList.add("active");
  });
};
function checkThree() {
  bulletsLis.forEach(function(e) {
    e.classList.remove("active")
    bulletsLis[1].classList.add("active");
  });
};
function removeActive() {
  shuffles.forEach(function(e) {
    e.classList.remove('active');
  });
};
shuffles.forEach(function(e) {
  e.addEventListener('click', function() {
    removeActive();
    this.classList.add('active');
    
    management.forEach(function(img) {
      img.style.display = 'none';
    });
    document.querySelectorAll(this.dataset.imgs).forEach(function(ele) {
      ele.style.display = 'block';
    });
  });
});

window.onscroll = function() {
  if (window.scrollY >= skills.offsetTop) {
    prog.forEach(function(e) {
      e.style.width = e.dataset.progress
    });
  };
}
