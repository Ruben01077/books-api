const React = require("react")
const Def = require("../default")


function edit_form(data){


    return(

        <Def>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="/style/newPage.css" />

                    <title>Edit</title>
                </head>
                <body>

                        <h1>Edit</h1>
                    <div className="masterDiv">

                        <form method="POST" action={`/home/${data.book.id}?_method=PUT`}>
                            <div className="allDives">
                                <div>
                                    <label htmlFor="pic">Inpute image URL</label>
                                    <input type="url" id="pic" name="pic" value={data.book.pic} />
                                </div>
                                <div>
                                    <label htmlFor="title">Title</label>
                                    <input type="text" id="title" name="title" value={data.book.title} required />
                                </div>
                                <div>
                                    <label htmlFor="available">Quantity</label>
                                    <input type="number" id="available" name="available" value={data.book.available} required />
                                </div>
                                <div>
                                    <label htmlFor="text">Text</label>
                                    <input type="text" id="text" name="text" value={data.book.text}   required />
                                </div>
                                <input className="submit" type="submit" value="Add Books"  required />
                            </div>


                        </form>


                    </div>
                            <a className="goHome" href="/home">Go Home</a>

                </body>
            </html>
        </Def>


    )


}

module.exports = edit_form



