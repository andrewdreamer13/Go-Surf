import { gsap } from "gsap";
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

document.addEventListener("DOMContentLoaded", (event) => {
  const titleFirstItems = document.querySelectorAll(".title__first");
  const titleSecondItems = document.querySelectorAll(".title__second");

  titleFirstItems.forEach((item) => {
    const text = item.textContent.trim();
    item.innerHTML = "";

    for (let char of text) {
      const span = document.createElement("span");
      span.textContent = char;
      item.append(span);
    }
  });

  titleSecondItems.forEach((item) => {
    const text = item.textContent.trim();
    item.innerHTML = "";

    for (let char of text) {
      const span = document.createElement("span");
      span.textContent = char;
      item.append(span);
    }
    const titleDecor = document.createElement("div");
    titleDecor.classList.add("title__second-line");
    item.append(titleDecor);
  });


  titleFirstItems.forEach((item) => {
    gsap.to(item.querySelectorAll("span"), {
      scrollTrigger: {
        trigger: item,
        start: "top center",
      },
      duration: 1.3,
      opacity: 1,
      y: 0,
      x: 0,
      stagger: 0.1,
      ease: "back.out(1.7)",
      repeat: 0,
    });
  });

  titleSecondItems.forEach((item) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: item,
          start: "center center",
        },
      })
      .to(
        item.querySelectorAll("span"),
        {
          duration: 0.5,
          opacity: 1,
          y: 0,
          x: 0,
          repeat: 0,
          ease: "back.out(1.7)",
          stagger: {
            each: 0.1,
            from: "end",
          },
        },
        "+=0.7"
      )
      .to(item.querySelector(".title__second-line"), {
        duration: 0.5,
        scale: 1,
        ease: "back.out(1.7)",
      });
  });

  const overlays = document.querySelectorAll(".slider-overlay");

  overlays.forEach((overlay) => {
    gsap.to(overlay, {
      scrollTrigger: {
        trigger: overlay,
        start: "top center",
      },
      duration: 3,
      opacity: 0,
    });
  });

  
});
