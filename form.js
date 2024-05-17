const question = document.querySelector('[data-js="question"]');
const createNewCardBtn = document.querySelector('[data-js="answerBtn"]');
createNewCardBtn.addEventListener("click", (event) => {
  const newCard = document.createElement("article");
  newCard.classList.add("card");
});

const textarea = document.querySelector('[data-js="input-question"]');
textarea.addEventListener("input", function () {
  const used = textarea.value.length;
});
