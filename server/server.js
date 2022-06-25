const express = require('express');
const app = express();  
const createRouter = require('./helper/createRouter.js');
const filteredRoutes = require('./helper/filteredRoutes.js');


const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
        const db = client.db('coinPortfolio');

        const transactions = db.collection('transactions');
        const transactionRouter = createRouter(transactions);

        const coins = filteredRoutes(transactions)


        app.use('/api/coins', coins);
        app.use('/api/transactions', transactionRouter);
    })
    .catch(console.err);

app.get('/', function (req,res){
    res.send('HELLO THERE')
});


app.listen(5000, function () {
    console.log(`Listening on port ${ this.address().port }`);
});
