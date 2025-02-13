const btnAnswer = document.querySelector('[data-js="btn-show-answer"]');
const answerShown = document.querySelector('[data-js="answer-shown"]');

const btnBookmark = document.querySelector('[data-js="btn-bookmark"]');
const bookmarkFlag = document.querySelector('[data-js="svgElement"]')

btnAnswer.addEventListener('click', () => {
    answerShown.classList.toggle('visible');
});

btnBookmark.addEventListener('click', () => {
    bookmarkFlag.classList.toggle('bookmark__icon---active');
})