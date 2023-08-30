module.exports = {
    // MongoDB configuration
    mongo: {
      uri: 'mongodb://localhost:27017/businessloan',
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: true
      }
    },
    
    // Server configuration
    server: {
      port: process.env.PORT || 3000
    }
    
    // Other configuration settings
  };
  