var express = require("express");
const { db } = require("../config");
const { responseHandler, responses } = require("../utils/responseHandler"); 
var router = express.Router();
const { QueryTypes } = require('sequelize');

router.post("/create", async (req, res) => {
    try {
        const {userID,
            isbn
        } = req.body;
        await db.query(
            `insert into books_bought 
            (userID, isbn)
             values('${userID}','${isbn}')`,
            { type: QueryTypes.INSERT }
        )
        responseHandler(res)
    } catch (error) {
        responseHandler(res, { response: responses.serverError, error })
    }
})
/*
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
*/
router.post("/list", async (req, res) => {
    try {
        const { keyword } = req.body;
        const product = await db.query(
            `SELECT u.username, bb.*, b.book_title, b.price, g.genre_name, a.author_name
            FROM books_bought bb
            JOIN users u ON bb.userID = u.userID
            JOIN books b ON bb.isbn = b.isbn
            JOIN genre g ON b.genreID = g.genreID
            JOIN author a ON a.authorID = b.authorID;
            `,
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
            `SELECT u.username, bb.*, b.book_title, b.price
            FROM books_bought bb
            JOIN users u ON bb.userID = u.userID
            JOIN books b ON bb.isbn = b.isbn
            WHERE u.username = '${keyword}' or u.userID = '${keyword}';
            `,
            { type: QueryTypes.SELECT }
        )
        responseHandler(res, { data: product })
    } catch (error) {
        responseHandler(res, { response: responses.serverError, error })
    }
})

router.post("/moneyspentbooksbyuser", async (req, res) => {
    try {
        const { keyword } = req.body;
        const product = await db.query(
            `SELECT u.username, CONCAT(SUM(bb.price), '$') AS total_spent
            FROM users u
            JOIN books_bought bb ON u.userID = bb.userID
            WHERE u.username = '${keyword}'
            `,
            { type: QueryTypes.SELECT }
        )
        responseHandler(res, { data: product })
    } catch (error) {
        responseHandler(res, { response: responses.serverError, error })
    }
})



module.exports = router;