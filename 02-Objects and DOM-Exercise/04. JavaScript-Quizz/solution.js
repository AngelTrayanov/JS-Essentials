function solve() {
  function trueOrFalse() {
    if (this.textContent === rightAnswers[sectionNumber - 1]) {
      rightAnswersCount++;
    }
    if (sectionNumber === sectionElements.length - 2) { //length is 5, questions are 3
      let h1Element = document.getElementsByTagName('h1')[1];
      if (rightAnswersCount === sectionElements.length - 2) {
        h1Element.textContent = 'You are recognized as top JavaScript fan!';
      } else {
        h1Element.textContent = `You have ${rightAnswersCount} right answers`;
      }
    }
    sectionElements[sectionNumber].style.display = 'none';
    sectionElements[sectionNumber + 1].style.display = 'block';
    sectionNumber++;
  }
  const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let rightAnswersCount = 0;
  let sectionNumber = 1;
  let sectionElements = document.getElementById('quizzie').children;

  let answersOptions = document.getElementsByTagName('p');
  for (let option of answersOptions) {
    option.addEventListener('click', trueOrFalse);
  }
}