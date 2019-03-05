console.log("Hello");


function transl33t(originalString){
    const leetDictionary = {
        // Keys are strings, just like in python
        // But in JS, quotes are optional 
        E: "3",
        G: "6",
        A: "4",
        I: "1",
        O: "0", // Put zero in quotes because it's falsey value
        S: "5",
        T: "7"
    };

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

const addressBook = {
    DigitalCrafts: {
        phone: "404-123-1234",
        address: "3423 Piedmont Rd",
        city: "Atlanta"
    },
    "Chris Aquino": {
        phone: "404-456-1234",
        address: "3400 Piedmont Rd",
        city: "Atlanta"
    },
    "Ashish Garg": {
        phone: "404-222-2222",
        address: "1234 10th Street",
        city: "Atlanta"
    },
    "Jon Snow": {
        phone: "000-000-0000",
        address: "1 Winterfell Lane",
        city: "GoT"
    }
}

// Used to access information within a Dictionary
addressBook.DigitalCrafts.address;
addressBook["Chris Aquino"].phone;
addressBook["Chris Aquino"]["phone"];

// Used to get the keys of a dictionary in the form of an array of strings
Object.keys(addressBook);
Object.keys(addressBook.DigitalCrafts);

// write a function that accepts an address book and prints all of the entries
function printBook(book){
    // Array with the keys (person name)
    let personKeys = Object.keys(book);
    
    // Loop goes through each person
    for(let i = 0; i < personKeys.length; i++) {
        console.log(personKeys[i]);
        console.log("Phone: " + book[personKeys[i]].phone);
        console.log("Address: " + book[personKeys[i]].address);
        console.log("City: " + book[personKeys[i]].city);
    }
}

// write a second function that accepts an address book and a key name, and prints only that piece of contact info
function printBookPerson(book, key){
    console.log(key);
    console.log("Phone: " + book[key].phone);
    console.log("Address: " + book[key].address);
    console.log("City: " + book[key].city);
}