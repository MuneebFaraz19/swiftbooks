var express = require("express");
const { db } = require("../config");
const { responseHandler, responses } = require("../utils/responseHandler");
var router = express.Router();
const { QueryTypes } = require('sequelize');

router.post("/create", async (req, res) => {
    try {
        const {subscriptionID,
            userID
        } = req.body;
        await db.query(
            `insert into subscriptions_bought 
            (subscriptionID, userID)
             values('${subscriptionID}','${userID}')`,
            { type: QueryTypes.INSERT }
        )
        responseHandler(res)
    } catch (error) {
        responseHandler(res, { response: responses.serverError, error })
    }
})

router.post("/list", async (req, res) => {
    try {
        const { keyword } = req.body;
        const product = await db.query(
            `select * from subscriptions_bought `,
            { type: QueryTypes.SELECT }
        )
        responseHandler(res, { data: product })
    } catch (error) {
        responseHandler(res, { response: responses.serverError, error })
    }
})

router.post("/search", async (req, res) => {
    try {
        const { keyword } = req.body;
        const product = await db.query(
            `SELECT u.username, sb.*, s.subscription_name, s.subscription_price AS price, s.validity
            FROM subscriptions_bought sb
            JOIN users u ON sb.userID = u.userID
            JOIN subscription s ON sb.subscriptionID = s.subscriptionID
            WHERE u.username = '${keyword}'; `,
            { type: QueryTypes.SELECT }
        )
        responseHandler(res, { data: product })
    } catch (error) {
        responseHandler(res, { response: responses.serverError, error })
    }
})

module.exports = router;