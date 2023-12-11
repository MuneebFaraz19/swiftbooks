var express = require("express");
const { db } = require("../config");
const { responseHandler, responses } = require("../utils/responseHandler");
var router = express.Router();
const { QueryTypes } = require('sequelize');

router.post("/create", async (req, res) => {
    try {
        const { authorID,
              author_name
            } = req.body;
        await db.query(
            `insert into author 
            (authorID, author_name)
             values('${authorID}','${author_name}')`,
            { type: QueryTypes.INSERT }
        )
        responseHandler(res)
    } catch (error) {
        responseHandler(res, { response: responses.serverError, error })
    }
})

module.exports = router;