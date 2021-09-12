import  Express  from "express";
// npm start - we inserted to package.json the "start": node index.js" so nn to npm run start
const app = Express();

//common http shit: get (info), put(change) , post(add info), delete 
const port = 3000;
app.get("/dark", (req,res,next) => {
    console.log("im here")
res.send(req.params)
    next();
}
)



app.get("/dark", (req, res) =>{
    res.send("hello world nigga");
}  )

app.listen(port, () => console.log("listening to port" + port));