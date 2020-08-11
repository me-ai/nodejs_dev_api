const express = require('express');
const router = express.Router();
const {
    getApi,
    addApi,
    deleteApi,
    updateApi

} = require('../controllers/api')


router
    .route('/')
    .get(getApi)
    .post(addApi);

router
    .route('/:id')
    .delete(deleteApi)
    .put(updateApi);


module.exports = router;