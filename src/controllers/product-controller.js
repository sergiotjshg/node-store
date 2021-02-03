'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product
        .save()
        .then(x => {
            res.status(201).send({ message: 'Produto cadastrado com sucesso!'});
        }).catch(e => {
            res.status(400).send({ message: 'Falha ao cadastrar o produto!', data: e});
        });
}