//back to top button implement
let btn = document.getElementById("top-btn");
console.log(btn);
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 500) {
    btn.style.bottom = "1vh";
  } else {
    btn.style.bottom = "-15vh";
  }
});

//typing code
let typed = new Typed(".typing", {
  strings: [
    "MERN Developer !",
    "Coder !",
    "C++ Programmer !",
    "Fullstack Web Developer !",
  ],
  typeSpeed: 150,
  backSpeed: 100,
  loop: true,
});

/* ==================== Making Responsive ===================== */

const js_media = (web_width) => {
  if (web_width.matches) {
    //swipper js code
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    //swipper js code
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
};

const web_width = window.matchMedia("(max-width: 1120px)");

js_media(web_width);

web_width.addEventListener("change", js_media);

let greetMsg = document.getElementById("greetingMsg");
let currTime = new Date().getHours();

if (currTime >= 5 && currTime < 12) {
  greetMsg.innerHTML = "Good Morning";
} else if (currTime >= 12 && currTime < 16) {
  greetMsg.innerHTML = "Good Noon";
} else if (currTime >= 16 && currTime < 18) {
  greetMsg.innerHTML = "Good Afternoon";
} else if (currTime >= 18 && currTime < 20) {
  greetMsg.innerHTML = "Good Evening";
} else {
  greetMsg.innerHTML = "Good Night";
}
