let express = require('express')
let router = express.Router()

router.get('/person', (req, res) => {
    if(req.query.name) {
        res.send(`Você tem resposta do person ${req.query.name}`)
    }
    else {
        res.send('Você tem resposta do person')
    }
})

router.get('/person/:name', (req, res) => {
    res.send(`Você tem resposta do person ${req.params.name}`)
})

router.get('/error', (req, res) => {
    throw new Error("Isto esta forçando um erro.")
})

module.exports = router