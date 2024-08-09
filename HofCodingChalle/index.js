/* 
//
The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
2 seconds before reversing the string. The reversed string should then be printed as output.
*/

// The input string
let input = "Hello, World!";

// Function to reverse the string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Delay of 2 seconds (2000 milliseconds) before reversing the string
setTimeout(() => {
    let reversed = reverseString(input);
    console.log("Reversed string:", reversed);
}, 2000);


/* 
The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
variable so can be modified. The program displays a message every second indicating the time remaining
until the random number is generated and then outputs the generated number.
*/

// Set the delay time (in milliseconds)
let delayTime = 3000; // 3 seconds

// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Generates a number between 1 and 100
}

// Countdown function to display remaining time
function countdown(seconds) {
    let intervalId = setInterval(() => {
        console.log(`Time remaining: ${seconds} seconds`);
        seconds--;

        if (seconds < 0) {
            clearInterval(intervalId); // Stop the countdown
            let randomNumber = generateRandomNumber();
            console.log("Random Number:", randomNumber); // Output the generated number
        }
    }, 1000); // Interval of 1 second
}

// Start the countdown and generate the random number after the delay
countdown(delayTime / 1000);


/* 
Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new object with the converted prices in Rupees.
*/
// Original list of items with prices in USD
const itemsInUSD = {
    "Apple": 1,
    "Banana": 0.5,
    "Orange": 0.75,
    "Mango": 1.5
};

// Exchange rate (1 USD = 80 INR)
const exchangeRate = 80;

// Function to convert prices from USD to INR
function convertPricesToINR(items, rate) {
    return Object.fromEntries(
        Object.entries(items).map(([item, price]) => [item, price * rate])
    );
}

// Convert the prices to INR
const itemsInINR = convertPricesToINR(itemsInUSD, exchangeRate);

// Display the converted prices
console.log("Prices in INR:", itemsInINR);


/* 
Write a program that takes a list of books, including their authors and publication years as input. The program
should then filter out all books that were published before 2010 and create a new array with the remaining
books, but with their author names capitalized.
*/

// List of books with their authors and publication years
const books = [
    { title: "Book One", author: "John Doe", year: 2005 },
    { title: "Book Two", author: "Jane Smith", year: 2012 },
    { title: "Book Three", author: "Emily Johnson", year: 2008 },
    { title: "Book Four", author: "Michael Brown", year: 2015 }
];

// Function to capitalize author names
function capitalizeAuthorName(name) {
    return name.split(' ')
               .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
               .join(' ');
}

// Filter and transform books
const filteredBooks = books
    .filter(book => book.year >= 2010) // Filter books published after 2010
    .map(book => ({
        ...book,
        author: capitalizeAuthorName(book.author) // Capitalize the author's name
    }));

// Display the filtered and transformed books
console.log("Books published after 2010 with capitalized authors:", filteredBooks);


/* 

Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
Print a message indicating if the input matches the conditions or not.

*/

// Function to validate the URL
function isValidURL(url) {
    // Regular expression to match valid URLs
    const urlPattern = /^(https?:\/\/)[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=%]+(\.[a-zA-Z]+)$/;

    // Test the URL against the regex pattern
    return urlPattern.test(url);
}

// Example URLs to test
const urls = [
    "http://example.com",
    "https://www.example.com",
    "https://sub-domain.example.co.in",
    "ftp://invalid-url.com",
    "https://example", // Invalid: no dot after domain
    "http://example.123", // Invalid: domain extension should have letters
    "http://.com", // Invalid: missing domain name
    "https://example!.com" // Invalid: invalid character "!" in the domain name
];

// Validate each URL and print the result
urls.forEach(url => {
    if (isValidURL(url)) {
        console.log(`${url} is a valid URL.`);
    } else {
        console.log(`${url} is NOT a valid URL.`);
    }
});


/* 
As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
that do not follow this format or contain invalid characters. The program should provide clear output messages
indicating whether each input is a valid LinkedIn profile URL or not.
*/

// Function to validate LinkedIn profile URLs
function isValidLinkedInURL(url) {
    // Regular expression to match valid LinkedIn profile URLs
    const linkedinPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;

    // Test the URL against the regex pattern
    return linkedinPattern.test(url);
}

// Example LinkedIn URLs to test
const linkedinUrls = [
    "https://www.linkedin.com/in/johndoe123",
    "https://www.linkedin.com/in/jane-doe_45",
    "https://www.linkedin.com/in/abc", // Invalid: less than 5 characters
    "https://www.linkedin.com/in/username_with_invalid_char$", // Invalid: contains invalid character $
    "https://www.linkedin.com/in/this-username-is-way-too-long-to-be-valid-in-linkedin-profiles", // Invalid: more than 30 characters
    "http://www.linkedin.com/in/johndoe123", // Invalid: doesn't start with https
    "https://www.linkedin.com/in/johndoe123!" // Invalid: ends with invalid character
];

// Validate each LinkedIn URL and print the result
linkedinUrls.forEach(url => {
    if (isValidLinkedInURL(url)) {
        console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
        console.log(`${url} is NOT a valid LinkedIn profile URL.`);
    }
});
