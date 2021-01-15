const express = require('express'),
fs = require('fs')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  fs.readFile('./index.html', (err, html)=>{
      if (err){
          return res.status(500).json({
              'message': 'An error occured while loading the html file'
          })
      }
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html);  
        res.end();  
  })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);