import {QuotesApi} from './quotesAPI.js';


let button = document.querySelector('.generator');
let quoteContainer = document.querySelector('.quote');
let quoteText = document.querySelector('.quote-text');
let quoteAuthor = document.querySelector('.quote-author');
let loadingIndicator = document.querySelector('.loading-indicator');
let body = document.querySelector('body');
let langButtonsContainer = document.querySelector('.lang-change');
let langButtons = document.querySelectorAll('.lang-change-button');

let showLoadingIndicator;
let quotesCollection = [];
let russianQuotesCollection = [];
let belarusianQuotesCollection = [];


function random(highestNumber) {
    return Math.floor(Math.random() * ( highestNumber + 1))
}

function toggleActiveButton(event) {
    if (event.target.classList.contains('lang-change-button')) {
        langButtons.forEach(button => button.classList.remove('active'));
        event.target.classList.add('active');
    }
}

function changeBodyBackground() {
    body.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}


function showLoading() {
    showLoadingIndicator = true;
    quoteContainer.style.display = 'none';
    loadingIndicator.style.display = 'block';
}

function hideLoading() {
    showLoadingIndicator = false;
    quoteContainer.style.display = 'block';
    loadingIndicator.style.display = 'none';
}


function generateQuote(source) {
    let {text, author} = source[random(source.length)];
            quoteText.textContent = text;
            quoteAuthor.textContent = author === null ? `© Somebody wise...` : `© ${author}`;
}



showLoading();


QuotesApi.getAllQuotes()
        .then((data) => {
            hideLoading();
            quotesCollection = data;
        })
        .then(() => {
            generateQuote(quotesCollection);
        })
        .catch((error) =>{
            console.error(error)
        })

QuotesApi.getBelarusianQuotes()
        .then((data) => {
            hideLoading();
            belarusianQuotesCollection = data;

        })
        // .then(() => {
        //     generateQuote(belarusianQuotesCollection);
        // })
        .catch((error) =>{
            console.error(error)
        })

QuotesApi.getRussianQuotes()
        .then((data) => {
            hideLoading();
            russianQuotesCollection = data;

        })
        // .then(() => {
        //     generateQuote(russianQuotesCollection)
        // })
        .catch((error) =>{
            console.error(error)
        })


button.addEventListener('click', () => generateQuote(quotesCollection));
button.addEventListener('click', changeBodyBackground);

langButtonsContainer.addEventListener('click', toggleActiveButton);
