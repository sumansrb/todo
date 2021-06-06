const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

let items = ["gym", "shower", "breakfast"

];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"

    };

    // var day = today.toLocaleDateString("en-US", options)
    let day = today.toLocaleDateString("hi-IN", options)

    res.render("list", { KindOfDay: day, newListItems: items });

});

app.post("/", function(req, res) {
    item = req.body.newItem;

    items.push(item);

    res.redirect("/");
});

app.listen(3000, function() {
    console.log("Server started at port 3000...");
});