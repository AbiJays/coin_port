use coinPortfolio;
db.dropDatabase();

db.transactions.insertMany([
  {
    "refName": "BTC",
    "name": "Bitcoin",
    "logo": "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg",
    "quantity": 0.5,
    "price": 16593.53,
    "dateTime": new Date (),
    "type": "BUY"
  }
 ])