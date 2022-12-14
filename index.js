const express = require("express");
const app = express();
const methodOverride = require("method-override")  // For Edit(put) and Delet methods
require("dotenv").config()


//for use JSX
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())
//for use CSS
app.use(express.static("public"))
//Remember, when we send data with the POST verb, that data gets encrypted for its trip across the internet. Because it is protected this way while in transit, that makes it extra safe for usernames, passwords, and other sensitive data. However, it also means we will need an extra tool to decrypt that data for us
app.use(express.urlencoded({ extended: true }))
// For Edit(put) and Delet methods
app.use(methodOverride("_method"))




app.use("/home", require("./controllers/home"))
app.use("/", require("./controllers/home"))




app.get ("*", (req, res) =>{

    res.status(404).render("./books/error404")

})


app.listen(process.env.PORT)