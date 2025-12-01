// src/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./db'); // your existing db.js should export async function
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

(async () => {
  // Connect to DB first
  await connectDB(process.env.MONGODB_URI || 'memory');

  // Basic root
  app.get('/', (req, res) => res.send('API running'));

  // Mount auth routes
  app.use('/api/auth', authRoutes);

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log('Server running on port', PORT));
})();
