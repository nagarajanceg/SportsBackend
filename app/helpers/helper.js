module.exports = function () {
    var User = require('../models/users');
    var insertUser = function (details, callback) {
        var user = new User(details);
        console.log("user from helper ",user);
        user.save(function (err) {
            if(err){
                console.log("Error at saving User");
                callback(null, false);
                throw err;
            }
            callback(null, true)
        });
    };
    var getUsers = function (callback) {
      User.find({}, function (err, users) {
          if(err){
              console.log("error at fetching Users");
              throw err;
          }
          callback(null, users);
      });
    };
    return{
        insertUser: insertUser,
        getUsers: getUsers
    }
}