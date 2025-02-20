// phew… not a lot going on here. Please add some code!
// Be lazy ;-) use the global functions
import { fromDataJS } from './global.js';


// Variables Area
const btnBookmark = fromDataJS("btn-bookmark");
const btnShowAnswer = fromDataJS("btn-show-answer");
const questionCard = fromDataJS("question-card");
const answerCard = fromDataJS("answer-card");

// EventListner Area
btnBookmark.addEventListener('click', () => {
    console.log(`btnBookmark clicked`);
    btnBookmark.classList.toggle('bookmark--active');
});


btnShowAnswer.addEventListener("click", () => {
    // Needed cause there are spaces inside or .innerText
    const btnText = btnShowAnswer.textContent.trim();

    if (btnText === "Show answer") {
        btnShowAnswer.textContent = "Hide answer";
        //questionCard.classList.toggle("hidden");
        answerCard.classList.toggle("card__answer--active");
    } else {
        btnShowAnswer.textContent = "Show answer";
        //questionCard.classList.toggle("hidden");
        answerCard.classList.toggle("card__answer--active");
    }
});
