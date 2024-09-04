/*
Pseudocode:

Step 1: Create a string for user that says: You have received this message because you have been chosen to open an important vault. Here is the secret combination: 
Step 1a: console.log(vaultMessage);
Step 2: Assign a first variable containing the result of a calculation using an arithmetic operator to equal the first code in the combination.
Step 2a: Calculation using arithmetic operator: 25 - 15
Step 3: Assign a second variable containing the result of a calculation using an arithmetic operator to equal the second code in the combination.
Step 3a: Calculation using arithmetic operator: 10 * 4
Step 4: Assign the last variable containing the result of a calculation using an arithmetic operator to equal the last code in the combination.
Step 4a: Calculation using arithmetic operator: 50 - 11
Step 5: Add comments throughout the code to explain each step
Step 6: Make a dialog box that displays the vault codes and the text with a popup dialog
*/

//String created with the variable of vaultMessage that displays "You have received this message because you have been chosen to open an important vault. Here is the secret combination: ";

const vaultMessage = "You have received this message because you have been chosen to open an important vault. Here is the secret combination: ";

// Log string vaultMessage

console.log(vaultMessage);

// Created variable for 1st code in combination

const codeOne = (25 - 15);

// Created variable for 2nd code in combination

const codeTwo = (10 * 4);

// Created variable for 3rd code in combination

const codeThree = (55 - 11);

// Made an alert to create a dialog box displaying the codes

alert(codeOne + " - " + codeTwo + " - " + codeThree);