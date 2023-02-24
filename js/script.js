let navbar = document.querySelector(".header .navbar");
let preloader = document.querySelector(".loader");  
let all = document.querySelector("#smooth-wrapper");
let lod = document.querySelector(".lod");


document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.add("active");
};

document.querySelector("#nav-close").onclick = () => {
  navbar.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.add("active");
};

document.querySelector("#close-search").onclick = () => {
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

consoleText(["BUY", "SELL", "RENT"], "text", ["#41C34E", "#41C34E", "#41C34E"]);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#fff"];
  var visible = true;
  var con = document.getElementById("console");
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 500);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 500);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";

      visible = true;
    }
  }, 400);
}

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".product-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".clients-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

  // ---------------------------- slider -------------------------------

  "use strict";
  const arrowBtnLeft = document.querySelector(".cBody .btn-arrow-left");
  const arrowBtnRight = document.querySelector(".cBody .btn-arrow-right");

  const slides = document.querySelectorAll(".cBody .slide");
  const dotsContainer = document.querySelector(".cBody .dots");

  let curSlide = 0;

  // functions
  const goToSlide = (slide) => {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = function () {
    curSlide === slides.length - 1 ? (curSlide = 0) : curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    curSlide === 0 ? (curSlide = slides.length - 1) : curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const createDots = () => {
    slides.forEach((_, i) =>
      dotsContainer.insertAdjacentHTML(
        "beforeend",
        `<button class='dot' data-slide='${i}'></button>`
      )
    );
  };

  const activateDot = (slide) => {
    document
      .querySelectorAll(".cBody .dot")
      .forEach((dot) => dot.classList.remove("dot--active"));
    document
      .querySelectorAll(`.dot[data-slide="${slide}"]`)
      .forEach((dot) => dot.classList.add("dot--active"));
  };

  // inital
  const init = () => {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // event listeners
  arrowBtnLeft.addEventListener("click", prevSlide);
  arrowBtnRight.addEventListener("click", nextSlide);

  dotsContainer.addEventListener("click", function (e) {
    // if needed to work only on dots and not on dot container
    if (e.target.classList.contains("dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });


  // ---------------------------------- slider over ------------------------------------------




/* ==============================gsap=================== */


gsap.registerPlugin(ScrollTrigger);


gsap.from(".category .heading",{
    x:200,
    duration:1,
    ScrollTrigger:{
        trigger:".category .heading",
        markers:true
    }
})


var tractor = document.querySelector(".carousel-wrapper .item-1");

  gsap.from("header .navbar a,.search_bar, .icons", {
    duration: 2.5,
    scale: 0.8,
    opacity: 0,
    delay: 0.2,
    ease: "elastic",
    force3D: true,
  });
  
  let tl = gsap.timeline();
  
  tl.from(document.querySelector("#head1"), {
    opacity: 0,
    x: 600,
    duration: 0.4,
  });
  
  tl.from(document.querySelector("#head2"), {
    opacity: 0,
    x: -100,
    duration: 0.3,
  });
  tl.from(document.querySelector("#head3"), {
    opacity: 0,
    x: -200,
    duration: 0.3,
  });
  tl.from(document.querySelector(".explore_btn"), {
    opacity: 0,
    y: 100,
    duration: 0.3,
  });


document.querySelector("#firstHeading").style.opacity = "0";
gsap.to("#firstHeading",{
  scrollTrigger:{
      trigger:".cBody",
      scrub:3,
      start:"0% 95%",
      end:"10% 60%",
  },
  opacity:1,
  ease: Power0.easeInOut,
})
document.querySelector(".carousel").style.marginLeft = "350vmax";
gsap.to(".carousel",{
  scrollTrigger:{
      trigger:".cBody",
      scrub:3,
      start:"10% 65%",
      end:"10% 60%",
  },
  marginLeft:"0vmax",
  ease: Power0,
})

document.querySelector("#headingtwo").style.opacity = "0";
gsap.to("#headingtwo",{
  scrollTrigger:{
      // markers:true,
      trigger:"#products",
      scrub:3,
      start:"0% 95%",
      end:"10% 70%",
  },
  opacity:1,
  ease: Power0.easeInOut,
})

document.querySelector("#buyBtn").style.opacity = "0";
gsap.to("#buyBtn",{
  scrollTrigger:{
      trigger:".cBody",
      scrub:3,
      start:"40% 35%",
      end:"40% 30%",
  },
  opacity:1,
  ease: Power0,
})

document.querySelector("#EquipmentsDiv").style.marginRight = "350vmax";
gsap.to("#EquipmentsDiv",{
  scrollTrigger:{
      trigger:"#products",
      scrub:3,
      start:"40% 85%",
      end:"40% 80%",
  },
  marginRight:"0vmax",
  ease: Power0,
})

document.querySelector("#headingThree").style.opacity = "0";
gsap.to("#headingThree",{
  scrollTrigger:{
      trigger:".headingThree",
      scrub:3,
      start:"40% 75%",
      end:"40% 70%",
  },
  opacity:1,
  ease: Power0,
})

document.querySelector("#headingFour").style.opacity = "0";
gsap.to("#headingFour",{
  scrollTrigger:{
      trigger:"#headingFour",
      scrub:3,
      start:"40% 85%",
      end:"40% 80%",
  },
  opacity:1,
  ease: Power0,
})

let Time = gsap.timeline({scrollTrigger:{
  trigger:".box-container",
  scrub:3,
  start:"20% 79%",
  end:"40% 75%",
}}); 


 let Box = document.querySelectorAll(".box-container .box")
 Box.forEach(function(elem){
    elem.style.rightLeft = "220mvax";
    elem.style.opacity = "0";
 })
 Box.forEach(function(elem){
      Time.to(elem,{
        rightLeft : "0mvax",
        opacity : "1",
      })
 })


 document.querySelector("#outTeam").style.opacity = "0";
 document.querySelector("#outTeam").style.marginTop = "10vmax";
 gsap.to("#outTeam",{
   scrollTrigger:{
       trigger:"#outTeam",
       scrub:3,
       start:"0% 65%",
       end:"0% 60%",
   },
   opacity:1,
   marginTop:"0vmax",
   ease: Power0,
 })

 document.querySelector("#teamDown").style.marginTop = "10vmax";
 document.querySelector("#teamDown").style.opacity = "0";

 gsap.to("#teamDown",{
  scrollTrigger:{
      trigger:"#teamImage",
      scrub:3,
      start:"20% 45%",
      end:"20% 40%",
  },
  opacity:1,
  marginTop:"0vmax",
  ease: Power0,
})


 document.querySelector("#headingFive").style.opacity = "0";

 gsap.to("#headingFive",{
  scrollTrigger:{
      trigger:"#headingFive",
      scrub:3,
      start:"20% 75%",
      end:"20% 70%",
  },
  opacity:1,
  marginTop:"0vmax",
  ease: Power0,
})


let TimeTwo = gsap.timeline({scrollTrigger:{
  trigger:"#reviews",
  scrub:3,
  start:"20% 79%",
  end:"40% 79%",
 
}});



let Review = document.querySelectorAll(".slide2")
Review.forEach(function(elem){
   elem.style.marginLeft = "220mvax";
   elem.style.opacity = "0";
})
Review.forEach(function(elem){
    TimeTwo.to(elem,{
       marginLeft : "0mvax",
       opacity : "1",
       ease: Power0,
     })
})



/* ==============================gsap-end=================== */