const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true, useUnifiedTopology: true});
var id = "60dd4b2aa63fed27108bc23f";

BlogPost.find({
    title:/The/}, (error, blogspot) =>{
    console.log(error,blogspot)
})
        
BlogPost.findById(id, (error, blogspot) =>{
    console.log(error,blogspot)
})

    
