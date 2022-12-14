const React = require("react");
const Def = require("../default")


function new_form() {


    return (

        <Def>

            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="/style/newPage.css" />

                    <title>Add New Book</title>
                </head>
                <body>

                        <h1>Add New Books</h1>
                    <div className="masterDiv">

                        <form method="POST" action="/home">
                            <div className="allDives">
                                <div>
                                    <label htmlFor="pic">Inpute image URL</label>
                                    <input type="url" id="pic" name="pic"  />
                                </div>
                                <div>
                                    <label htmlFor="title">Title</label>
                                    <input type="text" id="title" name="title" required />
                                </div>
                                <div>
                                    <label htmlFor="available">Quantity</label>
                                    <input type="number" id="available" name="available" required />
                                </div>
                                <div>
                                    <label htmlFor="text">Text</label>
                                    <input type="text" id="text" name="text"   required />
                                </div>
                                <input className="submit" type="submit" value="Add Books" required />
                            </div>


                        </form>


                    </div>
                            <a className="goHome" href="/home">Go Home</a>

                </body>
            </html>
        </Def>

    )
}

module.exports = new_form