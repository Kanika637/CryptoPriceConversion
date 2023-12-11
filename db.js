const { MongoClient } = require('mongodb');

// Replace <password> with the actual password for the user
const atlasUri = 'mongodb+srv://kanikagola26:l59yb7dK8L3syVR2@cluster0.5upwyg8.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(atlasUri, { useNewUrlParser: true, useUnifiedTopology: true });

const connectToMongoDB = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error.message);
    throw error;
  }
};

module.exports = { connectToMongoDB, client };
