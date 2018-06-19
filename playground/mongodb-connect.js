const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {

  //  let obj = new ObjectID();
   // console.log(obj);

    if (err)
        return console.log("There was an error connecting to MongoDB server.");

    console.log("Connected to MongoDB server.");


    db.collection("Todos").insertOne({
            text: "Something to say",
            completed: false
        }, (err, results) => {
            if (err)
               return console.log("Unable to insert todo", err);

            console.log(JSON.stringify(results.ops, undefined, 2));
            console.log(results.ops[0]._id.getTimestamp());


    });

    db.close();
});