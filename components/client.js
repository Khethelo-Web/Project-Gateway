const menu = document.querySelector('#menu-bar');
const navbarEl = document.querySelector('.navbar-menu');
const surveyPassword = document.querySelector('.surveyPassword');
const viewSurvey = document.querySelector('.viewSurvey');
const btnCreate = document.querySelector('.btnCreate');
const btnCreateSurvey = document.querySelector('.btnCreateSurvey');
const createSurvey = document.querySelector('.createSurvey');
const titleValue = document.getElementById('surveyTitle');
const addQuestion = document.querySelector('.addQuestion');
const btnStatus = document.querySelector('.btnStatus');
const questionDiv = document.querySelector('.question-container');
const surveyStatus = document.querySelector('.survey_status');
const btnClose_Stats = document.querySelector('.btnClose_Stats');
const myChart = document.querySelector('.myChart');
const container = document.querySelector('.container');
const LisEl = document.querySelector('.questionList');


btnClose_Stats.addEventListener('click', ()=> {
  container.classList.remove("active");
  surveyStatus.classList.remove("active");
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    centerSlide:true,
    fade: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });








