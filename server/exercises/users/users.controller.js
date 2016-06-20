var User = require('./users.model.js');
module.exports = function () {
    var User = require ('./users.model');
    
    
    function query(req, res) {
      User.find().exec()
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((err) => {
        res.status(500).send('Cannot read users from db');
      })
    };
    
    function remove (req, res) {
        User.findByIdAndRemove(req.params.id)
        .then(() => res.status(200).send('User removed'))
        .catch((err) => res.status(500).send('Cannot remove user'));
    }
    
    function update (req, res) {
        User.findByIdAndUpdate(req.params.id, {$set: {name: req.body.name}})
        .then(() => res.status(200).send('User updated'))
        .catch((err) => res.status(500).send('Cannot update user'))
    }
    
    
    function create(req, res) {
      var newUser = new User(req.body);
      newUser.save()
      .then(() => res.status(200).send('user successfully created'))
      .catch((err) => res.status(500).send('Cannot create new user'))
    }
    
    //public API
    return {
        query: query,
        create: create,
        remove: remove,
        update: update,
    }
}