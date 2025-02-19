console.clear();

// Variables
const textareaQuestion = document.getElementById("yourQuestion");
const maxLengthQuestion = document.getElementById("yourQuestion").maxLength;
const totalCharQuestion = document.querySelector("[data-js=char-total-question]");
const charsLeftQuestion = document.querySelector("[data-js=chars-left-question]");

const textareaAnswer = document.getElementById("yourAnswer");
const maxLengthAnswer = document.getElementById("yourAnswer").maxLength;
const totalCharAnswer = document.querySelector("[data-js=chars-total-answer]");
const charsLeftAnswer = document.querySelector("[data-js=chars-left-answer]");

// Max chars from the textaera -> Question and answer
totalCharQuestion.textContent = maxLengthQuestion;
totalCharAnswer.textContent = maxLengthAnswer;

// 
charsLeftQuestion.textContent = maxLengthQuestion;
charsLeftAnswer.textContent = maxLengthAnswer;


console.log(maxLengthAnswer + " hier");



// Event Listener -1 from the max char by every hit a key
textareaQuestion.addEventListener("input", () => {
    const remainingChars = maxLengthQuestion - textareaQuestion.value.length;
    charsLeftQuestion.textContent = remainingChars;
    if (remainingChars < 165) {
        textareaQuestion.style.color = "red";
    } else {
        textareaQuestion.style.color = "black";
    }
});

textareaAnswer.addEventListener("input", () => {
    const remainingChars = maxLengthQuestion - textareaAnswer.value.length;
    charsLeftAnswer.textContent = remainingChars;
    if (remainingChars < 140) {
        textareaAnswer.style.color = "red";
    } else {
        textareaAnswer.style.color = "black";
    }
});










