const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');

require('dotenv').config();
const { PORT } = process.env;

const app = express();
const port = PORT || 5050;

require('./config/database');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
    cors({
        origin: ['http//localhost:3000'],
        methods: 'GET,POST,PUT,HEAD,DELETE',
        credentials: true,
    })
)

app.use(routes);


app.listen( port, 
    () => {console.log(`Server is running on ${port}`)}
);