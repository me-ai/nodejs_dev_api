const express = require('express');
const router = express.Router();
const {
    getApi,
    addApi,
    deleteApi
} = require('../controllers/api')


router
    .route('/')
    .get(getApi)
    .post(addApi);

router
    .route('/:id')
    .delete(deleteApi);


module.exports = router;