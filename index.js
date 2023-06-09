const checkbox = document.getElementById('toggleCheckbox');
const body = document.body;
const sectionFirst = document.querySelector(".section-first");
const sectionSecond = document.querySelector(".section-second");
const getInTouch = document.querySelector(".get-inTouch");
const cardTexts = document.querySelectorAll(".card-text");
const skills = document.querySelectorAll(".skills");

const sectionFirstText = sectionFirst.querySelectorAll("p, h2");
const sectionSecondText = sectionSecond.querySelectorAll("h1, h2");
const getInTouchText = getInTouch.querySelectorAll("h1, p");


checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    body.style.backgroundColor = 'white';
    body.style.transition = 'color 0.3s ease';
    sectionFirstText.forEach(element => {
      element.style.color = '#0a192f';
      element.style.transition = 'color 0.3s ease';
    });
    sectionSecondText.forEach(element => {
      element.style.color = '#0a192f';
      element.style.transition = 'color 0.3s ease';
    });
    getInTouchText.forEach(element => {
      element.style.color = '#0a192f';
      element.style.transition = 'color 0.3s ease';
    });
    skills.forEach(element => {
      element.style.color = '#0a192f';
      element.style.transition = 'color 0.3s ease';
    });
    cardTexts.forEach(cardText => {
      const cardTextContent = cardText.querySelectorAll("h1, p");
      cardTextContent.forEach(element => {
        element.style.color = 'white';
        element.style.transition = 'color 0.3s ease';
      });
    });

  } else {
    body.style.backgroundColor = '';
    sectionFirstText.forEach(element => {
      element.style.color = '';
      element.style.transition = 'color 0.3s ease';
    });
    sectionSecondText.forEach(element => {
      element.style.color = '';
      element.style.transition = 'color 0.3s ease';
    });
    getInTouchText.forEach(element => {
      element.style.color = '';
      element.style.transition = 'color 0.3s ease';
    });
    cardTextContent.forEach(element => {
      element.style.color = '';
      element.style.transition = 'color 0.3s ease';
    });
    skills.forEach(element => {
      element.style.color = '';
      element.style.transition = 'color 0.3s ease';
    });
  }
});
