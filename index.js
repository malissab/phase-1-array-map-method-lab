const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function changeLetter(letter) {
  return letter.charAt(0).toUpperCase() + letter.slice(1)
}

function changeTutorial(element) {
  let arr = element.split(" ");

  return arr.map(changeLetter).join(" ");
}

const titleCased = () => {
  let titlesArray = tutorials.map(changeTutorial);

  return titlesArray;
};
