const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const querys = require('./routes/querys');

//Port Number
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use('/querys', querys);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'view')));

app.get('/', (req, res) => {
    res.send('Invalid Endpoint')
});

// Start Server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

