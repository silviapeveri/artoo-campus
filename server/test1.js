console.log('this file contains mongodb excercises');

var settings = require('./settings');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(settings.mongoUrl, function(){
    console.log('db connected');
});

// init schema db
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: String,
    surname: String,
    birthday: Date,
    updatedAt: Date,
});

// methods
userSchema.methods.greet = function (name){
    console.log('Hello ' + name + ' from ' + this.name + '!');
};

userSchema.methods.sayAge = function(){
    var today = new Date();
    var age = today.getFullYear()-this.birthday.getFullYear();
    console.log('I am ' + age + ' years old.');
};

// middlewares
userSchema.pre('save', function(next){
    this.updatedAt = new Date ();
    var err;
    if (this.name.length >10) err => (new Error ('something went south'));
    next(err);
})

var User = mongoose.model('User', userSchema);

var bob = new User({
    name: 'Bob Doe',
    birthday: new Date(1990, 2, 17),
});

var john = new User({
    name: 'John Doe',
    birthday: new Date(1987, 11, 17),
});

console.log(john.id);
john.greet('Anna');
john.sayAge();

// --------------- CREATE ------------------
john.save().then(function(){
    console.log('User successfully saved');
}).catch((err) => {
    console.error('Error in saving the user '+ err);
});

// --------------- READ ------------------
User.find({name : 'Bob Doe'}).exec().then((users) => {
    console.info(users);
})
// find mi torna una lista, findOne mi torna un oggetto

// --------------- UPDATE ------------------
User.findOne({name : 'John Doe'}).exec()
    .then((users) => {
        users.name = 'John';
        users.surname = 'Doe';
        return users.save();
    })
    .then(() => {
        console.log('user updated');
    })
    .catch(err => console.error(err));
    
// --------------- UPDATE OTTIMIZZATO ------------------
// findOneAndUpdate
    
// --------------- DELETE OTTIMIZZATO ------------------

// User.findOne({name: 'Bob'}).exec()
//     .then((users) => {
//         return users.remove();
//     })
//     .then(data => console.info('User successfully removed'))
//     .catch(err => console.error(err));

    

var express = require('express');
var app = express();

app.listen(3000, function () {
    console.info('my server is app and running');
})