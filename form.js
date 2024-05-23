const question = document.querySelector('[data-js="question"]');
const createNewCardBtn = document.querySelector('[data-js="answerBtn"]');
createNewCardBtn.addEventListener("click", (event) => {
  const newCard = document.createElement("article");
  newCard.classList.add("card");
});

document.addEventListener("input", (event) => {
  const handleCharCount = (textareaId, charCountSpanSelector) => {
    const textarea = document.getElementById(textareaId);
    const charCountSpan = document.querySelector(charCountSpanSelector);
    const maxChars = textarea.getAttribute("maxlength");

    textarea.addEventListener("input", () => {
      const remainingChars = maxChars - textarea.value.length;
      charCountSpan.textContent = remainingChars;
    });
  };

  handleCharCount("question", '[data-js="amount-left-question"]');
  handleCharCount("answer", '[data-js="amount-left-answer"]');
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const questionInput = document.querySelector('[data-js="input-question"]');
  const answerInput = document.querySelector('[data-js="input-answer"]');
  const tagsInput = document.getElementById("tags");

  const cardListSection = document.createElement("section");
  cardListSection.classList.add("card-list");

  document.body.appendChild(cardListSection);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const questionText = questionInput.value;
    const answerText = answerInput.value;
    const tagsText = tagsInput.value;

    createNewCard(questionText, answerText, tagsText);

    form.reset();
  });

  const createNewCard = (question, answer, tags) => {
    const card = document.createElement("article");
    card.classList.add("card");

    const questionElement = document.createElement("h2");
    questionElement.classList.add("card__question");
    questionElement.textContent = question;

    const answerButton = document.createElement("button");
    answerButton.classList.add("card__button-answer");
    answerButton.textContent = "Show Answer";

    const answerElement = document.createElement("p");
    answerElement.classList.add("card__answer");
    answerElement.textContent = answer;
    answerElement.style.display = "none";

    answerButton.addEventListener("click", () => {
      answerElement.style.display =
        answerElement.style.display === "none" ? "block" : "none";
    });

    const tagList = document.createElement("ul");
    tagList.classList.add("card__tag-list");

    tags.split(",").forEach((tag) => {
      const tagItem = document.createElement("li");
      tagItem.classList.add("card__tag-list-item");
      tagItem.textContent = tag.trim();
      tagList.appendChild(tagItem);
    });

    const bookmarkWrapper = document.createElement("div");
    bookmarkWrapper.classList.add("card__button-bookmark");

    const bookmarkButton = document.createElement("button");
    bookmarkButton.classList.add("bookmark");
    bookmarkButton.textContent = "";
    bookmarkWrapper.appendChild(bookmarkButton);

    card.append(
      questionElement,
      answerButton,
      answerElement,
      tagList,
      bookmarkWrapper
    );

    const form = document.querySelector(".form");
    form.insertAdjacentElement("afterend", card);
  };
});
