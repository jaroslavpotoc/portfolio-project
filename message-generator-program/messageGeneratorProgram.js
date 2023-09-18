function generateRandomNumber(num) {
  // Gets a number from 0 to num - 1
  return Math.floor(Math.random() * num);
}

const randomMessages = [
  "Today's motivation:\n"
  + "   _____          __  __ ______    ______      ________ _____  \n"
  + "  / ____|   /\\   |  \\/  |  ____|  / __ \\ \\    / /  ____|  __ \\ \n"
  + " | |  __   /  \\  | \\  / | |__    | |  | \\ \\  / /| |__  | |__) |\n"
  + " | | |_ | / /\\ \\ | |\\/| |  __|   | |  | |\\ \\/ / |  __| |  _  / \n"
  + " | |__| |/ ____ \\| |  | | |____  | |__| | \\  /  | |____| | \\ \\ \n"
  + "  \\_____/_/    \\_\\_|  |_|______|  \\____/   \\/   |______|_|  \\_\\",
  "Did you know that bees communicate through dancing? 🐝",
  "Quote of the day:\n"
  + "  _______ _                 _     \n"
  + " |__   __| |               | |    \n"
  + "    | |  | |__   __ _ _ __ | | __ \n"
  + "    | |  | '_ \\ / _` | '_ \\| |/ / \n"
  + "    | |  | | | | (_| | | | |   <  \n"
  + "    |_|  |_| |_|\\__,_|_| |_|_|\\_\\",
  "Why do you find books in libraries?\n"
  + "  ____  _ _ _     ____ _ _ _ _\n"
  + " |  _ \\(_) | |   |  _ \\ (_) | | |\n"
  + " | |_) |_| | |   | |_) |_| | | |\n"
  + " |  _ <| | | |   |  _ <| | | | |\n"
  + " | |_) | | | |___| |_) | | | | |\n"
  + " |____/|_|_|_____|____/|_|_|_|_|",
  "On this day in 1969, humans first landed on the Moon.\n"
  + "  _    _ _   _ _ _ _   _ _ _ _ _ _\n"
  + " / \\  /  / |  _ _ _ _  |  _ _ _ _ _|\n"
  + "|   ||  |  | |       | | |          \n"
  + "|   ||  |  | |       | | |  _ _ _ _\n"
  + " \\_/  \\_/  |_|_ _ _ _| |_|_ _ _ _ _|",
  "Today is the right day to start a new adventure.",
  "Equations are like puzzles for mathematicians:\n"
  + "  _____ _     _        _  _____ \n"
  + " / ____| |   (_)      | |/ ____|\n"
  + "| |    | |__  _  ___  | | |  __ \n"
  + "| |    | '_ \\| |/ _ \\ | | | |_ |\n"
  + "| |____| | | | |  __/ | | |__| |\n"
  + " \\_____|_| |_|_|\\___| |_|\\_____|\n"
  + "                                ",
  "What is the tallest mountain in the world?\n"
  + "  __   __  _ _ _ _ _ _ _ _ _ _  \n"
  + "  \\ \\ / / |  _ _ _ _ _ _ _ _ _| \n"
  + "   \\ V /  | |                      \n"
  + "    > <   | | _ _ _ _ _ _ _   \n"
  + "   / . \\  | ||                            \n"
  + "  /_/ \\_\\ |_| _ _ _ _ _ _ _ _|",
  "We recommend the song 'Imagine' by John Lennon today.",
  "Can you guess which continent has the most inhabitants?"
];

function generateRandomMessage(messages) {
  const randomIndex = generateRandomNumber(messages.length);
  return messages[randomIndex];
}

function formatWisdom() {
  const randomMessage = generateRandomMessage(randomMessages);
  console.log(randomMessage);
}

formatWisdom();
