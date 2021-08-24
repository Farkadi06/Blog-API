const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/users");
const postRoute = require("./Routes/posts");
const CategoryRoute = require("./Routes/categories");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/assets")))

mongoose.connect(
    process.env.MONGO_URL,
     {
         useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true
    })
    .then(console.log("connected to mongo"))
    .catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "assets")
    },filename: (req,file,cb)=>{
        cb(null,"Oussama.png")
    }
})

const upload = multer({storage: storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file is uploaded...")
})

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/Categories", CategoryRoute);

app.listen("5000",()=>{
    console.log("Backend is always running!")
})