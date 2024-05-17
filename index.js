console.clear();

const bookmarkIcon = document.querySelector('[data-js="bookmark"]');

bookmarkIcon.addEventListener("click", (event) => {
  bookmarkIcon.classList.toggle("bookmark--active");
});

const answerBtn = document.querySelector('[data-js="answerBtn"]');
const answerCard = document.querySelector('[data-js="card_answer"]');

answerBtn.addEventListener("click", (event) => {
  answerCard.classList.toggle("card__answer--active");
});
