const express = require("express");
const app = express();
require("dotenv").config()


//for use JSX
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())
//for use CSS
app.use(express.static("public"))



app.use("/home", require("./controllers/home"))




app.get ("*", (req, res) =>{

    res.status(404).render("./books/error404")

})


app.listen(process.env.PORT)