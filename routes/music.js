const express = require('express');
const Router = express.Router;
const musicRoutes = Router();
const {
    create,
    retrieveAll,
    retrieveOne,
    update,
    deleteOne
} = require('../controllers/music');

musicRoutes.post('/', create);
musicRoutes.get('/', retrieveAll);
musicRoutes.get('/:id', retrieveOne);
musicRoutes.put('/', update);
musicRoutes.delete('/', deleteOne);

module.exports = musicRoutes;