// Generates a random number between 0 and num - 1
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
  }
  
  // Array that stores random messages
  const randomMessages = [
    "Today's motivation: It's never too late to start anew.",
    "Did you know that bees communicate through dancing? 🐝",
    "Quote of the day: 'Happiness is not something ready made. It comes from your own actions.' - Dalai Lama",
    "Why do you find books in libraries? Because they're there!",
    "On this day in 1969, humans first landed on the Moon.",
    "Today is the right day to start a new adventure.",
    "Equations are like puzzles for mathematicians. Here's one: 2x + 3 = 7. What is the value of x?",
    "What is the tallest mountain in the world?",
    "We recommend the song 'Imagine' by John Lennon today.",
    "Can you guess which continent has the most inhabitants?"
  ];
  
  // Generates a random message from the provided messages array
  function generateRandomMessage(messages) {
    const randomIndex = generateRandomNumber(messages.length);
    return messages[randomIndex];
  }
  
  // Formats and displays a random message
  function formatWisdom() {
    const randomMessage = generateRandomMessage(randomMessages);
    console.log(randomMessage);
  }
  
  // Call the formatWisdom function to display a random message
  formatWisdom();
  