const mongoose = require('mongoose');

const { keys } = require('./keys');

mongoose.connect(databse.URI,{
    useNewUrlParser: true
}).then(db => console.log('%c Database Conectada',"color:green"))
.catch(err => console.log(`%c Error db: ${err}`,"color:white;background:red"))