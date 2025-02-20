console.clear();
import { fromDataJS } from './../../global.js';

// Variables
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
    if (remainingChars < 140) {
        textareaAnswer.style.color = "red";
    } else {
        textareaAnswer.style.color = "black";
    }
});










