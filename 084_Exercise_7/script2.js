/** 
 * Create a javascript program capable of generating a password 
 * which contains atleast one lowercase, one uppercase and one 
 * special characters. Create a password class to achieve the same.
 */ 

let password = "";
let pwd = new Set();
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
        const container = new Array();
        console.log(`fetchLetters()::source = [ ${source} ]`);
        // console.log(`fetchLetters()::${num}`);
        for (let i = 0; i < num; i++) {
                let random = randomNumber(source.length - 1);
                console.log(`fetchLetters()::random num = ${random}`);
                const element = source[random];
                // console.log(`fetchLetters()::${element}`);
                container.push(element);
        }
        return container;
}

// let defaultFetchChar = (source, num)

// phase 2
let generatePassword = (remaining_pwd_len) => {
        console.log(`generatePassword()::remaining_pwd_len/total = ${remaining_pwd_len}`);
        --step;
        console.log(`generatePassword()::step=${step}`);
        // console.log(`generatePassword()::total: ${num}`);
        console.log(`generatePassword()::remaining_pwd_len/total = ${remaining_pwd_len - step}`);
        let random = randomNumber(remaining_pwd_len - step);
        console.log(`generatePassword()::random num: ${random}`);
        
        // thread 1
        // console.log(`generatePassword()::BEFORE::pwd_len = ${pwd_len}`);
        pwd_len += random;
        // console.log(`generatePassword()::AFTER::pwd_len = ${pwd_len}`);
        
        // console.log(`generatePassword()::BEFORE::remaining_pwd_len = ${remaining_pwd_len}`);
        remaining_pwd_len -= random;
        // console.log(`generatePassword()::AFTER::remaining_pwd_len = ${remaining_pwd_len}`);
        
        // thread 2
        const generated_special_chars = fetchLetters(specialCharacters, remaining_pwd_len > 4 ? random : 1);
        // const generated_special_chars = fetchLetters(specialCharacters, random);
        console.log(`generatePassword()::generated_special_chars = [ ${generated_special_chars} ]`);
        
        // if (remaining_pwd_len > 3) {
                --step;
                console.log(`generatePassword()::step=${step}`);
                console.log(`generatePassword()::total: ${remaining_pwd_len}`);
                let tempRandom = randomNumber(remaining_pwd_len - step);
                console.log(`generatePassword()::tempRandom num: ${tempRandom}`);
        
                pwd_len += tempRandom;
                remaining_pwd_len -= tempRandom;

                // const generated_numbers = fetchLetters(numbers, tempRandom);
                const generated_numbers = fetchLetters(numbers, remaining_pwd_len > 3 ? tempRandom : 1);
                console.log(`generatePassword()::generated_numbers = [ ${generated_numbers} ]`);
        // }
        /* else if (remaining_pwd_len === 3) {
                --step;
                console.log(`generatePassword()::reached`);
                const generated_numbers = fetchLetters(numbers, 1);
                console.log(`generatePassword()::generated_numbers = [ ${generated_numbers} ]`);
        } */
}
generatePassword(remaining_pwd_len);
