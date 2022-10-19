
//------------------83/100----------------//


function passCrusher(input) {
  let encriptedWord = input.shift().split("");
  let command = input.shift();

  while (command !== "Decode") {
    let [key, valueOne, valueTwo] = command.split("|");

    switch (key) {
      case "Move":
        let toMove = encriptedWord.splice(0, valueOne);
        for (let i = 0; i < toMove.length; i++) {
          encriptedWord.push(toMove[i]);
        }
        break;
      case "Insert":
        encriptedWord.splice(valueOne, 0, valueTwo);

        break;
      case "ChangeAll":
        for (let i = 0; i < encriptedWord.length; i++) {
          if (encriptedWord[i] === valueOne) {
            encriptedWord[i] = valueTwo;
          }
        }
        break;
    }
    command = input.shift();
  }

  console.log(`The decrypted message is: ${encriptedWord.join("")}`);
}

passCrusher(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
passCrusher(["owyouh", "Move|2", "Move|3", "Insert|3|are", "Insert|9|?", "Decode"]);


// Problem 1 - The Imitation Game
// Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2525#0.
 
// During World War 2, you are a mathematician who has joined the cryptography team to decipher the enemy's enigma code. Your job is to create a program to crack the codes.

// On the first line of the input, you will receive the encrypted message.After that, until the "Decode" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the concealed message to interpret it and reveal its true content.There are several types of instructions, split by '|'

// • "Move {number of letters}":
// o Moves the first n letters to the back of the string
// • "Insert {index} {value}":
// o Inserts the given value before the given index in the string
// • "ChangeAll {substring} {replacement}":
// o Changes all occurrences of the given substring with the replacement text
// Input / Constraints
// • On the first line, you will receive a string with a message.
// • On the following lines, you will be receiving commands, split by '|'.
//   Output
// • After the "Decode" command is received, print this message:
// "The decrypted message is: {message}"