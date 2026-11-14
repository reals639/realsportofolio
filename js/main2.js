import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const musicbtn = document.querySelector(".musicbtn");
const entrbut = document.querySelector(".entr");
const txtbut = document.querySelector(".txt")
const imurbih = document.getElementById("imyrbih");
const next = document.querySelector(".next");
imurbih.volume = 0.3;
const paused = true

entrbut.addEventListener("click", () =>{
  gsap.to(".entr", {x: "-100vw", duration: 2, rotation: -500 });
  gsap.to(".musicbtn", {x:"225vw", duration: 2, ease:"power1"});
  gsap.to(".txt", {x:"302vw", duration:2, ease:"power1"});
  gsap.to(".next", {x: "-21vw", duration:2, ease:"power1"});
  imurbih.play();
});

musicbtn.addEventListener("click", () => {
  if (imurbih.paused) {
    imurbih.play();
  } else {
    imurbih.pause();
  }
});

txtbut.addEventListener("click", () => {
  gsap.to(".txt", { keyframes : {
    "25%" : {rotation : 3},
    "50%" : {rotation: 0},
    "75%": {rotation: -3},
    "100%": {rotation:0},
  }, duration: 2});

});

gsap.to(".musicbtn", { keyframes : {
    "25%" : {rotation : 3},
    "50%" : {rotation: 0},
    "75%": {rotation: -3},
    "100%": {rotation:0},
}, repeat: -1, duration: 2});

gsap.to(".next", { keyframes : {
    "25%" : {rotation : 90},
    "50%" : {rotation: 180},
    "75%": {rotation: 270},
    "100%": {rotation:360},
}, repeat: -1, duration: 4});

next.addEventListener("click", () => {
  gsap.to(".musicbtn", {width:"100vw", duration:2, onComplete: () => {window.location.href = "love.html";}})
});