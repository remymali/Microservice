const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}
//console.log("Loaded environment variables:", process.env);
//console.log("PORT:", process.env.PORT);
//console.log("APP_SECRET:", process.env.APP_SECRET);
module.exports = {
  PORT: process.env.PORT,   
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
  MSG_QUEUE_URL: process.env.MSG_QUEUE_URL,  
  EXCHANGE_NAME:'ONLINE_STORE',
  SHOPPING_BINDING_KEY:'SHOPPING_SERVICE',
  CUSTOMER_BINDING_KEY:'CUSTOMER_SERVICE',
  QUEUE_NAME:'SHOPPING_QUEUE'
};