const express = require('express')
const app = express()
const path = require('node:path')

console.log('Hello from node');

app.get('/', function (req, res) {
  // res.send('<h2>Type 9... THE PEACEMAKER</h2>')
  res.sendFile(path.join(__dirname, 'index.html'));
})

// app.listen(3000)
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));

