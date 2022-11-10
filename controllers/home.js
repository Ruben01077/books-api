const router = require("express").Router()
const books = require("../models/home")
 



router.get("/", (req,res)=>{

    res.render("./books/home", {books})

})



router.get('/new', (req, res) => {
    res.render('books/new.jsx')
  })


router.get('/:id', (req, res) => {
  
  let id = Number(req.params.id) 
  if (isNaN(id)){           //if the input is not number render error
    res.render("books/error404")
  } else if(!books[id]){    // if input is out of array render error
    
    res.render("books/error404")
  
} else {

  res.render('books/show.jsx', {book: books[id], id}) //Pass the data in places[id] to your view.
  }
})


router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!books[id]) {
    res.render('error404')
  }
  else {
    books.splice(id, 1)
    res.redirect('/home')
  }
})


  router.post('/', (req, res) => {
   
    if(!req.body.pic){
        //Default image if one is not provide
        req.body.pic = "https://assets.weforum.org/article/image/v2gQQH6Qq5EAJSemo1Yqie27aYBOHE4pSwA6jSkFHKg.jpg"
    }
    books.push(req.body)
    res.redirect("/home")
  })


  
  router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!books[id]) {
        res.render('error404')
    }
    else {
      res.render('books/edit', { book: books[id]})
    }
  })
  


  



module.exports = router