window.onunload = function () {
    window.scrollTo(0,0);
};

const ham = document.querySelector('.ham-img');
const nav = document.querySelector('.navbar');
const closeC = document.querySelector('close');

document.getElementById('ham').addEventListener("click", function() {
    document.querySelector('.nav-overlay').style.display = "block";
  });

document.getElementById('close').addEventListener("click", function() {
    document.querySelector('.nav-overlay').style.display = "none";
  });

document.getElementById('logo').addEventListener("click", function() {
    document.querySelector('.nav-overlay').style.display = "none";
  });

document.getElementById('lists').addEventListener("click", function() {
    document.querySelector('.nav-overlay').style.display = "none";
  });

document.getElementById('nav-icons').addEventListener("click", function() {
    document.querySelector('.nav-overlay').style.display = "none";
  });