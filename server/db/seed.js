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
  },
  {
    "refName": "TRX",  
    "name": "TRON",  
    "logo": "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/TRX.svg",  
    "quantity": "1",  
    "price": "0.05",  
    "dateTime": new Date (),  
    "type": "BUY"
  },
  {
    "refName": "ETH",  
    "name": "Ethereum",  
    "logo": "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/eth.svg",  
    "quantity": "2",  
    "price": "928.67",  
    "dateTime": new Date (),  
    "type": "BUY"
  },
  {
    "refName": "SHIB",  "name": "Shiba Inu",  
    "logo": "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/SHIB.png",  
    "quantity": "3",  
    "price": "0.05",  
    "dateTime": new Date (),  
    "type": "BUY"
  }
 ])