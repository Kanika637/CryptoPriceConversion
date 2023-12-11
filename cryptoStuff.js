const axios = require('axios');
const { client } = require('./db');

// getting the list of all the cryptocurrencies from the api
const getListOfCryptocurrencies = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
    return response.data;
    
  } catch (error) {
    console.error('Error in fetching cryptocurrency list:', error.message);
    throw error;
  }
};

// saving the names of all into the database
const saveCryptoListToMongoDB = async (cryptoList) => {
  const db = client.db('sample-db'); 
  const collection = db.collection('cryptocurrencies');

  try {
    const result = await collection.insertMany(cryptoList);
    console.log(`${result.insertedCount} cryptocurrencies inserted into MongoDB`);
  } catch (error) {
    console.error('Error inserting cryptocurrencies into MongoDB:', error.message);
    throw error;
  }
};

// exporting the functions
module.exports = { getListOfCryptocurrencies, saveCryptoListToMongoDB };
