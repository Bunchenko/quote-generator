import {QuotesApi} from './quotesAPI.js';


let button = document.querySelector('.generator');
let quoteContainer = document.querySelector('.quote');
let quoteText = document.querySelector('.quote-text');
let quoteAuthor = document.querySelector('.quote-author');
let loadingIndicator = document.querySelector('.loading-indicator');
let body = document.querySelector('body');
// let showLoadingIndicator = true;
let quotesCollection = [];

function random(highestNumber) {
    return Math.floor(Math.random() * ( highestNumber + 1))
}


function generateQuote() {
    const {text, author} = quotesCollection[random(quotesCollection.length)];
            quoteText.textContent = text;
            quoteAuthor.textContent = author === null ? `© Somebody wise...` : `© ${author}`;
}

function changeBodyBackground() {
    body.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

quoteContainer.style.display = 'none';
loadingIndicator.style.display = 'block';


QuotesApi.getAllQuotes()
        .then((data) => {
            // showLoadingIndicator = false;
            quoteContainer.style.display = 'block';
            loadingIndicator.style.display = 'none';
            quotesCollection = data;
            // console.log(data)
        })
        .then(() => {
            generateQuote();
        })


button.addEventListener('click', generateQuote);
button.addEventListener('click', changeBodyBackground);

