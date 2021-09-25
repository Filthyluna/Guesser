function letterGuesser() {
  //Array of letters
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  
  //Creates randomized index
  let letterNum = Math.floor(Math.random() * letters.length);
  //Asks for guess and saves it to the variable guess
  let guessString = prompt(`Your letter is ${letters[letterNum]}. Guess its index.`);
  //Turns guess into a number
  let guessNum = Number(guessString);
  if (guessNum == letterNum) {
    alert("Correct! You are a genius at the alphabet!");
  }
  else {
    alert(`Incorrect, you will have to re-learn the abc's. The index of ${letters[letterNum]} is ${letterNum}`);
  }
}

letterGuesser();