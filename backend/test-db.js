const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI || 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/ai-interview?retryWrites=true&w=majority';

console.log('Testing MongoDB connection using URI:', uri.replace(/(:).*(@)/, ':*****@'));

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ Connected to MongoDB');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Connection error:', err);
    process.exit(1);
  });
