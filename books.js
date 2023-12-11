var express = require("express");
const { db } = require("../config");
const { responseHandler, responses } = require("../utils/responseHandler");
var router = express.Router();
const { QueryTypes } = require('sequelize');

router.post("/create", async (req, res) => {
    try {
        const { isbn,
            book_title,
            rating,
            genreID,
            authorID,
            publish_year,
            Qty,
            price } = req.body;
        await db.query(
            `insert into books 
            (isbn,book_title,rating,genreID,authorID,publish_year,Qty,price)
             values('${isbn}','${book_title}','${rating}','${genreID}','${authorID}','${publish_year}','${Qty}','${price}')`,
            { type: QueryTypes.INSERT }
        )
        responseHandler(res)
    } catch (error) {
        responseHandler(res, { response: responses.serverError, error })
    }
})

router.post("/update", async (req, res) => {
    try {
        const { isbn, rating, Qty, price } = req.body;
        const product = await db.query(
            `update books set Qty = '${Qty}',price = '${price}', rating = '${rating}' where isbn = '${isbn}'`,
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
        const { isbn } = req.body;
        await db.query(
            `delete from books where isbn = '${isbn}'`,
            { type: QueryTypes.DELETE }
        )
        responseHandler(res)
    } catch (error) {
        responseHandler(res, { response: responses.serverError, error })
    }
})

router.post("/list", async (req, res) => {
    try {
        const product = await db.query(
            `SELECT b.isbn, b.book_title, b.rating, b.price, b.Qty, b.publish_year, g.genre_name, a.author_name
            FROM books b
            JOIN genre g ON b.genreID = g.genreID
            JOIN author a ON a.authorID = b.authorID`,
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
            `SELECT b.isbn, b.book_title, b.rating, b.price, b.Qty, b.publish_year, g.genre_name, a.author_name
            FROM books b 
            JOIN genre g on b.genreID = g.genreID 
            JOIN author a on a.authorID = b.authorID 
            WHERE g.genre_name like '%${keyword}%' 
            OR a.author_name like '%${keyword}%' 
            OR b.publish_year like '%${keyword}%' 
            OR b.book_title like'${keyword}'`,
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
            `SELECT
            SUM(5 - Qty) AS total_books_sold
            FROM books;
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
            `SELECT * from books where book_title = '${keyword}'`,
            { type: QueryTypes.SELECT }
        )
        responseHandler(res, { data: product })
    } catch (error) {
        responseHandler(res, { response: responses.serverError, error })
    }
})

module.exports = router;
