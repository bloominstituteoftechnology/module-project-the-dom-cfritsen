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

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
