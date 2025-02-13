const btnAnswer = document.querySelector('[data-js="btn-show-answer"]');
const answerShown = document.querySelector('[data-js="answer-shown"]');


btnAnswer.addEventListener('click', () => {
    answerShown.classList.toggle('visible');
});

