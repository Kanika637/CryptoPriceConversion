**Develop a server-side application to convert prices of cryptocurrencies.**


1. Get the names of all cryptocurrencies and store it in a MongoDB database. You can use Coingecko’s APIs to get the list of all cryptocurrencies: https://www.coingecko.com/api/documentation.
2. Write a background job that keeps this list updated every 1 hour.


1. Build an API that takes the Coingecko IDs of 2 cryptocurrencies and returns the price of one currency in another on a particular date.
2. Schema of the API:
    1. Request example:
        
        ```jsx
        {
        	“fromCurrency”: “bitcoin”,
        	“toCurrency”: “ethereum”,
        	“date”: “12-01-2023”
        }
        ```
        
3. Response should return the price of Bitcoin in terms of Ethereum on 12th January 2023.
4. You can make use of any of the Coingecko APIs from the documentation given above.


