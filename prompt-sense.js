const readline = require('readline');
const keypress = require('keypress');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Enable keypress events on the input stream
keypress(process.stdin);

const promptSense = (prompt, suggestions, numberOfSuggestions) => {
  return new Promise((resolve, reject) => {
    let userInput = '';
    let options = [];
    let selectedOptionIndex = 0;

    process.stdout.write(prompt);

    const updateOptions = () => {
      options = suggestions
          .filter((suggestion) => suggestion.slice(0, userInput.length).toLowerCase() === userInput.toLowerCase())
          .slice(0, numberOfSuggestions);
    }

    const handleKeyPress = async (char) => {
      console.clear();
      if (char === '\u0003') {
        // Handle Ctrl+C
        process.exit();
      } else if (char === '\u0008') {
        // Handle Backspace
        if (userInput.length > 0) {
          userInput = userInput.slice(0, -1);
          updateOptions();
        }
        if(userInput.length === 0) {
          options = [];
        }
      } else if (char === '\r') {
        // Handle Enter key
        if (selectedOptionIndex >= 0 && selectedOptionIndex < options.length) {

          resolve(options[selectedOptionIndex]);
          rl.close();
        } else {
          resolve(userInput.trim());
          rl.close();
        }
      } else if (char === '\u001b[A') {
        // Handle Up arrow key
        selectedOptionIndex = Math.max(0, selectedOptionIndex - 1);
      } else if (char === '\u001b[B') {
        // Handle Down arrow key
        selectedOptionIndex = Math.min(options.length - 1, selectedOptionIndex + 1);
      } else {
        // Handle other characters
        userInput += char.toLowerCase();
        updateOptions();
      }

      // Clear the console and display the prompt string and options
      readline.cursorTo(process.stdout, 0);
      readline.clearLine(process.stdout, 0);
      process.stdout.write(prompt);
      process.stdout.write(userInput);
      process.stdout.write('\n');
      options.forEach((option, index) => {
        if (index === selectedOptionIndex) {
          process.stdout.write(`> ${option}\n`);
        } else {
          process.stdout.write(`  ${option}\n`);
        }
      });
    };

    process.stdin.on('keypress', (_, key) => {
      handleKeyPress(key.sequence);
    });

    process.stdin.setRawMode(true);
    process.stdin.resume();

    rl.on('close', () => {
      reject('Input closed');
    });
  });
};


module.exports = promptSense;
