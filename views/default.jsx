const React = require("react");

function Def(html) {

    return (

        <html>
            <head>
                <link rel="stylesheet" href="./style/default.css" />
            </head>
            <body>


                {html.children}
            </body>
        </html>


    )


}

module.exports = Def