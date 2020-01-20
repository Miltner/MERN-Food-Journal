const express = require('express');
const router = express.Router();
//const auth = require('../../middleware/auth')

// Item Model
const Item = require('../../models/Food');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Item.find()
    .sort({ date: -1 })    
    .then(items => res.json(items))
});

// @route POST api/items
// @desc Create a POST
// @access Private
router.post('/', (req, res) => {
    const newItem = new Item({
        food: req.body.food,
        calories: req.body.calories
    });

    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items
// @desc DELETE an Items
// @access Private
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});



module.exports = router;