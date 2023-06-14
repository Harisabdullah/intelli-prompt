# Intelli Prompt


Intelli Prompt is a Node.js package that provides an interactive command-line interface with real-time suggestions. It allows you to prompt the user for input while providing autocomplete suggestions based on the options you provide.


## Technologies Used


- JavaScript

- Node.js
- npm packages:

    - `readline` for handling user input in the command line

    - `keypress` for capturing keypress events


## Installation

You can install the Intelli Prompt package via npm. Open your terminal and run the following command:
```shell
  npm install intelli-prompt
```

## Usage

- Import the package into your project: 
``` javascript
const intelliPrompt = require('intelli-prompt');
```
- Invoke the intelliPrompt function, passing the required parameters: prompt, suggestions, and numberOfSuggestions.
  - prompt (String): The prompt to be displayed to the user. 
  - suggestions (Array of Strings): An array of options that will be used for real-time suggestions. 
  - numberOfSuggestions (Number): The maximum number of suggestions to be displayed.
```javascript
// Using async/await:
    const response = await intelliPrompt('Enter your favorite programming language: ', ['JavaScript', 'Python', 'Java', 'C++'], 3);
    console.log('You entered:', response);
    
// Using promises:
intelliPrompt('Enter your favorite programming language: ', ['JavaScript', 'Python', 'Java', 'C++'], 3)
  .then((response) => {
    console.log('You entered:', response);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
```

When running the above code, the user will see the prompt "Enter your favorite programming language: " and can start typing their input. As they type, the CLI will provide real-time suggestions based on the options array. The user can select an option from the suggestions or provide their own input.




