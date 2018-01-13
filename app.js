const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/apiproject', { useMongoClient: true });
mongoose.Promise = global.Promise;
var users = require('./routes/usersRouter');
const app = express();
// Middlewares

app.use(logger('dev'));
app.use(bodyParser.json());

// Routes
app.use('/users', users);


// Catch 404 and forward them to error handler
app.use((req,res,next)=>{
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});
// error handlere function
app.use((err,req,res,next)=>{
    const error = app.get('env')==='development'?err:{};
    const status = error.status || 500;
    

    res.status(status).json({
        error: {
            message:error.message
        }
    });

    console.error(err);
});


// start the server 

const port = app.get('port') || 3000;
app.listen(port,()=> console.log(`Server is listeing on part ${port}`));