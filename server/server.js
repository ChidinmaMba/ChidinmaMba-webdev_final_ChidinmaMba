const express = require('express')
const app = express()

const mongoose = require('mongoose')
const uri = 'mongodb+srv://mbachidinma4:8T8p8hqU8izlDPML@cluster0.eog0rot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


// app.get("/getEvents", (req, res)=>{
//     console.log(req.query)
//     res.json(
//     {
//         "events": [
//         {
//           "key": 1,
//           "name": "Sour Mouse",
//           "description": "Bar, board games, music, ping pong",
//           "location": "ABC123 Seseme Street",
//           "family_friendly": "false",
//           "cost": "average drink cost 10 dollars",
//           "start_time": "6pm",
//           "end_time": "3am",
//           "anytime": "false",
//           "image_path": "images/bar.jpeg",
//           "tags": []
//         }
//         ]
//     })
// })

app.get("/getEvents", async (req, res) => {
    console.log(req.query);
    var tags = req.query.eventtags.split(" ");
    let collection = await db.collection("events");
    // let formattedTAgs = tags.map((tag)=>{
    //     f`{tags:${tag}}`
    // })
    let query = " $or: [ { tags: \"bar\" }, { tags: \"music\" } ]"
    // let newQuery = {tags:"bar"};
    let newQuery = { tag: { $elemMatch: "bar" } };
    let results = await collection.find({}).toArray();
    await console.log(results);
    res.json(results).status(200);
  });

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