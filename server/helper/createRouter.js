const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

// Index - Show all
  router.get('/', (req, res) => {
    collection
      .find()
      .sort({dateTime:-1})
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

// Show - Find by ID
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

// Create new transaction

router.post('/', (req, res) => {
  const newData = req.body;
  // convert date strings into sortable datetime objects 
  newData.dateTime = new Date (newData.dateTime)
  collection
  .insertOne(newData)
  .then((result) => {
    res.json(result)
  })
  .catch((err) => {
    console.error(err);
    res.status(500);
    res.json({ status: 500, error: err });
  });
});



// Delete
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .deleteOne({ _id: ObjectID(id) })
      .then(() => collection.find().toArray())
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

//Update

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  collection
  .updateOne(
    { _id: ObjectID(id)},
    { $set: updatedData },
  )
  .then((result) => {
    res.json(result)
  })
  .catch((err) => {
    console.error(err);
    res.status(500);
    res.json({ status: 500, error: err });
  });
})

  return router;

};

module.exports = createRouter;
