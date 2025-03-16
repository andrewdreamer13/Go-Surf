import Swiper from "swiper/bundle";
import { flights } from "./data.js";

const travelSlider = new Swiper(".travel__slider", {
  spaceBetween: 0,
  slidesPerView: 1,
  initialSlide: 0,
  effect: "fade",
  centeredSlides: true,
  speed: 700,

  navigation: {
    nextEl: ".travel__slider-next",
    prevEl: ".travel__slider-prev",
  },
});

const region = document.querySelector('#dest');
const country = document.querySelector('#country');
const distance = document.querySelector('#dist');
const hours = document.querySelector('#hours');
const price = document.querySelector('#price');

travelSlider.on("slideChange", () => {
  const currentIndex = travelSlider.realIndex;
  flights.forEach((flight) => {
    if(flight.id == currentIndex){
      region.textContent = `${flight.region}`;
      country.textContent = `${flight.country}`;
      distance.textContent = `${flight.distance} miles`;
      hours.textContent = `${flight.time} hours`;
      price.textContent = `$${flight.price} usd`;
    }
  })
  
});