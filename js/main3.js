import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ilovebut = document.querySelector(".ilove")
const bridgebut = document.querySelector(".bridge")
const peltonbut = document.querySelector(".pelton")
const pwrsuplbut = document.querySelector(".powersupply")
const greenhousebut = document.querySelector(".greenhouse")
const AIbut = document.querySelector(".AI")
const crosskartbut = document.querySelector(".crosskart")
const gamedevbut = document.querySelector(".gamedev")
const thiswebsitebut = document.querySelector(".thiswebsite")

ilovebut.addEventListener("click", () =>{
  gsap.to(".box2", {width: "600vw", duration: 1, x: "-5000", y: "24"});
  gsap.to(".btn", {x: "-50", duration: 1, onComplete: () => {window.location.href = "ilove.html";}})
});
bridgebut.addEventListener("click", () =>{
  gsap.to(".bridge", {opacity:0,rotation: 360, duration: 1, onComplete: () => {window.location.href = "bridge.html";}})
});
peltonbut.addEventListener("click", () =>{
    gsap.to(".pelton", {opacity:0,rotation: 360, duration: 1, onComplete: () => {window.location.href = "pelton.html";}})
});
pwrsuplbut.addEventListener("click", () =>{
   gsap.to(".powersupply", {opacity:0,rotation: 360, duration: 1, onComplete: () => {window.location.href = "powersuplly.html";}})
});
greenhousebut.addEventListener("click", () =>{
  gsap.to(".greenhouse", {opacity:0,rotation: 360, duration: 1, onComplete: () => {window.location.href = "greenhouse.html";}})
});
AIbut.addEventListener("click", () =>{
 gsap.to(".AI", {opacity:0,rotation: 360, duration: 1, onComplete: () => {window.location.href = "AI.html";}})
});
crosskartbut.addEventListener("click", () =>{
  gsap.to(".crosskart", {opacity:0,rotation: 360, duration: 1, onComplete: () => {window.location.href = "crosskart.html";}})
});
gamedevbut.addEventListener("click", () =>{
 gsap.to(".gamedev", {opacity:0,rotation: 360, duration: 1, onComplete: () => {window.location.href = "gamedev.html";}})
});
thiswebsitebut.addEventListener("click", () =>{
 gsap.to(".thiswebsite", {opacity:0,rotation: 360, duration: 1, onComplete: () => {window.location.href = "thiswebsite.html";}})
});