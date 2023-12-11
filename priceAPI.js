const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3001;


const COINGECKO_API_BASE_URL = 'https://api.coingecko.com/api/v3';

// Endpoint to get the historical price on a particular date
app.get('/getPriceOnDate', async (req, res) => {
  try {
    const { fromCurrency, toCurrency, date } = req.query;

    // Converting date to timestamp
    const timestamp = Math.floor(new Date(date).getTime() / 1000);

    // Fetching historical price data
    const response = await axios.get(
      `${COINGECKO_API_BASE_URL}/coins/${fromCurrency}/market_chart/range`,
      {
        params: {
          vs_currency: toCurrency,
          from: timestamp,
          to: timestamp + 86400, // Adding 24 hours to get a single day's data
        },
      }
    );

    // Extracting the price from the response
    const prices = response.data.prices;
    const priceOnDate = prices.length > 0 ? prices[0][1] : null;

    // Responding to the client
    res.json({ priceOnDate });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Price API is running on port ${PORT}`);
});
