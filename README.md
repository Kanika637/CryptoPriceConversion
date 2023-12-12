# Crypto Price Conversion

## API Endpoints

1. For fetching the name of all the cryptocurrencies and saving it to the MongoDB database, this end point has been used:

![image](https://github.com/Kanika637/CryptoPriceConversion/assets/84350895/51ad693a-e987-4c5a-a583-f401b419b574)

&nbsp;

2. I have used this particular endpoint of the CoinGecko API for calculating the price.

<img width="1034" alt="Screenshot 2023-12-11 at 9 07 06 PM" src="https://github.com/Kanika637/CryptoPriceConversion/assets/84350895/ccbd5952-8670-4176-9aa1-ffd898670605">

&nbsp;

2. http://localhost:3001/getPrice?fromCurrency=bitcoin&toCurrency=usd&date=12-01-2023

This API which is running on localhost:3001, will give you the price of one currency for another currency on a particular date, where:

```jsx
{
	“fromCurrency”: “bitcoin”,
	“toCurrency”: “usd”,
	“date”: “12-01-2023”
}
```

**Output**

```jsx
{
    "priceOnDate": 37730.6450303125
}
```


<img width="1059" alt="Screenshot 2023-12-11 at 9 03 58 PM" src="https://github.com/Kanika637/CryptoPriceConversion/assets/84350895/7a325528-8591-40c6-bb1b-866a74585fef">

## Screenshots

&nbsp;
![image](https://github.com/Kanika637/CryptoPriceConversion/assets/84350895/70b6c405-eed9-4009-badc-0682158a268d)

![image](https://github.com/Kanika637/CryptoPriceConversion/assets/84350895/254d7b80-c0f9-4692-9196-d49d7ef1fd0e)

![image](https://github.com/Kanika637/CryptoPriceConversion/assets/84350895/fb210b5b-cc5d-405c-91d3-2d903f6076c2)


**Develop a server-side application to convert prices of cryptocurrencies.**


1. Get the names of all cryptocurrencies and store them in a MongoDB database. You can use Coingecko’s APIs to get the list of all cryptocurrencies: https://www.coingecko.com/api/documentation.
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


