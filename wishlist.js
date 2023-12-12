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
            `insert into wishlist 
            (userID,isbn)
             values('${userID}','${isbn}')`,
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
            `SELECT u.username, w.*, b.book_title, b.price, g.genre_name, a.author_name
            FROM wishlist w
            JOIN users u ON w.userID = u.userID
            JOIN books b ON w.isbn = b.isbn
            JOIN genre g ON b.genreID = g.genreID
            JOIN author a ON a.authorID = b.authorID;`,
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
            `SELECT u.username, w.*, b.book_title, b.price
            FROM wishlist w
            JOIN users u ON w.userID = u.userID
            JOIN books b ON w.isbn = b.isbn
            WHERE u.username = '${keyword}' or u.userID = '${keyword}'; `,
            { type: QueryTypes.SELECT }
        )
        responseHandler(res, { data: product })
    } catch (error) {
        responseHandler(res, { response: responses.serverError, error })
    }
})


router.post("/delete", async (req, res) => {
    try {
        const { userID } = req.body;
        await db.query(
            `delete from wishlist where userID = '${userID}'`,
            { type: QueryTypes.DELETE }
        )
        responseHandler(res)
    } catch (error) {
        responseHandler(res, { response: responses.serverError, error })
    }
})

module.exports = router; 