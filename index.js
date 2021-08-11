const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/users")
const postRoute = require("./Routes/posts")
const CategoryRoute = require("./Routes/categories")

dotenv.config();
app.use(express.json())

mongoose.connect(
    process.env.MONGO_URL,
     {
         useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true
    })
    .then(console.log("connected to mongo"))
    .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/Categories", CategoryRoute);

app.listen("5000",()=>{
    console.log("Backend is always running!")
})