const promptSense = require('./prompt-sense');

const prompt = 'Enter a city name: ';
const suggestions = ['New York', 'New Delhi', 'New Jersey', 'New Mexico', 'New Orleans', 'New Hampshire', 'New Haven', 'Newark', 'Newport', 'New Britain'];;
const numberOfSuggestions = 10;

promptSense(prompt, suggestions, numberOfSuggestions).then((result) => {
  console.log(`You entered: ${result}`);
  process.exit();
});