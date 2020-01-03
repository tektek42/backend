module.exports = () => ({
  uri: process.env.MONGO_URI,
  port: process.env.PORT,
  salt: parseInt(process.env.SALT, 10)
});
