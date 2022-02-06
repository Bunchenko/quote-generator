import myQuotes from './myQuotes.js';

const API_URL = 'https://type.fit/api/quotes';
export class QuotesApi {
    // this method returns the promise of array of objects
    static getAllQuotes() {
        return fetch(API_URL)
            .then((response) => {
            return response.json();
          })
          .then((data) => {
            return data;
          })
          .catch(error => {
              console.log(error);
          })
    }

    static getMyQuotes() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(myQuotes)
            }, 3000)
        }).then((data) => {
            return data
        })
    }
}