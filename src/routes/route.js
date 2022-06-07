const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBooks", BookController.createBooks)

router.post("/createauthor", BookController.createauthor)

router.get("/getbyname", BookController.getbyname)

router.get("/getbyname1",BookController.getbyname1)

router.get("/costbook",BookController.costbook)







module.exports = router;