const routes = require("express").Router();
const multer = require("multer")
const multerConfig = require("./config/multer")

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
})


module.exports = routes