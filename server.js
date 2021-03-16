const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
// const connectDB = require('./config/db');
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB is connected')

    }
    catch (err) {
        console.log(`error: ${err.message}`)
    }
}

dotenv.config({path: './config/config.env'})
const articleRoutes = require('./routes/articleRoutes')

const app = express();
// parse incoming traditional HTML form submits
app.use(express.urlencoded({ extended: false }))

// parse incoming JSON payloads
app.use(express.json())

connectDB();

app.use('/api/v1/articles', articleRoutes)

if (process.env.NODE_ENV == 'production') {

    app.use(express.static('client/build'));
    // app.use(express.static(path.join(__dirname, "client", "build")))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));

}




const PORT = process.env.PORT || 5000

app.listen(PORT)


