const btnAnswer = document.querySelector('[data-js="btn-show-answer"]');
const answerShown = document.querySelector('[data-js="answer-shown"]');
const questionId = btnAnswer.getAttribute('data-js-questionId');
const answerId = answerShown.getAttribute('data-js-answerId');


const btnBookmark = document.querySelector('[data-js="btn-bookmark"]');
const bookmarkFlag = document.querySelector('[data-js="svgElement"]')


// btnAnswer.addEventListener('click', () => {
//     console.log(`btnAnswer clicked und die Fragenummer: ${questionId}`);

//     answerShown.classList.toggle('visible');
// });


btnBookmark.addEventListener('click', () => {
    console.log(`btnBookmark clicked`);
    bookmarkFlag.classList.toggle('bookmark__icon---active');
})

document.addEventListener('click', event => {
    console.log(`btnAnswer clicked\ndata-js-questionId: ${questionId}\ndata-js-answerId: ${answerId}`);
    const test = event.target.getAttribute('data-js-questionId');
    console.log(`test: ${test}`);

    if (questionId === answerId) {
        answerShown.classList.toggle('visible');
    } else {
        console.log(`Unterschiedliche Nummern`);
    }
});
