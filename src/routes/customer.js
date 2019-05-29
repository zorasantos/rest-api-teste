let CustomerModel = require('../models/customer.models')
let express = require('express')
let router = express.Router()

router.post('/customer', (req, res) => {
    if(!req.body) {
        return res.satatus(400).send('O corpo da solicitação está ausente')
    }

    if(!req.body.email) {

    }

    let model = new CustomerModel(req.body)
    model.save()
        .then(doc => {
            if(!doc || doc.length === 0) {
                return res.status(500).send(doc)
            }

            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.get('/customer', (req, res) => {
    if(!req.query.email) {
        return res.status(400).send('Use como parâmetro: email')
    }

    CustomerModel.findOne({
        email: req.query.email
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.satatus(500).json(err)
    })
})

router.put('/customer', (req, res) => {
    if(!req.query.email) {
        return res.status(400).send('Use como parâmetro: email')
    }

    CustomerModel.findOneAndUpdate({
        email: req.query.email
    }, req.body, {
        new: true
    })
    .then(doc => {
        res.json(doc)
    })
    .catch( err => {
        res.status(500).json(err)
    })
})

router.delete('/customer', (req, res) => {
    if(!req.query.email) {
        return res.status(400).send('Use como parâmetro: email')
    }

    CustomerModel.findOneAndRemove({
        email: req.query.email
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router