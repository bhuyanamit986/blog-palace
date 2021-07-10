const mongoose = require('mongoose');
const BlogPost = require('models/BlogPost');
mongoose.connect('mongodb://localhost:my_database', {useNewUrlParser: true, useUnifiedTopology: true});
var id = "5cb436980b33147489eadfbb";
BlogPost.findByIdAndUpdate(id,{
    title:'Updated title'
    }, (error, blogspot) =>{
    console.log(error,blogspot)
})

// Delete
var id = "5cb436980b33147489eadfbb";
BlogPost.findByIdAndDelete(id, (error, blogspot) =>{
    console.log(error,blogspot)
})

    