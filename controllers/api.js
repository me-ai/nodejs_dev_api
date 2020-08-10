const Api = require('../models/Api');

// @desc  Get All Data stored in API
// @route GET /api/v1/api
// @access Public
exports.getApi = async (req, res, next) => {
    try {
        const apis = await Api.find();

        return res.status(200).json({
            sucess: true,
            count: apis.length,
            data: apis
        });
    } catch (err) {
        return res.status(500)({
            success: false,
            error: 'Server Error'
        });

    }
}

// @desc  Add Data to API
// @route POST /api/v1/api
// @access Public
exports.addApi = async (req, res, next) => {
    try {
        const {
            text,
            amount
        } = req.body;
        const api = await Api.create(req.body);

        return res.status(201).json({
            sucess: true,
            data: api
        });
    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500)({
                success: false,
                error: 'Server Error'
            });

        }
    }

}

// @desc  Delete Data from API
// @route DELETE /api/v1/api/:id
// @access Public
exports.deleteApi = async (req, res, next) => {
    try {
        const api = await Api.findById(req.params.id)
        if (!api) {
            return res.status(404).json({
                success: false,
                error: 'No api ID found'
            });
        }
        await api.remove();
        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        return res.status(500)({
            success: false,
            error: 'Server Error'
        });
    }
}