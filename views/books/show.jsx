const React = require("react");


function show(data){

return(

   
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> {data.book.title}</title>
        <link rel="stylesheet" href="/style/show.css" />
    </head>
    <body>
    
    <main>

        <div className="mainDiv">
            
            <div className="picDiv"><img src={data.book.pic} alt="" /></div>
            
            <div className="infoDiv">   
            
                <h1>{data.book.title}</h1>
                <h3>Available: {data.book.available}</h3>
                <h3>{data.book.text}</h3>

            
            </div>
        </div>


 


    </main>

        
    </body>
    </html>



)

}

module.exports = show