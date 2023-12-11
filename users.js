var express = require("express");
const { db } = require("../config");
const { responseHandler, responses } = require("../utils/responseHandler");
var router = express.Router();
const { QueryTypes } = require('sequelize');

router.post("/create", async (req, res) => {
    try {
        const {username,
            first_name,
            last_name,
            email,
            password
        } = req.body;
        await db.query(
            `insert into users 
            (username,first_name,last_name,email,password)
             values('${username}','${first_name}','${last_name}','${email}','${password}')`,
            { type: QueryTypes.INSERT }
        )
        responseHandler(res)
    } catch (error) {
        responseHandler(res, { response: responses.serverError, error })
    }
})

router.post("/update", async (req, res) => {
    try {
        const { username, password} = req.body;
        const product = await db.query(
            `update users set password = '${password}' where username = '${username}'`,
            { type: QueryTypes.UPDATE }
        )
        if (product[1] === 0) return responseHandler(res, { response: responses.notFound })
        responseHandler(res)
    } catch (error) {
        responseHandler(res, { response: responses.serverError, error })
    }
})

router.post("/delete", async (req, res) => {
    try {
        const { userID } = req.body;
        await db.query(
            `delete from users where userID = '${userID}'`,
            { type: QueryTypes.DELETE }
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
            `select * from users `,
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
            `select * from users WHERE username like '${keyword}' OR first_name like '${keyword}' OR last_name like '${keyword}' OR email like '${keyword}' `,
            { type: QueryTypes.SELECT }
        )
        responseHandler(res, { data: product })
    } catch (error) {
        responseHandler(res, { response: responses.serverError, error })
    }
})

router.post("/sales", async (req, res) => {
    try {
        const { keyword } = req.body;
        const product = await db.query(
            `SELECT CONCAT(SUM(money_spent),'$') AS SALES
            FROM users;
             `,
            { type: QueryTypes.SELECT }
        )
        responseHandler(res, { data: product })
    } catch (error) {
        responseHandler(res, { response: responses.serverError, error })
    }
})
 
router.post("/searchForBB", async (req, res) => {
    try {
        const { keyword } = req.body;
        const product = await db.query(
            `select * from users WHERE username like '${keyword}' `,
            { type: QueryTypes.SELECT }
        )
        responseHandler(res, { data: product })
    } catch (error) {
        responseHandler(res, { response: responses.serverError, error })
    }
})

module.exports = router;