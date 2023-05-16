# Crypto Currency Portfolio

An internet person has brought you their CryptoCurrency portfolio and an idea. With the aim to analyse their shares more effectively, you have been tasked to come up with an application to display their investments live.

EDIT:
As of checking 16 May 2023 nomics.com no longer exists "Unfortunately, we are sunsetting this website effective today" so I need to find another API in order to display this information.

## MVP

A user should be able to:

- View the value of individual investments and the total GBP. 
- Add new currencies to portfolio via global view and portfolio view through.
- Increase/Decrease investments by adding transactions. Delete/Update with prompt.
- View all coins that are available to purchase through the app.
- For each coin, access the graph for global trends combined with Portfolio summary and transaction history for that coin.


## Achieved Extensions

- Log in with hard-coded password and timeout
- For each coin, access the graph for global trends combined with Portfolio summary and transaction history for that coin.

## Next Steps

- The first thing I would do with this code would be to tidy it up. The structure is lacking and does not make a lot of sense- at all. 

## Further Extensions

- Add extra timescales to global trends( 1hour, 1 week, 1 month,1 year?)
- Use historic prices and our stored transaction dates to display the value of our portfolio over time.
- Toggle between GBP or USD
- Delete/Update with prompt.


## API, Libraries, Resources

- https://www.alphavantage.co/ API for historical graph
- https://nivo.rocks/line/ The beautiful line graph with all of its built in functionality

## Installation
To demo CoinPort application first you'll need these:

1. Node.js
2. MongoDB
3. A copy of this repository

With the previous achieved follow these steps to run CoinPort

1. Install package.json dependencies by navigating to the client and running:
```
npm i
```
2. Navigate to server directory and run: (You can skip this step if you wish to add your own seed data via the application itself but to save time and see the full functionality it is recommended.)
```
npm run seed
```
3. To start the server navigate to server directory and run
```
npm start
```
4. To start the client navigate to client directory and run:
```
npm start
```
<img width="1723" alt="Screenshot 2023-05-15 at 17 02 47" src="https://github.com/AbiJays/coin_port/assets/99146064/ade79c84-7710-4172-a3d5-01a876b4dc44">

5. Behold CoinPort http://localhost:3000
