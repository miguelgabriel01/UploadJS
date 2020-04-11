const routes = require("express").Router();
const multer = require("multer")
const multerConfig = require("./config/multer")

<<<<<<< HEAD
const Post = require("./models/Posts")

routes.post("/posts", multer(multerConfig).single("file"), async (req,res) => {
    //console.log(req.file)
    const { originalname: name, size, filename: key } = req.file;

    const post = await Post.create({
        name,
        size,
        key,
        url: '',
    })
   
    return res.json(post)
=======
routes.post("/posts", multer(multerConfig).single("file"), (req,res) => {
    console.log(req.file)
   
    return res.json({ hello: "Miguel" })
>>>>>>> 56f84fe9b03397a20a6b67261715e834b9f01ce7
})


module.exports = routes