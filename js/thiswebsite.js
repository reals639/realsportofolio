import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const btn = document.querySelector(".btn");

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    start : "top top",
    end : "bottom bottom", 
    scrub : 1,
  }
});


tl.to(".frsttext", {
  keyframes: {
    "0%": {
      x: "0vw",
    },
    "10%" : {
      x: "100vw",

    },

    ease: "none"
  }
},0)

tl.to(".scndtxt", {
  keyframes: {
    "0%": {
      x: "200vw",
    },
    "10%" : {
      x: "100vw",

    },

    ease: "none"
  }
},0)

tl.to(".thrdthing", {
  keyframes: {
    "10%": {
      x: "0vw",
    },
    "20%" : {
      x: "100vw",

    },

    ease: "none"
  }
},0)

tl.to(".frththing", {
  keyframes: {
    "10%": {
      x: "200vw",
    },
    "20%" : {
      x: "100vw",

    },

    ease: "none"
  }
},0)


tl.to(".ffththing", {
  keyframes: {
    "30%": {
      x: "200vw",
    },
    "40%" : {
      x: "100vw",

    },

    ease: "none"
  }
},0)


tl.to(".sixthing", {
  keyframes: {
    "30%": {
      x: "0vw",
    },
    "40%" : {
      x: "100vw",

    },

    ease: "none"
  }
},0)

tl.to(".sevenththing", {
  keyframes: {
    "50%": {
      x: "0vw",
    },
    "60%" : {
      x: "100vw",

    },

    ease: "none"
  }
},0)

tl.to(".eightthing", {
  keyframes: {
    "70%": {
      x: "0vw",
    },
    "90%" : {
      x: "100vw",

    },

    ease: "none"
  }
},0)

