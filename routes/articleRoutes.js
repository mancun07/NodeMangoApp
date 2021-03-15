const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: './uploads/'})
const {getArticles, getSingleArticle, addArticle} = require
('../controllers/articlesController');
const Article = require('../model/jacketsModel');

router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//get all transactions
router.route('/')
    .get(getArticles)
    .post(upload.single(Article.productImage), addArticle)

router.route('/:id')
    .get(getSingleArticle)

module.exports = router;


