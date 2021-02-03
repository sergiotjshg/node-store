'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.post('/', controller.post);

router.put('/:id', (req, res, next) => {
    const id = req.params.id
    res.status(201).send({
        id: id,
        item: req.body
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
});

module.exports = router;