import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createCounter, items } from "./counter-animation";
gsap.registerPlugin(ScrollTrigger);

const master = gsap.timeline();

function infoStages() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".info__stages",
      // markers: true,
      start: "top 80%",
      end: "bottom 70%",
      scrub: 1,
      once: true,
    },
  });

  tl.from(".info__stages-list", { opacity: 0, duration: 0.5, delay: 1 });
  document.querySelectorAll(".info__stages-item").forEach((item) => {
    tl.from(item, { opacity: 0, x: -100, duration: 0.5 });
  });
  tl.from(
    ".info__stages-teardrop",
    {
      opacity: 0,
      scale: 0,
      duration: 3,
    },
    "-=5"
  );
}

function infoNums() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".info__stats",
      // markers: true,
      start: "top 25%",
      end: "bottom 100%",
      once: true,
    },
  });

  tl.call(createCounter, [items]);
}

function income() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".income",
      // markers: true,
      start: "top 40%",
      end: "bottom 50%",
    },
  });

  tl.from(".income__item", { y: 100, opacity: 0, stagger: 0.1 });
}

function benefits() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".reasons",
      markers: true,
      start: "top 30%",
      end: "bottom 50%",
    },
  });

  tl.from(".reasons__item", { y: 100, opacity: 0, stagger: 0.1 });
}

master.add(infoStages).add(infoNums).add(income).add(benefits);
