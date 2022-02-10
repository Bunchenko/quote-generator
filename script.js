import {QuotesApi} from './quotesAPI.js';


let button = document.querySelector('.generator');
let quoteContainer = document.querySelector('.quote');
let quoteText = document.querySelector('.quote-text');
let quoteAuthor = document.querySelector('.quote-author');
let loadingIndicator = document.querySelector('.loading-indicator');
// let showLoadingIndicator = true;
let quotesCollection = [];

function random() {
    return Math.floor(Math.random() * (quotesCollection.length + 1))
}


function generateQuote() {
    const {text, author} = quotesCollection[random()];
            quoteText.textContent = text;
            quoteAuthor.textContent = author === null ? `© Somebody wise...` : `© ${author}`;
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

