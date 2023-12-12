const express = require('express');
const { connectToMongoDB } = require('./db');
const { getListOfCryptocurrencies, saveCryptoListToMongoDB } = require('./cryptoStuff');

const app = express();
const PORT = 3000;

// Function to fetch and save the crypto list
const fetchAndSaveCryptoList = async () => {
  let client;

  try {
    // Connect to the database
    client = await connectToMongoDB();
    console.log('Connected to MongoDB');

    // get and save crypto list
    const cryptoList = await getListOfCryptocurrencies();
    console.log('Fetched cryptocurrencies list:', cryptoList);

    await saveCryptoListToMongoDB(cryptoList);
    console.log('Data saved successfully.');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    // Closing the MongoDB connection 
    if (client) {
      await client.close();
      console.log('MongoDB connection closed');
    }
  }
};


fetchAndSaveCryptoList();

// scheduling to run the job in every 1 hr
const updateInterval = 3600000;
setInterval(fetchAndSaveCryptoList, updateInterval);

// an additional route to tell that a background job is running

// app.get('/fetchAndSaveCryptoList', (req, res) => {
//   res.json({ message: 'Background job scheduled to update cryptocurrency list every 1 hour' });
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
