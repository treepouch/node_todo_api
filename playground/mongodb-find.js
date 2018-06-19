const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {


    if (err)
        return console.log("There was an error connecting to MongoDB server.");

    console.log("Connected to MongoDB server.");

    db.collection("Todos").find({completed: true}).toArray().then((docs) => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {
        console.log("Unable to fetch todos", err)

    });

    db.close();
});