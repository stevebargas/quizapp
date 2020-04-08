/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let answersCorrect = 0;


// 2. Store the rank of a player

let playerRank = '';

// 3. Select the <main> HTML element
const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/



const answer1 =  prompt('What is your first name?');
if ( answer1.toUpperCase() === 'STEVE' ){
  answersCorrect += 1;
}

const answer2 = prompt('What is your last name?');
if ( answer2.toUpperCase() === 'BARGAS'){
  answersCorrect += 1;
}

const answer3 = prompt('What color is the sky?');
if ( answer3.toUpperCase() === 'BLUE'){
  answersCorrect += 1;
}

const answer4 = prompt('What color is the sun?');
if ( answer4.toUpperCase() === 'RED' || answer4.toUpperCase() === 'YELLOW'){
  answersCorrect += 1;
}

const answer5 = prompt('How many points does a star have?');
if( answer5.toUpperCase() === '5' || answer5.toUpperCase() === 'FIVE'){
  answersCorrect += 1;
}



/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/




console.log(answersCorrect)


if (answersCorrect === 5){
  playerRank = 'Congrats you got a Gold Star';
} else if( answersCorrect >= 3){
  playerRank = 'You get a silver Star';
} else if( answersCorrect >= 1){
  playerRank = 'You get a bronze star';
} else{
  playerRank = 'You get nothing!!';
}





// 6. Output results to the <main> element

main.innerHTML = `
<h2>You got ${answersCorrect} out of 5 questions correct.</h2>
<p>Crown Earned: <strong> ${playerRank}</strong></p>
`;