var express = require("express");
const { db } = require("../config");
const { responseHandler, responses } = require("../utils/responseHandler");
var router = express.Router();
const { QueryTypes } = require('sequelize');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

router.post("/login", async (req, res) => { 
    try {
        const { username, password } = req.body
        let admin = await db.query(`select * from admin a where a.username = '${username}'`, { type: QueryTypes.SELECT })
        if (admin.length === 0) return responseHandler(res, { response: responses.userNotFound })
        admin = admin[0]
        const passwordCheck = await admin.password === password;
        if (!passwordCheck) return responseHandler(res, { response: responses.invalidPassword })
        const token = jwt.sign({ adminID: admin.adminID, createdAt: new Date(), admin: admin.role }, process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRY });
        responseHandler(res, {
            data: { adminDetails: { ...admin, password: undefined, jwt: undefined }, token }
        })
    } catch (error) {
        responseHandler(res, { response: responses.serverError, error })
    }
})

module.exports = router;