let navbar = document.querySelector(".header .navbar");
let preloader = document.querySelector(".loader");  
let all = document.querySelector("#smooth-wrapper");
let lod = document.querySelector(".lod");


// preloader.style.display = "initial"

// all.style.opacity ="0.1"

// setTimeout(() => {
//   all.style.opacity ="1"
//   preloader.style.display = "none"
//   lod.style.display = "none"

// }, 1500);

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

// setTimeout(() => {
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
  
  // (document).ready(function() {
  //   $(".fancy_title").lettering();
  // });
  
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

// },1200);

var tl2 = gsap.timeline({
  ScrollTrigger: {
      trigger : document.querySelector("#smooth-content"),
      start : "top 50%",
      markers : true,
  }
});

tl2
.from('#smooth-content .category .heading', {
  y : 50,
  opacity : 0,
  ease : Expo.easeInOut,
  duration : 0.5
})
.from('#main2 p', {
  y : 50,
  opacity : 0,
  ease : Expo.easeInOut,
})
//////////////////////////////////////////////////


class Carousel {
  /**
   *
   * @param {*} carouselId
   * @param {*} itemsClassNames
   * @param {*} carouselNavId
   * @param {*} leftButtonId
   * @param {*} rightButtonId
   * @param {*} autoChange
   * @param {*} autoChangeDelay
   * @param {*} loop
   * @param {*} mobileTouch
   * @returns
   */
  constructor(
    carouselId,
    itemsClassNames,
    carouselNavId = false,
    leftButtonId = false,
    rightButtonId = false,
    autoChange = true,
    autoChangeDelay = 5000,
    loop = true,
    mobileTouch = true
  ) {
    if (!carouselId) {
      console.error("Carousel id not defined");
      return;
    }
    if (!itemsClassNames) {
      console.error("Carousel items class name not defined");
      return;
    }

    this.carousel = document.getElementById(carouselId);

    if (!this.carousel) {
      console.error("Carousel not found");
      return;
    }

    this.itemsClassNames = itemsClassNames;
    this.items = this.carousel.querySelectorAll("." + itemsClassNames);

    if (this.items.length < 2) {
      console.error("Carousel items not found");
      return;
    }

    if (carouselNavId) {
      this.carouselNav = document.getElementById(carouselNavId);
      if (!this.carouselNav) {
        console.error("Carousel nav not found");
        return;
      }
      for (let i = 0; i < this.items.length; i++) {
        const button = document.createElement("button");
        button.classList.add("carousel-nav-point");
        button.addEventListener("click", () => {
          this.change(i);
        });
        this.carouselNav.appendChild(button);
      }
    }

    if (leftButtonId) {
      this.leftButton = document.getElementById(leftButtonId);
    }

    if (rightButtonId) {
      this.rightButton = document.getElementById(rightButtonId);
    }

    this.autoChange = autoChange;
    this.autoChangeDelay = autoChangeDelay;
    this.loop = loop;
    this.mobileTouch = mobileTouch;

    this.touchStartX = 0;
    this.touchEndX = 0;
    this.isTouching = false;

    this.timeout = null;

    this.carouselEffect = () => {
      if (this.carousel.classList.contains("slide-effect")) {
        return "slide";
      } else if (this.carousel.classList.contains("fade-effect")) {
        return "fade";
      }
      return false;
    };

    if (!this.carouselEffect()) {
      console.error("Carousel effect not defined");
      return;
    }

    this.itemWidth = parseInt(
      window.getComputedStyle(this.items[0]).getPropertyValue("width")
    );
    this.carouselGap =
      parseInt(
        window.getComputedStyle(this.carousel).getPropertyValue("gap")
      ) || 0;

    this.init();
  }

  init() {
    this.items[0].classList.add("active");
    if (this.carouselNav) {
      this.carouselNav
        .querySelectorAll(".carousel-nav-point")[0]
        .classList.add("active");
    }

    if (!this.loop && this.leftButton && this.rightButton) {
      this.updateArrows();
    }
    if (this.leftButton) {
      this.leftButton.addEventListener("click", this.left.bind(this));
    }
    if (this.rightButton) {
      this.rightButton.addEventListener("click", this.right.bind(this));
    }
    if (this.autoChange) {
      this.timeout = setTimeout(
        this.automaticChange.bind(this),
        this.autoChangeDelay
      );
    }
    if (this.mobileTouch) {
      this.carousel.addEventListener(
        "touchstart",
        this.touchStart.bind(this),
        false
      );
      this.carousel.addEventListener(
        "touchmove",
        this.touchMove.bind(this),
        false
      );
      this.carousel.addEventListener(
        "touchend",
        this.touchEnd.bind(this),
        false
      );
    }
  }

  automaticChange() {
    this.right();
  }

  getActualTransform(item) {
    let actualTransform = item.style.transform;
    if (actualTransform) {
      actualTransform = actualTransform.split("(")[1].split(")")[0];
      actualTransform = parseInt(actualTransform);
    } else {
      actualTransform = 0;
    }
    return actualTransform;
  }

  slideLeft(last = false) {
    if (last) {
      this.items.forEach((item) => {
        const end =
          this.itemWidth * (this.items.length - 1) +
          this.carouselGap * (this.items.length - 1);
        for (let i = 0; i < end; i++) {
          setTimeout(() => {
            item.style.transform = `translateX(${-i}px)`;
          }, 1);
        }
      });
    } else {
      this.items.forEach((item) => {
        const actualTransform = this.getActualTransform(item);
        item.style.transform = `translateX(${
          actualTransform + this.itemWidth + this.carouselGap
        }px)`;
      });
    }
  }

  slideRight(last = false) {
    if (last) {
      this.items.forEach((item) => {
        const actualTransform = this.getActualTransform(item);
        for (let i = actualTransform; i < 0; i++) {
          setTimeout(() => {
            item.style.transform = `translateX(${i}px)`;
          }, 1);
        }
      });
    } else {
      this.items.forEach((item) => {
        const actualTransform = this.getActualTransform(item);
        item.style.transform = `translateX(${
          actualTransform - (this.itemWidth + this.carouselGap)
        }px)`;
      });
    }
  }

  left() {
    clearTimeout(this.timeout);
    const activeItem = this.carousel.querySelector(".active");
    const previousItem = activeItem.previousElementSibling;

    if (previousItem) {
      activeItem.classList.remove("active");
      previousItem.classList.add("active");

      if (this.carouselEffect() === "slide") {
        this.slideLeft();
      }
    } else if (this.loop) {
      activeItem.classList.remove("active");
      this.items[this.items.length - 1].classList.add("active");

      if (this.carouselEffect() === "slide") {
        this.slideLeft(true);
      }
    }

    if (this.carouselNav) {
      this.updateNav();
    }

    if (!this.loop && this.leftButton && this.rightButton) {
      this.updateArrows();
    }

    if (this.autoChange) {
      this.timeout = setTimeout(
        this.automaticChange.bind(this),
        this.autoChangeDelay
      );
    }
  }

  right() {
    clearTimeout(this.timeout);
    const activeItem = this.carousel.querySelector(".active");
    const nextItem = activeItem.nextElementSibling;

    if (nextItem) {
      activeItem.classList.remove("active");
      nextItem.classList.add("active");

      if (this.carouselEffect() === "slide") {
        this.slideRight();
      }
    } else if (this.loop) {
      activeItem.classList.remove("active");
      this.items[0].classList.add("active");

      if (this.carouselEffect() === "slide") {
        this.slideRight(true);
      }
    }

    if (this.carouselNav) {
      this.updateNav();
    }

    if (!this.loop && this.leftButton && this.rightButton) {
      this.updateArrows();
    }

    if (this.autoChange) {
      this.timeout = setTimeout(
        this.automaticChange.bind(this),
        this.autoChangeDelay
      );
    }
  }

  updateNav() {
    const activeItem = this.carousel.querySelector(".active");
    const activeIndex = Array.prototype.indexOf.call(this.items, activeItem);
    const activeNavPoint = this.carouselNav.querySelector(".active");
    activeNavPoint.classList.remove("active");
    this.carouselNav
      .querySelectorAll(".carousel-nav-point")
      [activeIndex].classList.add("active");
  }

  change(index) {
    clearTimeout(this.timeout);

    const actualIndex = Array.prototype.indexOf.call(
      this.items,
      this.carousel.querySelector(".active")
    );

    if (index > actualIndex) {
      for (let i = actualIndex; i < index; i++) {
        this.right();
      }
    } else if (index < actualIndex) {
      for (let i = actualIndex; i > index; i--) {
        this.left();
      }
    }

    if (this.carouselNav) {
      this.updateNav();
    }

    if (!this.loop && this.leftButton && this.rightButton) {
      this.updateArrows();
    }

    if (this.autoChange) {
      this.timeout = setTimeout(
        this.automaticChange.bind(this),
        this.autoChangeDelay
      );
    }
  }

  touchStart(e) {
    if (!this.isTouching) {
      this.isTouching = true;
      this.touchStartX = e.changedTouches[0].screenX;
    }
  }

  touchMove(e) {
    if (this.isTouching) {
      this.touchEndX = e.changedTouches[0].screenX;
    }
  }

  touchEnd() {
    if (this.isTouching) {
      this.isTouching = false;
      if (this.touchStartX > this.touchEndX) {
        this.right();
      } else if (this.touchStartX < this.touchEndX) {
        this.left();
      }
    }
  }

  updateArrows() {
    if (this.leftButton) {
      this.leftButton.removeAttribute("disabled");
    }
    if (this.rightButton) {
      this.rightButton.removeAttribute("disabled");
    }
    if (
      this.carousel.querySelector(".active").previousElementSibling === null
    ) {
      if (this.leftButton) {
        this.leftButton.setAttribute("disabled", true);
      }
    }
    if (this.carousel.querySelector(".active").nextElementSibling === null) {
      if (this.rightButton) {
        this.rightButton.setAttribute("disabled", true);
      }
    }
  }
}

new Carousel(
  "carousel",
  "carousel-item",
  "carousel-nav",
  "left",
  "right",
  false,
  0,
  false,
  true
);
new Carousel(
  "carousel2",
  "carousel-item",
  null,
  "left2",
  "right2",
  true,
  5000,
  true,
  true
);
new Carousel(
  "carousel3",
  "carousel-item",
  "carousel-nav3",
  null,
  null,
  true,
  5000,
  true,
  true
);
new Carousel(
  "carousel4",
  "carousel-item",
  null,
  "left3",
  "right3",
  true,
  5000,
  true,
  true
);
