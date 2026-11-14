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

tl.to(".mainpage path", {
  keyframes: {
    "50%" : {fill: "#061bf9"},
    "100%": {fill: "#1bf906"}



  }
})



tl.to(".box1", {
  keyframes: {
    "50%": {y : "150vw",
      x: "20vw",
      rotation: 180,
      borderRadius: "110vw",
    },
    "100%" : {y : "300vw",
      x: "20vw",
      rotation: 360,
      borderRadius: "200vw",

    },

    ease: "none"
  }
},0)

tl.to(".box2", {
  keyframes: {
    "50%": {y : "150vw",
      x: "20vw",
      rotation: -180,
      borderRadius: "110vw",
    },
    "100%" : {y : "300vw",
      x: "-5vw",
      rotation: -360,
      borderRadius: "200vw",

    },

    ease: "none"
  }
},0)

tl.to(".box3", {
  keyframes: {
    "50%": {y : "150vw",
      x: "20vw",
      rotation: -100,
      borderRadius: "110vw",
    },
    "100%" : {y : "300vw",
      x: "-5vw",
      rotation: -300,
      borderRadius: "200vw",

    },

    ease: "none"
  }
},0)

tl.to(".box4", {
  keyframes: {
    "50%": {y : "150vw",
      x: "20vw",
      rotation: -180,
      borderRadius: "110vw",
    },
    "100%" : {y : "300vw",
      x: "-5vw",
      rotation: -360,
      borderRadius: "200vw",

    },

    ease: "none"
  }
},0)

tl.to(".box5", {
  keyframes: {
    "50%": {y : "150vw",
      x: "20vw",
      rotation: -180,
      borderRadius: "110vw",
    },
    "100%" : {y : "300vw",
      x: "-5vw",
      rotation: -360,
      borderRadius: "200vw",

    },

    ease: "none"
  }
},0)

tl.to(".box6", {
  keyframes: {
    "50%": {y : "150vw",
      x: "20vw",
      rotation: 100,
      borderRadius: "110vw",
    },
    "100%" : {y : "300vw",
      x: "5vw",
      rotation: 300,
      borderRadius: "200vw",

    },

    ease: "none"
  }
},0)

tl.to(".box7", {
  keyframes: {
    "50%": {y : "150vw",
      x: "20vw",
      rotation: -180,
      borderRadius: "110vw",
    },
    "100%" : {y : "300vw",
      x: "-5vw",
      rotation: -360,
      borderRadius: "200vw",

    },

    ease: "none"
  }
},0)

tl.to(".box8", {
  keyframes: {
    "50%": {y : "150vw",
      x: "20vw",
      rotation: -180,
      borderRadius: "110vw",
    },
    "100%" : {y : "300vw",
      x: "-5vw",
      rotation: -360,
      borderRadius: "200vw",

    },

    ease: "none"
  }
},0)

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger: "body",
    start: "60% top",
    end: "bottom bottom", 
    scrub:1,
  }
});

tl2.to(".btn", {
  keyframes: {
    "100%" : {
      x: "90vw",
      rotation : -5,
    },
  }
}, 0)

btn.addEventListener("click", () =>{
  gsap.to(".box2", {width: "600vw", duration: 1, x: "-5000", y: "24"});
  gsap.to(".btn", {x: "-50", duration: 1, onComplete: () => {window.location.href = "main.html";}})
});