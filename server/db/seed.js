use coinPortfolio;
db.dropDatabase();

db.transactions.insertMany([
  {
    "refName": "ETH",
    "name": "Ethereum ",
    "logo": "TBC'",
    "quantity": 14,
    "price": 47,
    "dateTime": "31/01/2022 23:42:12",
    "type": "SELL"
  },
  {
    "refName": "BTC",
    "name": "Bitcoin",
    "logo": "TBC'",
    "quantity": 22,
    "price": 29,
    "dateTime": "24/12/2021 01:23:00",
    "type": "BUY"
  },
  {
    "refName": "BCH",
    "name": "Bitcoin Cash",
    "logo": "TBC'",
    "quantity": 22,
    "price": 50,
    "dateTime": "11/05/2022 21:47:00",
    "type": "BUY"
  },
  {
    "refName": "BCH",
    "name": "Bitcoin Cash",
    "logo": "TBC'",
    "quantity": 2,
    "price": 57,
    "dateTime": "21/12/2021 04:15:48",
    "type": "BUY"
  },
  {
    "refName": "BCH",
    "name": "Bitcoin Cash",
    "logo": "TBC'",
    "quantity": 84,
    "price": 8,
    "dateTime": "18/01/2022 21:18:12",
    "type": "BUY"
  },
  {
    "refName": "ETH",
    "name": "Ethereum ",
    "logo": "TBC'",
    "quantity": 61,
    "price": 15,
    "dateTime": "03/03/2022 23:56:36",
    "type": "BUY"
  },
  {
    "refName": "ETH",
    "name": "Ethereum ",
    "logo": "TBC'",
    "quantity": 28,
    "price": 27,
    "dateTime": "05/01/2022 03:47:00",
    "type": "BUY"
  },
  {
    "refName": "ETH",
    "name": "Ethereum ",
    "logo": "TBC'",
    "quantity": 52,
    "price": 97,
    "dateTime": "21/06/2022 04:30:12",
    "type": "SELL"
  },
  {
    "refName": "BCH",
    "name": "Bitcoin Cash",
    "logo": "TBC'",
    "quantity": 91,
    "price": 90,
    "dateTime": "01/02/2022 05:27:48",
    "type": "BUY"
  },
  {
    "refName": "ETH",
    "name": "Ethereum ",
    "logo": "TBC'",
    "quantity": 11,
    "price": 82,
    "dateTime": "05/01/2022 21:03:48",
    "type": "BUY"
  },
  {
    "refName": "XRP",
    "name": "Ripple",
    "logo": "TBC'",
    "quantity": 40,
    "price": 43,
    "dateTime": "12/03/2022 16:30:12",
    "type": "BUY"
  },
  {
    "refName": "BCH",
    "name": "Bitcoin Cash",
    "logo": "TBC'",
    "quantity": 85,
    "price": 100,
    "dateTime": "17/03/2022 01:08:36",
    "type": "SELL"
  },
  {
    "refName": "ADA",
    "name": "Cardano",
    "logo": "TBC'",
    "quantity": 86,
    "price": 67,
    "dateTime": "22/03/2022 16:44:36",
    "type": "SELL"
  },
  {
    "refName": "XRP",
    "name": "Ripple",
    "logo": "TBC'",
    "quantity": 99,
    "price": 44,
    "dateTime": "17/01/2022 01:37:24",
    "type": "SELL"
  },
  {
    "refName": "BTC",
    "name": "Bitcoin",
    "logo": "TBC'",
    "quantity": 69,
    "price": 35,
    "dateTime": "10/04/2022 21:32:36",
    "type": "SELL"
  },
  {
    "refName": "ETH",
    "name": "Ethereum ",
    "logo": "TBC'",
    "quantity": 83,
    "price": 98,
    "dateTime": "25/02/2022 03:47:00",
    "type": "BUY"
  },
  {
    "refName": "BTC",
    "name": "Bitcoin",
    "logo": "TBC'",
    "quantity": 10,
    "price": 89,
    "dateTime": "29/05/2022 06:39:48",
    "type": "SELL"
  },
  {
    "refName": "BCH",
    "name": "Bitcoin Cash",
    "logo": "TBC'",
    "quantity": 28,
    "price": 59,
    "dateTime": "26/04/2022 21:47:00",
    "type": "SELL"
  },
  {
    "refName": "BTC",
    "name": "Bitcoin",
    "logo": "TBC'",
    "quantity": 91,
    "price": 43,
    "dateTime": "07/03/2022 15:47:00",
    "type": "BUY"
  },
  {
    "refName": "BTC",
    "name": "Bitcoin",
    "logo": "TBC'",
    "quantity": 54,
    "price": 21,
    "dateTime": "16/01/2022 09:03:48",
    "type": "SELL"
  },
  {
    "refName": "BCH",
    "name": "Bitcoin Cash",
    "logo": "TBC'",
    "quantity": 57,
    "price": 57,
    "dateTime": "15/04/2022 08:20:36",
    "type": "BUY"
  },
  {
    "refName": "ADA",
    "name": "Cardano",
    "logo": "TBC'",
    "quantity": 72,
    "price": 60,
    "dateTime": "25/04/2022 02:49:24",
    "type": "SELL"
  },
  {
    "refName": "XRP",
    "name": "Ripple",
    "logo": "TBC'",
    "quantity": 52,
    "price": 26,
    "dateTime": "01/06/2022 10:59:00",
    "type": "SELL"
  },
  {
    "refName": "BCH",
    "name": "Bitcoin Cash",
    "logo": "TBC'",
    "quantity": 21,
    "price": 75,
    "dateTime": "14/12/2021 05:27:48",
    "type": "BUY"
  },
  {
    "refName": "BCH",
    "name": "Bitcoin Cash",
    "logo": "TBC'",
    "quantity": 74,
    "price": 44,
    "dateTime": "18/05/2022 11:42:12",
    "type": "BUY"
  },
  {
    "refName": "ADA",
    "name": "Cardano",
    "logo": "TBC'",
    "quantity": 33,
    "price": 24,
    "dateTime": "06/04/2022 19:23:00",
    "type": "BUY"
  },
  {
    "refName": "BCH",
    "name": "Bitcoin Cash",
    "logo": "TBC'",
    "quantity": 26,
    "price": 74,
    "dateTime": "13/01/2022 01:23:00",
    "type": "SELL"
  },
  {
    "refName": "ADA",
    "name": "Cardano",
    "logo": "TBC'",
    "quantity": 29,
    "price": 80,
    "dateTime": "16/12/2021 13:51:48",
    "type": "BUY"
  },
  {
    "refName": "ETH",
    "name": "Ethereum ",
    "logo": "TBC'",
    "quantity": 41,
    "price": 7,
    "dateTime": "18/05/2022 14:35:00",
    "type": "SELL"
  },
  {
    "refName": "ADA",
    "name": "Cardano",
    "logo": "TBC'",
    "quantity": 7,
    "price": 31,
    "dateTime": "08/04/2022 18:54:12",
    "type": "SELL"
  },
  {
    "refName": "XRP",
    "name": "Ripple",
    "logo": "TBC'",
    "quantity": 60,
    "price": 70,
    "dateTime": "16/12/2021 01:23:00",
    "type": "SELL"
  },
  {
    "refName": "BCH",
    "name": "Bitcoin Cash",
    "logo": "TBC'",
    "quantity": 88,
    "price": 21,
    "dateTime": "24/02/2022 14:06:12",
    "type": "BUY"
  },
  {
    "refName": "XRP",
    "name": "Ripple",
    "logo": "TBC'",
    "quantity": 57,
    "price": 19,
    "dateTime": "18/02/2022 09:18:12",
    "type": "SELL"
  },
  {
    "refName": "ADA",
    "name": "Cardano",
    "logo": "TBC'",
    "quantity": 1,
    "price": 46,
    "dateTime": "21/05/2022 22:30:12",
    "type": "SELL"
  },
  {
    "refName": "ADA",
    "name": "Cardano",
    "logo": "TBC'",
    "quantity": 81,
    "price": 10,
    "dateTime": "07/06/2022 05:13:24",
    "type": "BUY"
  },
  {
    "refName": "ADA",
    "name": "Cardano",
    "logo": "TBC'",
    "quantity": 70,
    "price": 56,
    "dateTime": "16/05/2022 07:08:36",
    "type": "SELL"
  },
  {
    "refName": "BTC",
    "name": "Bitcoin",
    "logo": "TBC'",
    "quantity": 90,
    "price": 20,
    "dateTime": "22/04/2022 00:25:24",
    "type": "BUY"
  },
  {
    "refName": "BTC",
    "name": "Bitcoin",
    "logo": "TBC'",
    "quantity": 36,
    "price": 34,
    "dateTime": "07/06/2022 22:30:12",
    "type": "SELL"
  },
  {
    "refName": "BTC",
    "name": "Bitcoin",
    "logo": "TBC'",
    "quantity": 88,
    "price": 78,
    "dateTime": "18/03/2022 10:59:00",
    "type": "SELL"
  },
  {
    "refName": "BCH",
    "name": "Bitcoin Cash",
    "logo": "TBC'",
    "quantity": 44,
    "price": 77,
    "dateTime": "06/06/2022 05:13:24",
    "type": "BUY"
  },
  {
    "refName": "ADA",
    "name": "Cardano",
    "logo": "TBC'",
    "quantity": 72,
    "price": 91,
    "dateTime": "05/05/2022 18:54:12",
    "type": "SELL"
  },
  {
    "refName": "ADA",
    "name": "Cardano",
    "logo": "TBC'",
    "quantity": 62,
    "price": 35,
    "dateTime": "28/04/2022 07:23:00",
    "type": "BUY"
  },
  {
    "refName": "XRP",
    "name": "Ripple",
    "logo": "TBC'",
    "quantity": 3,
    "price": 27,
    "dateTime": "02/05/2022 00:11:00",
    "type": "SELL"
  },
  {
    "refName": "BTC",
    "name": "Bitcoin",
    "logo": "TBC'",
    "quantity": 55,
    "price": 83,
    "dateTime": "25/12/2021 15:18:12",
    "type": "SELL"
  },
  {
    "refName": "XRP",
    "name": "Ripple",
    "logo": "TBC'",
    "quantity": 54,
    "price": 24,
    "dateTime": "16/06/2022 02:06:12",
    "type": "SELL"
  },
  {
    "refName": "ADA",
    "name": "Cardano",
    "logo": "TBC'",
    "quantity": 28,
    "price": 77,
    "dateTime": "06/06/2022 20:06:12",
    "type": "SELL"
  },
  {
    "refName": "XRP",
    "name": "Ripple",
    "logo": "TBC'",
    "quantity": 16,
    "price": 25,
    "dateTime": "01/01/2022 23:13:24",
    "type": "SELL"
  },
  {
    "refName": "BCH",
    "name": "Bitcoin Cash",
    "logo": "TBC'",
    "quantity": 91,
    "price": 18,
    "dateTime": "10/04/2022 16:15:48",
    "type": "SELL"
  },
  {
    "refName": "BCH",
    "name": "Bitcoin Cash",
    "logo": "TBC'",
    "quantity": 85,
    "price": 80,
    "dateTime": "26/05/2022 20:20:36",
    "type": "BUY"
  }
 ])