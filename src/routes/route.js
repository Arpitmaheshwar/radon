const express = require('express');
const { endpoint, batch, demo } = require('../logger/logger');
// const externalModule = require('./logger')
// const module = require("../logger/logger")
const module2 = require("../util/helper")
const module3 = require("../validator/formatter")

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+endpoint)
    console.log('The current batch is '+batch)
    module2.print()
    module2.batchinfo()
    module3.greet()
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason