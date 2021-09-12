const express = require('express');
const app = express();
const {sup, how} = require('./middle');



app.get('/',sup,how, function(req,res){
    res.send("<h1>print for page...</h1>");
})

app.listen(3000,err => {
    if(err){
        console.log(err);
        return;
    }
    console.log("listening at port 3000");
});