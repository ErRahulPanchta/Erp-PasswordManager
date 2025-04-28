// server.js
const express = require('express');
const dotenv = require('dotenv');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const url = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

const client = new MongoClient(url);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect once and reuse
async function connectDB() {
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB', err);
    process.exit(1);
  }
}
connectDB();

// Routes
app.get('/', async (req, res) => {
  try {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const passwords = await collection.find({}).toArray();
    res.json(passwords);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/', async (req, res) => {
  try {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const result = await collection.insertOne(req.body);
    res.json({ success: true, result });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/', async (req, res) => {
  try {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const result = await collection.deleteOne({ id: req.body.id });
    res.json({ success: true, result });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
