const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "dilshad@8247",
    database: "contact_db"
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.log("Database Connection Failed");
        console.log(err);
    } else {
        console.log("MySQL Connected Successfully");
    }
});

// Home Route
app.get("/", (req, res) => {
    res.send("Backend is Running...");
});

// Save Contact Form Data
app.post("/contact", (req, res) => {

    const { name, email, phone, message } = req.body;

    const sql = "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";

    db.query(sql, [name, email, phone, message], (err, result) => {

        if (err) {
            console.log(err);
            return res.json({
                success: false,
                message: "Database Error"
            });
        }

        res.json({
            success: true,
            message: "Message Saved Successfully"
        });

    });

});

// Get All Contacts
app.get("/contacts", (req, res) => {

    const sql = "SELECT * FROM contacts";

    db.query(sql, (err, result) => {

        if (err) {
            console.log(err);
            return res.json({
                success: false,
                message: "Database Error"
            });
        }

        res.json(result);

    });

});

// Start Server
app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});