// first char doesn't randomising

/** 
 * Create a javascript program capable of generating a password 
 * which contains atleast one lowercase, one uppercase and one 
 * special characters. Create a password class to achieve the same.
 */ 

let password = "";
let pwd = new Set();
let pwd_string = [];
let pwd_len = 0;
let remaining_pwd_len = 8;
let step = 4;
// first element is empty bcz we ignore first element.
const specialCharacters = ['', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '"', '\'', '<', '>', ',', '.', '?', '/'];
const numbers = ['', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const uppercaseLetters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseLetters = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

/* #STRATAGY
    1. choose random number from-to (ex. for specialCharacter 1-5, for lowercase 1-5)
    2.i. add generated number + pwd_len (ex. let specialCharacter generated random num=2 then 0(pwd_len) + 2 = 2(pwd_len)) &&
         subtract remaining_pwd_len - generated num   
            => NOTE: if specialCharacter's random num=5 then 1=>num, 1=>uL, 1=>lL
    2.ii. loop for random num & for random num times respective stuff will be fetched
            (let random num=2 for specialCharacter, then, 2 specialCharacter will be fetched)
*/

// phase 1
let randomNumber = (num) => {
        let random = Math.floor((Math.random() * (num)) + 1);
        return random;
};

let fetchLetters = (source, num) => {
        // const container = new Array();
        console.log(`fetchLetters()::source = [ ${source} ]`);
        // console.log(`fetchLetters()::${num}`);
        for (let i = 0; i < num; i++) {
                let random = randomNumber(source.length - 1);
                console.log(`fetchLetters()::random num = ${random}`);
                const element = source[random];
                // console.log(`fetchLetters()::${element}`);
                // container.push(element);
                // pwd_string += element;
                pwd_string.push(element);
        }
        // return container;
        return pwd_string;
}

let commonProcedure = (source) => {
        // while (step === 0) {
                console.log(`commonProcedure()::remaining_pwd_len/total = ${remaining_pwd_len}`);
                step = step - 1;
                console.log(`commonProcedure()::step=${step}`);
                console.log(`commonProcedure()::remaining_pwd_len = ${remaining_pwd_len - step}`);
                let tempRandom = step>0 ? randomNumber(remaining_pwd_len - step) : remaining_pwd_len;
                // let tempRandom = randomNumber(remaining_pwd_len - step);
                console.log(`commonProcedure()::tempRandom num: ${tempRandom}`);
                
                // const generated_numbers = fetchLetters(numbers, tempRandom);
                const generated_letters = fetchLetters(source, remaining_pwd_len > (step+1) ? tempRandom : 1);
                console.log(`commonProcedure()::generated_letters = [ ${generated_letters} ]`);
                
                console.log(`commonProcedure()::BEFORE::pwd_len = ${pwd_len}`);
                pwd_len += tempRandom;
                console.log(`commonProcedure()::AFTER::pwd_len = ${pwd_len}`);
                
                console.log(`commonProcedure()::BEFORE::remaining_pwd_len = ${remaining_pwd_len}`);
                remaining_pwd_len -= tempRandom;
                console.log(`commonProcedure()::AFTER::remaining_pwd_len = ${remaining_pwd_len}`);

                // return generated_letters;
        // }

};

function randomizeString(charArray) {
        // Convert the string to an array of characters
        // var charArray = inputString.split('');
      
        // Shuffle the array
        for (var i = charArray.length - 1; i > 0; i--) {
        //   var j = Math.floor(Math.random() * (i + 1));
          var j = randomNumber(charArray.length);
          var temp = charArray[i];
          charArray[i] = charArray[j];
          charArray[j] = temp;
        }
      
        // Join the array back into a string
        var randomizedString = charArray.join('');
      
        return randomizedString;
      }

// phase 2
let generatePassword = () => {
        const generated_lowercases = commonProcedure(lowercaseLetters);
        const generated_uppercases = commonProcedure(uppercaseLetters);
        const generated_numbers = commonProcedure(numbers);
        const generated_special_chars = commonProcedure(specialCharacters);

        // fixed-order = lowercaseLetters => uppercaseLetters => numbers => specialCharacters
        console.log(pwd_string);
        console.log(pwd_string.length);
        
        // randomizing order
        console.log(randomizeString(pwd_string));
        console.log(randomizeString(pwd_string).length);
}
generatePassword();
