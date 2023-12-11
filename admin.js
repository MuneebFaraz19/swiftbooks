var express = require("express");
const { db } = require("../config");
const { responseHandler, responses } = require("../utils/responseHandler");
var router = express.Router();
const { QueryTypes } = require('sequelize');

router.post("/update", async (req, res) => {
    try {
        const { username, password} = req.body;
        const product = await db.query(
            `update admin set password = '${password}' where username = '${username}'`,
            { type: QueryTypes.UPDATE }
        )
        if (product[1] === 0) return responseHandler(res, { response: responses.notFound })
        responseHandler(res)
    } catch (error) {
        responseHandler(res, { response: responses.serverError, error })
    }
})

router.post("/list", async (req, res) => {
    try {
        const { keyword } = req.body;
        const product = await db.query(
            `select * from admin `,
            { type: QueryTypes.SELECT }
        )
        responseHandler(res, { data: product })
    } catch (error) {
        responseHandler(res, { response: responses.serverError, error })
    }
})

module.exports = router;