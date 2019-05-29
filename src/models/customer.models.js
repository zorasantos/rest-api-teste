let mongoose = require('mongoose')

const server = 'ds263436.mlab.com:63436'
const database = 'rest-api-teste'
const user = 'api-teste'
const password = '123qwe'

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`, {useNewUrlParser: true, useCreateIndex: true,})

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Customer', CustomerSchema)