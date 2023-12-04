function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  let section = document.querySelector('section');
  for (let i = 0; i < section.children.length; i++){
    section.children[i].classList.add('widget');
  }

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  function randomNumber(maxNum){
    return Math.floor(Math.random() * maxNum)
  }

  let quoteOfTheDay = document.querySelector('.quoteoftheday');
  let randomQuote = document.createElement('div');
  let authorDate = document.createElement('div');
  let quoteSelect = randomNumber(quotes.length);
  let date;
  if (quotes[quoteSelect].date === null){
    date = "an unknown date";
  } else {
    date = quotes[quoteSelect].date;
  }
  randomQuote.textContent = quotes[quoteSelect].quote;
  authorDate.textContent = quotes[quoteSelect].author + " in " + date;
  quoteOfTheDay.appendChild(randomQuote);
  quoteOfTheDay.appendChild(authorDate);


  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  let corporateSpeak = document.querySelector('.corporatespeak');
  let corporateStatement = document.createElement('p');
  corporateStatement.textContent = `We need to ${verbs[randomNumber(verbs.length)]} our ${nouns[randomNumber(nouns.length)]} ${adverbs[randomNumber(adverbs.length)]} in order to ${verbs[randomNumber(verbs.length)]} our ${nouns[randomNumber(nouns.length)]} ${adverbs[randomNumber(adverbs.length)]}.`;

  corporateSpeak.appendChild(corporateStatement);

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  let countdown = document.querySelector('.countdown');
  let timerElement = document.createElement('p');
  let timerInterval = setInterval(countdownTimer, 1000);
  let count = 5;

  timerElement.textContent = `T-minus ${count}...`

  function countdownTimer(){
    if (count === 1){
      timerElement.textContent = "Liftoff! 🚀";
      clearInterval(timerInterval);
    } else {
      count--;
      timerElement.textContent = `T-minus ${count}...`;
    }
  }

  countdown.appendChild(timerElement);


  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  let randomPerson = randomNumber(people.length);
  let personName = people[randomPerson].fname + " " + people[randomPerson].lname;
  let personBirth = people[randomPerson].dateOfBirth.slice(0,4);
  let personFriends = people[randomPerson].friends;

  function friendById(friendId){
    let friendsIndex = [];
    let result = "is friends with ";

    if (friendId.length === 0){
      result = "has no friends"
    } else { 
      for (let i = 0; i < friendId.length; i++){
        for (let j = 0; j < people.length; j++){
          if (people[j].id === friendId[i]){
            friendsIndex.push(j);
            
          }
        }
      }
      for (let i = 0; i < friendsIndex.length - 2; i++){
        result += people[friendsIndex[i]].fname + " " + people[friendsIndex[i]].lname + ", ";
      }
      if (friendsIndex.length > 1){
        for (let i = friendsIndex.length - 2; i < friendsIndex.length - 1; i++){
          result += people[friendsIndex[i]].fname + " " + people[friendsIndex[i]].lname + " and ";
        }
      }
      result += people[friendsIndex[friendsIndex.length - 1]].fname + " " + people[friendsIndex[friendsIndex.length - 1]].lname;
    }
    
    return result;
  }

  let friends = document.querySelector('.friends');

  let friendStatement = document.createElement('p');
  friendStatement.textContent = `${personName} was born in ${personBirth} and ${friendById(personFriends)}.`
  friends.appendChild(friendStatement);


  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  for (let i = 0; i < section.children.length; i++){
    section.children[i].setAttribute('tabindex', i + 1);
  }

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
