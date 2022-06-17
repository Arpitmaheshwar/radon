const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middlewares = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId",middlewares.mid1, userController.getUserData)
router.post("/users/:userId/posts",middlewares.mid2, userController.postMessage)

router.put("/users/:userId", userController.updateUser)
router.delete("/users/:userId", userController.deleteUser)

module.exports = router;