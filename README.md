# Team-Profile-Generator


[![License MIT](https://img.shields.io/apm/l/pack)](https://spdx.org/licenses/MIT.html)
 ## Table of Contents
1. [Description](#description)

2. [Acceptance Criteria](#Acceptance-Criteria)

3. [Installation](#installation)

4. [Usage](#usage)

5. [Contributions](#contributions)

6. [Questions](#questions)


## Description

I have built an a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person based on user input from the command line in Terminal/Bash. The application uses the inquirer NPM & Jest packages and was built using JavaScript and node.js.

## Acceptance-Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

Directory Structure:

```md
__tests__/			// jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
dist/               // rendered output (HTML) and CSS style sheet
lib/				// classes
src/				// template helper code
index.js			// runs the application
```





## Installation

Make sure to have node.js installed before running application.
if not please go here https://nodejs.org/en/download/package-manager/

Once Node.js is installed please enter the following:
```
npm install

npm init

npm i inquirer

npm i jest

```

## Usage

The application will be invoked by using the following command:

```bash
node index.js
```
The test using jest can be invoked by using the following command:

```bash
npm run test
```

Walkthrough video: 

 



Screen Shot of Generated Readme:

![ScreenShot](IMG/application-readme-generator-screenshot.png "Generated team.html")

 
## Contributions
---

Ben Durham (https://github.com/bdurham227)
<br>
Takuya Matsumoto (https://github.com/TakuyaMats)
<br>
Patrick Walker (https://github.com/pat31477)
<br>

## Questions
 ---
 If you have any questions about this application please reach out 
 using the contact information below:

Github: https://github.com/jbarbss

Email: Jbarbanel@gmail.com


## License
 
[![License MIT](https://img.shields.io/apm/l/pack)](https://spdx.org/licenses/MIT.html)

   https://opensource.org/licenses/MIT

Licensed under the MIT License

Copyright © [2021] [Jason Barbanel]
    
 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE


