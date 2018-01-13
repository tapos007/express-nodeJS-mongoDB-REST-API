var express = require('express')
const UserController = require('../controllers/usersController');
var router = express.Router()

// middleware that is specific to this router

// define the home page route
router.get('/', UserController.index);
// define the about route
router.post('/', UserController.newUser)

module.exports = router;