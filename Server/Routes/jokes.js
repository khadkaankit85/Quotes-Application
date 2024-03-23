const { default: axios } = require('axios')
const express = require('express')
const mysql = require('mysql');
const router = express.Router()

//result from db
let resultFromDB;

function fromDB(Query) {
    // Import the 'mysql' package

    // Create a connection to the database
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: "",
        database: 'quotes application'
    });

    // Connect to the database
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to database:', err);
            return;
        }
        console.log('Connected to database');
    });

    //executing sql now to retrieve data from db
    connection.query(Query, (error, results, field) => {
        if (error) {
            console.log(error)
        }
        else {
            resultFromDB = results
        }
    })


    // Close the connection when done
    connection.end();
}

// router.get(':params', async (req, res) => {
//     console.log(req.params)
//     try {
//         fromDB(`Select ${req.params["id"]} from jokes`)
//         if (resultFromDB) {
//             console.log("Sql for params from url executed successfully")
//             res.send(resultFromDB)
//         }
//     }
//     catch (e) {
//         console.log("some error occurred while retriving data from db")
//     }
// })



router.get('/', async (req, res) => {
    let id = req.query
    console.log(id.id)
    try {
        fromDB(`Select * from Jokes where id=${id.id}`)
        if (resultFromDB) {
            console.log("Sql executed successfully")
            res.send(resultFromDB)
        }
    }
    catch (e) {
        console.log("some error occurred while retriving data from db")
    }
})



module.exports = router