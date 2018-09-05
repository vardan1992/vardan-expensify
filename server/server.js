const express = require('express');

const path = require('path');

const app = express();

const publicPath = path.join(__dirname,'..','public');

const port = process.env.PORT || 3000;

// serve asset
app.use(express.static(publicPath));

// server index.html for all request

app.get('*', (req,res) => {
res.sendFile(path.join(publicPath,'index.html'));
})


// start the server
app.listen(port, () => {
console.log("server is up");
})