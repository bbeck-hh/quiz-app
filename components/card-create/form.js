console.clear();
import { addCss, fromDataJS, toCreate } from './../../global.js';

// Variables
const createForm = fromDataJS("card-form");
const cardContainer = fromDataJS("card-container");

// Question Block
const textareaQuestion = document.getElementById("yourQuestion");
const maxLengthQuestion = textareaQuestion.maxLength;
const totalCharQuestion = fromDataJS("char-total-question");
const charsLeftQuestion = fromDataJS("chars-left-question");

// Answer Block
const textareaAnswer = document.getElementById("yourAnswer");
const maxLengthAnswer = textareaAnswer.maxLength;
const totalCharAnswer = fromDataJS("chars-total-answer");
const charsLeftAnswer = fromDataJS("chars-left-answer");

// Max chars from the textaeras -> Question and answer
totalCharQuestion.textContent = maxLengthQuestion;
totalCharAnswer.textContent = maxLengthAnswer;

// Add the max chars to the span
charsLeftQuestion.textContent = maxLengthQuestion;
charsLeftAnswer.textContent = maxLengthAnswer;

// Listner for Question to calculates the remaining number of characters allowed in the question textarea.
// @constant {number} remainingChars
textareaQuestion.addEventListener("input", () => {
    const remainingChars = maxLengthQuestion - textareaQuestion.value.length;
    charsLeftQuestion.textContent = remainingChars;

    //remainingChars < 165 ? (textareaQuestion.style.color = "red") : (textareaQuestion.style.color = "black");
    if (remainingChars < 165) {
        textareaQuestion.style.color = "red";
    } else {
        textareaQuestion.style.color = "black";
    }
});

// Listner for Answer to calculates the remaining number of characters allowed in the question textarea.
// @constant {number} remainingChars
textareaAnswer.addEventListener("input", () => {
    const remainingChars = maxLengthQuestion - textareaAnswer.value.length;
    charsLeftAnswer.textContent = remainingChars;

    //remainingChars < 140 ? (textareaAnswer.style.color = "red") : (textareaAnswer.style.color = "black");
    if (remainingChars < 140) {
        textareaAnswer.style.color = "red";
    } else {
        textareaAnswer.style.color = "black";
    }
});

// listner to submit the form
createForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const question = data.yourQuestion;
    const answer = data.yourAnswer;
    const tag = data.tag;

    createCard(question, answer, tag);

    createForm.reset();
});

function createCard(question, answer, tag) {
    const cardLi = toCreate("li");
    addCss(cardLi, "card-list__item");
    console.log(cardLi);
    cardLi.innerHTML = `<article class="card" data-js="card">
    <h2 class="card__question" data-js='question-display'></h2>
    <button
      class="card__button-answer"
      data-js="answer-button"
      type="button"
    >
      Show answer
    </button>
    <p class="card__answer" data-js="answer-display"></p>
    <ul class="card__tag-list" data-js='tag-list'></ul>
    <div class="card__button-bookmark">
      <button
        class="bookmark"
        aria-label="bookmark"
        type="button"
        data-js="bookmark-button"
      >
        <svg
          class="bookmark__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewbox="0 0 24 24"
        >
          <path
            d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </button>
    </div>
  </article>`;

    const displayQuestion = cardLi.querySelector('[data-js="question-display"]');
    displayQuestion.textContent = question;
    console.log("Frage:" + displayQuestion.textContent);

    const displayAnswer = cardLi.querySelector('[data-js="answer-display"]');
    displayAnswer.textContent = answer;
    console.log("Antwort:" + displayAnswer.textContent);

    const tagList = cardLi.querySelector('[data-js="tag-list"]');
    const tagItem = toCreate("li");
    addCss(tagItem, "card__tag-list-item");
    tagItem.textContent = "# " + tag;
    tagList.appendChild(tagItem);

    // Append the new card to the card list
    const cardList = document.querySelector('.card-list');
    cardList.appendChild(cardLi);

    return cardLi;
}