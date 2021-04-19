const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blogDatabase',{useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(()=>{console.log('connection Successfull...')}).catch((e)=>{console.log('Error')});