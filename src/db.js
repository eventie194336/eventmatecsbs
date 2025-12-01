// src/db.js
const mongoose = require('mongoose');

async function startMemoryServerAndConnect() {
  const { MongoMemoryServer } = require('mongodb-memory-server');
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  console.log('Started in-memory MongoDB at', uri);
  await mongoose.connect(uri);
  console.log('Connected to in-memory MongoDB');
}

async function connectDB(uri) {
  if (!uri || uri === 'memory') {
    // use in-memory server for quick development
    return startMemoryServerAndConnect();
  }

  try {
    console.log('Attempting MongoDB connect to:', uri);
    // NOTE: do NOT pass legacy options like useNewUrlParser or useUnifiedTopology here.
    // mongoose.connect will use appropriate defaults for current driver versions.
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err && err.message ? err.message : err);
    process.exit(1);
  }
}

module.exports = connectDB;
