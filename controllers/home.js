const router = require("express").Router()
 



router.get("/", (req,res)=>{

    let books = [{

        pic: "https://assets.weforum.org/article/image/v2gQQH6Qq5EAJSemo1Yqie27aYBOHE4pSwA6jSkFHKg.jpg",
        title: "The Shinobi Initiative",
        available: 10,
        text: "The realoty- blending adventurews of a clandestine service agency in the year 2166"
    },

    {
        pic: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-06/Kratu-book-2x1-bn-220614-6d2865.jpg",
        title: "Tess the Wonder Dog",
        available: 3,
        text: "The tale of a dog who gets super powers"

    },
    {
        pic: "https://www.greenqueen.com.hk/wp-content/uploads/2017/02/Pexels-Trees.jpeg",
        title: "The Annals of Arathrae",
        available: 8,
        text: "This anthology tells the intertwined narratives of six fairy tales."

    },
    {
        pic: "https://cdn.britannica.com/05/94905-050-1830515C/Whirlpool-Galaxy-NGC-5195-Sc.jpg",
        title: "WARP",
        available: 4,
        text: "A time-space anomaky folds matter from different points in earth's history in on itself, sending six unlikely hereoes on a race against time as worlds literally collide."

    }]

    res.render("./books/home", {books})

})



router.get('/new', (req, res) => {
    res.render('books/new.jsx')
  })






module.exports = router