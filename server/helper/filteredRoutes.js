const express = require('express');

const filteredRoutes = function (collection) {

    const router = express.Router();

// Show distinct coins
    router.get('/', (req, res) => {
        collection
            .distinct("Coin")
            .then((docs) => res.json(docs))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
        });
    });

// Filter by coin
    router.get('/:coin', (req, res) => {
        const coin = req.params.coin;
        collection
            .find({ "refName":coin})
            .toArray()
            .then((doc) => res.json(doc))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
});

    return router;

};

module.exports = filteredRoutes;
