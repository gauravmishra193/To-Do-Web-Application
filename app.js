
const express = require("express");
const bodyParser = require("body-parser");
const { read } = require("fs");
const date = require(__dirname + '/date.js');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public")); // express doesn't incorporate all the files in your directory while creating the server but only the .js file and the views directory. So we put all the files in a folder named 'public' and this is how we tell the express to incorporate the files in the 'public'


var itemNames=["buy food", 'cook food', 'eat food'];
let workList= [];

app.set('view engine', 'ejs'); // this is used to incorporate the EJS into our server.js file. there must be a file named 'views' in the same directory where the EJS will go and search for what has to be done

app.get("/", function(req, res){

    
    let day = date.getDate();
    res.render("index", {dayName:day, itemNamesList:itemNames}); // the file 'index' must be present in the 'views' directory and it should contain the same html code which you want to display

});

app.post('/', function(req, res){
    console.log("this post was from the button:" + req.body.btn)
    if(req.body.btn ==='Work')
    {   
        let itemName = req.body.todoItem
        workList.push(itemName)
        res.redirect('/work');
    }
    else{
        let itemName = req.body.todoItem;
        itemNames.push(itemName);
        res.redirect('/');
    }
    
    
});

app.get('/work', function(req, res){
    res.render('index', {dayName: "Work List", itemNamesList: workList})
})

app.listen(3000, function(){
    console.log("the server is live at port 3000")
})