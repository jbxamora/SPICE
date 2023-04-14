const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://username:FakePassword@spicecluster.b7zvgzp.mongodb.net/test', 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
