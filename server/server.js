const express = require('express')
const app = express()

const mongoose = require('mongoose')
const uri = 'mongodb+srv://mbachidinma4:8T8p8hqU8izlDPML@cluster0.eog0rot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

app.get("/getEvents", async (req, res) => {
    console.log(req.query);
    var tags = req.query.eventtags.split(" ");
    let collection = await db.collection("events");
    let query = {"tags": {"$all": tags}}
    let results = await collection.aggregate([{"$match": query},{"$sample": { "size": 5 }}]).toArray();
    console.log(results);
    res.json(results).status(200);
  });

app.get("/getSomeEvents", async (req, res) => {
    let collection = await db.collection("events");
    let results = await collection.aggregate([{"$sample": { "size": 20 }}]).toArray();
    res.json(results).status(200);
})

let conn;
let db;
function connectDB(){
    try {
        conn = mongoose.connect(uri, {
            dbName: 'bonbon',
          });
        db = mongoose.connection;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}


connectDB();

app.listen(5000, () => {console.log("Server running on port 5000")})