const React = require("react");
const Def = require("../default")


function home(data) {

    let booksFormatted = data.books.map((book) => {
        return (

            <div className="Div">

                <img src={book.pic} />
                <div className="textDiv">
                    <h2>{book.title}</h2>
                    <p>Available {book.available}</p>
                    <p>{book.text}</p>

                </div>

            </div>
        )
    })

    return (

        <Def>

            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="/style/home.css" />
                    <title>Home</title>
                </head>
                <body>
                    <div>

                        <h1 className="books">Books</h1>

                        <div className="mainDiv">

                            {booksFormatted}

                        </div>
                    </div>
                </body>
            </html>
        </Def>

    )
}

module.exports = home