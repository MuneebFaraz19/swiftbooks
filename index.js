const express = require('express');
const router = express.Router();

const loginRouter = require("./login");
const adminLoginRouter = require("./adminLogin");
const booksRouter = require("./books");
const genreRouter = require("./genre");
const authorRouter = require("./author");
const userRouter = require("./users");
const borrowed_booksRouter = require("./borrowed_books");
const subscriptionRouter = require("./subscription");
const wishlistRouter = require("./wishlist");
const books_boughtRouter = require("./books_bought");
const subscriptions_boughtRouter = require("./subscriptions_bought");
const adminRouter = require("./admin");

router.use("/login", loginRouter);
router.use("/adminLogin", adminLoginRouter);
router.use("/books", booksRouter);
router.use("/genre", genreRouter);
router.use("/author", authorRouter);
router.use("/users", userRouter);
router.use("/borrowed_books", borrowed_booksRouter);
router.use("/subscription", subscriptionRouter);
router.use("/wishlist", wishlistRouter);
router.use("/books_bought", books_boughtRouter);
router.use("/subscriptions_bought", subscriptions_boughtRouter);
router.use("/admin", adminRouter);

module.exports = router;