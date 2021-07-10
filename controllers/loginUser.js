const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = (req, res) => {
    const { username, password } = req.body;
    User.findOne({username:username}, (error,user) => {
        console.log('here')
        if (user){
        bcrypt.compare(password, user.password, (error, same) =>{
            if(same){ // if passwords match
                req.session.userId = user._id;
                loggedIn = user._id;
                res.redirect('/');
            }
            else{
                console.log('here2');
                res.redirect('/auth/login');
            }})
        }
        else{
            res.redirect('/auth/login')
        }
    })
}
    