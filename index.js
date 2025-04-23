const express = require('express');
const mongoose = require('mongoose');
const fileRouter = require('./routes/fileRoutes');
const app = express();
app.use(express.json());
app.use( fileRouter);

// MongoDB Connection
mongoose.connect("mongodb+srv://mmithlesh772:4CGluxtKka0334ce@cluster0.xrfjtrc.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to the database");
}).catch((err) => {
    console.log("Database connection error:", err);
});

app.listen(8000, (err) => {
    if(err){
        console.log(err, "error connecting to the server");
    }
    else{
        console.log("server is running on http://localhost:8000");
    }
});
