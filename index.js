const express = require('express');
const cors = require('cors');
require('dotenv').config();

require('./config/mongoose')

const port = process.env.PORT || 5000


const app = express();

// MIDDLEWARE 
app.use(express.json());
app.use(cors());


// CONNECTING TO THE ROUTES 
app.use('/', require('./routes/todoRoutes'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`yup server running at port: ${port}`)
})