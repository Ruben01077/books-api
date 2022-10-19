const router = require("express").Router()
const books = require("../models/home")
 



router.get("/", (req,res)=>{

    res.render("./books/home", {books})

})



router.get('/new', (req, res) => {
    res.render('books/new.jsx')
  })


  router.post('/', (req, res) => {
   
    if(!req.body.pic){
        //Default image if one is not provide
        req.body.pic = "https://assets.weforum.org/article/image/v2gQQH6Qq5EAJSemo1Yqie27aYBOHE4pSwA6jSkFHKg.jpg"

    }


    books.push(req.body)
    res.redirect("/home")
  })
  



module.exports = router