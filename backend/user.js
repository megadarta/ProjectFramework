const express = require('express')
const router = express.Router()


const database = require("./config")

// Get All users
router.get("/", (request, response) => {
    var page = request.query.page;
    var page_size = request.query.page_size;

    console.log(typeof page);

    if(page == null){
        page = 0;
     }
 
     if(page_size == null){
        page_size = 25;
     }

     const args = [
        parseInt(page_size),
        parseInt(page)
    ];

    const query = "SELECT * FROM user LIMIT ? OFFSET ?"
    database.query(query, args, (error, result) => {
        if(error) throw error;
        response.status(200).json({
            "error" : false,
            "users" : result
        })

    })
});

