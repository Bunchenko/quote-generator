
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

    static async getRussianQuotes() {
      const russianQuotes = 'quotes.json';
      const result = await fetch(russianQuotes);
      const data = await result.json();
      return data
    }

    static async getBelarusianQuotes() {
      const belarusianQuotes = 'belarusian_quotes.json';
      const result = await fetch(belarusianQuotes);
      const data = await result.json();
      return data
    }
}