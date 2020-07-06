const express = require('express');
const app = express();
const fs = require('fs')

app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.static('public'));



app.get('/store', function(req, res) {
    fs.readFile('data.json', function(error, data) {
      if (error) {
        res.status(500).end()
      } else {
          console.log( JSON.parse(data));
          
        res.render('index.ejs', {
          item: JSON.parse(data)[0]
        })
      }
    })
  })


app.listen(3000);
console.log("Running on port 3000");
