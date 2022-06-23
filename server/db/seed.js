use coinPortfolio;
db.dropDatabase();

db.transactions.insertMany([

        {
          "Coin": "BTC",
          "DateTime_Purchase": "14/02/2022 12:34:17",
          "Amount_Purchase": 65,
          "Price_Purchase": 26,
          "Type": "BUY"
        },
        {
          "Coin": "BTC",
          "DateTime_Purchase": "17/04/2022 12:19:53",
          "Amount_Purchase": 1,
          "Price_Purchase": 98,
          "Type": "BUY"
        },
        {
          "Coin": "ADA",
          "DateTime_Purchase": "24/04/2022 16:39:05",
          "Amount_Purchase": 30,
          "Price_Purchase": 99,
          "Type": "BUY"
        },
        {
          "Coin": "BTC",
          "DateTime_Purchase": "26/04/2022 20:00:41",
          "Amount_Purchase": 59,
          "Price_Purchase": 91,
          "Type": "BUY"
        },
        {
          "Coin": "XRP",
          "DateTime_Purchase": "04/05/2022 11:22:17",
          "Amount_Purchase": 78,
          "Price_Purchase": 84,
          "Type": "BUY"
        },
        {
          "Coin": "BTC",
          "DateTime_Purchase": "20/03/2022 19:46:17",
          "Amount_Purchase": 18,
          "Price_Purchase": 13,
          "Type": "BUY"
        },
        {
          "Coin": "ETH",
          "DateTime_Purchase": "22/03/2022 02:58:17",
          "Amount_Purchase": 12,
          "Price_Purchase": 51,
          "Type": "BUY"
        },
        {
          "Coin": "XRP",
          "DateTime_Purchase": "16/01/2022 14:29:29",
          "Amount_Purchase": 95,
          "Price_Purchase": 11,
          "Type": "BUY"
        },
        {
          "Coin": "BTC",
          "DateTime_Purchase": "09/01/2022 23:51:05",
          "Amount_Purchase": 56,
          "Price_Purchase": 42,
          "Type": "BUY"
        },
        {
          "Coin": "XRP",
          "DateTime_Purchase": "23/02/2022 09:55:53",
          "Amount_Purchase": 78,
          "Price_Purchase": 94,
          "Type": "BUY"
        },
        {
          "Coin": "ETH",
          "DateTime_Purchase": "25/05/2022 04:39:05",
          "Amount_Purchase": 91,
          "Price_Purchase": 6,
          "Type": "BUY"
        },
        {
          "Coin": "XRP",
          "DateTime_Purchase": "08/01/2022 10:10:17",
          "Amount_Purchase": 15,
          "Price_Purchase": 49,
          "Type": "BUY"
        },
        {
          "Coin": "ETH",
          "DateTime_Purchase": "23/03/2022 01:17:29",
          "Amount_Purchase": 29,
          "Price_Purchase": 45,
          "Type": "BUY"
        },
        {
          "Coin": "XRP",
          "DateTime_Purchase": "02/04/2022 14:58:17",
          "Amount_Purchase": 17,
          "Price_Purchase": 25,
          "Type": "BUY"
        },
        {
          "Coin": "ADA",
          "DateTime_Purchase": "31/01/2022 14:15:05",
          "Amount_Purchase": 23,
          "Price_Purchase": 17,
          "Type": "BUY"
        },
        {
          "Coin": "BTC",
          "DateTime_Purchase": "09/03/2022 16:53:29",
          "Amount_Purchase": 15,
          "Price_Purchase": 2,
          "Type": "BUY"
        },
        {
          "Coin": "XRP",
          "DateTime_Purchase": "31/05/2022 16:10:17",
          "Amount_Purchase": 84,
          "Price_Purchase": 52,
          "Type": "BUY"
        },
        {
          "Coin": "BCH",
          "DateTime_Purchase": "26/01/2022 11:07:53",
          "Amount_Purchase": 77,
          "Price_Purchase": 61,
          "Type": "BUY"
        },
        {
          "Coin": "BCH",
          "DateTime_Purchase": "30/04/2022 23:07:53",
          "Amount_Purchase": 94,
          "Price_Purchase": 68,
          "Type": "BUY"
        },
        {
          "Coin": "BCH",
          "DateTime_Purchase": "14/06/2022 09:12:41",
          "Amount_Purchase": 55,
          "Price_Purchase": 90,
          "Type": "BUY"
        },
        {
          "Coin": "ADA",
          "DateTime_Purchase": "27/12/2021 17:07:53",
          "Amount_Purchase": 27,
          "Price_Purchase": 82,
          "Type": "BUY"
        },
        {
          "Coin": "ADA",
          "DateTime_Purchase": "18/12/2021 14:29:29",
          "Amount_Purchase": 83,
          "Price_Purchase": 19,
          "Type": "BUY"
        },
        {
          "Coin": "BCH",
          "DateTime_Purchase": "12/04/2022 01:31:53",
          "Amount_Purchase": 69,
          "Price_Purchase": 91,
          "Type": "BUY"
        },
        {
          "Coin": "BTC",
          "DateTime_Purchase": "11/05/2022 18:05:29",
          "Amount_Purchase": 41,
          "Price_Purchase": 92,
          "Type": "BUY"
        },
        {
          "Coin": "XRP",
          "DateTime_Purchase": "18/02/2022 22:53:29",
          "Amount_Purchase": 3,
          "Price_Purchase": 94,
          "Type": "BUY"
        },
        {
          "Coin": "BCH",
          "DateTime_Purchase": "22/12/2021 05:51:05",
          "Amount_Purchase": 55,
          "Price_Purchase": 57,
          "Type": "BUY"
        },
        {
          "Coin": "BTC",
          "DateTime_Purchase": "31/12/2021 06:48:41",
          "Amount_Purchase": 81,
          "Price_Purchase": 61,
          "Type": "BUY"
        },
        {
          "Coin": "BTC",
          "DateTime_Purchase": "12/01/2022 07:03:05",
          "Amount_Purchase": 52,
          "Price_Purchase": 83,
          "Type": "BUY"
        },
        {
          "Coin": "ADA",
          "DateTime_Purchase": "28/03/2022 21:55:53",
          "Amount_Purchase": 22,
          "Price_Purchase": 28,
          "Type": "BUY"
        },
        {
          "Coin": "ETH",
          "DateTime_Purchase": "29/05/2022 13:17:29",
          "Amount_Purchase": 70,
          "Price_Purchase": 37,
          "Type": "BUY"
        },
        {
          "Coin": "BTC",
          "DateTime_Purchase": "13/02/2022 01:03:05",
          "Amount_Purchase": 74,
          "Price_Purchase": 21,
          "Type": "BUY"
        },
        {
          "Coin": "BTC",
          "DateTime_Purchase": "20/06/2022 03:12:41",
          "Amount_Purchase": 41,
          "Price_Purchase": 41,
          "Type": "BUY"
        },
        {
          "Coin": "ETH",
          "DateTime_Purchase": "15/06/2022 03:41:29",
          "Amount_Purchase": 13,
          "Price_Purchase": 85,
          "Type": "BUY"
        },
        {
          "Coin": "XRP",
          "DateTime_Purchase": "13/01/2022 05:22:17",
          "Amount_Purchase": 21,
          "Price_Purchase": 86,
          "Type": "BUY"
        },
        {
          "Coin": "ETH",
          "DateTime_Purchase": "29/05/2022 12:48:41",
          "Amount_Purchase": 84,
          "Price_Purchase": 95,
          "Type": "BUY"
        },
        {
          "Coin": "BCH",
          "DateTime_Purchase": "12/03/2022 10:10:17",
          "Amount_Purchase": 92,
          "Price_Purchase": 23,
          "Type": "BUY"
        },
        {
          "Coin": "ADA",
          "DateTime_Purchase": "18/05/2022 05:07:53",
          "Amount_Purchase": 36,
          "Price_Purchase": 65,
          "Type": "BUY"
        },
        {
          "Coin": "BTC",
          "DateTime_Purchase": "02/04/2022 04:39:05",
          "Amount_Purchase": 90,
          "Price_Purchase": 59,
          "Type": "BUY"
        },
        {
          "Coin": "XRP",
          "DateTime_Purchase": "12/06/2022 18:48:41",
          "Amount_Purchase": 31,
          "Price_Purchase": 8,
          "Type": "BUY"
        },
        {
          "Coin": "XRP",
          "DateTime_Purchase": "23/05/2022 16:24:41",
          "Amount_Purchase": 71,
          "Price_Purchase": 43,
          "Type": "BUY"
        },
        {
          "Coin": "ADA",
          "DateTime_Purchase": "14/04/2022 03:41:29",
          "Amount_Purchase": 48,
          "Price_Purchase": 65,
          "Type": "BUY"
        },
        {
          "Coin": "BTC",
          "DateTime_Purchase": "18/06/2022 13:03:05",
          "Amount_Purchase": 39,
          "Price_Purchase": 34,
          "Type": "BUY"
        },
        {
          "Coin": "ETH",
          "DateTime_Purchase": "07/12/2021 03:55:53",
          "Amount_Purchase": 43,
          "Price_Purchase": 33,
          "Type": "BUY"
        },
        {
          "Coin": "BCH",
          "DateTime_Purchase": "14/05/2022 21:27:05",
          "Amount_Purchase": 23,
          "Price_Purchase": 27,
          "Type": "BUY"
        },
        {
          "Coin": "ADA",
          "DateTime_Purchase": "04/02/2022 11:22:17",
          "Amount_Purchase": 36,
          "Price_Purchase": 47,
          "Type": "BUY"
        },
        {
          "Coin": "ETH",
          "DateTime_Purchase": "30/05/2022 04:53:29",
          "Amount_Purchase": 57,
          "Price_Purchase": 13,
          "Type": "BUY"
        },
        {
          "Coin": "BCH",
          "DateTime_Purchase": "26/04/2022 14:58:17",
          "Amount_Purchase": 59,
          "Price_Purchase": 63,
          "Type": "BUY"
        },
        {
          "Coin": "BTC",
          "DateTime_Purchase": "08/02/2022 23:22:17",
          "Amount_Purchase": 63,
          "Price_Purchase": 10,
          "Type": "BUY"
        },
        {
          "Coin": "ETH",
          "DateTime_Purchase": "02/01/2022 22:39:05",
          "Amount_Purchase": 99,
          "Price_Purchase": 35,
          "Type": "BUY"
        }

])