console.log("Hello");

const leetDictionary = {
    // Keys are strings, just like in python
    // But in JS, quotes are optional 
    A: 4,
    E: 3,
    G: 6,
    I: 1,
    O: "0", // Put zero in quotes because it's falsey value
    S: 5,
    T: 7
};

function transl33t(originalString){
    let result = "";

    // loop through each letter in originalString and check leetDictionary
    for(let i = 0; i < originalString.length; i++) {
        let theLetter = originalString[i].toUpperCase();
        if(leetDictionary[theLetter]) {
            result += leetDictionary[theLetter];
        }
        else {
            result += theLetter;
        }
    }

    return result;
}