const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const app = express();

// Bodyparser Middleware
app.use(express.json());
app.use(cors());

// DB Config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log('MongoBD Connected...'))
    .catch(err => console.log(err, 'Oots'));

// Use Routes
app.use('/api/items', require('./routes/api/items'));
//app.use('/api/users', require('./routes/api/users'));
//app.use('/api/auth', require('./routes/api/auth'));

//Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    //Set a static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
    
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));