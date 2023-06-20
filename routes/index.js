const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController');
const UserController = require('../controllers/userController');
const verify = require('../config/auth');


// for sign up
router.post('/signup', UserController.signup);

// for sign in 
router.post('/signin', UserController.signin);


// to get all the books
router.get('/api/items', verify.verifyToken ,BookController.getallbooks);

// to store the book in the store 
router.post('/api/items', verify.verifyToken ,BookController.createBook);

// to retrieve a specific book from the store
router.get('/api/items/:id', verify.verifyToken,BookController.getSpecificBook);


// to delete a book from the store
router.delete('/api/items/:id', verify.verifyToken,BookController.deleteBook);


// updating the book
router.put('/api/items/:id', verify.verifyToken ,BookController.updatingBook);



module.exports = router;