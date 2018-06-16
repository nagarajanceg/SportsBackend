var queryHelper = require("../helpers/helper")();
module.exports = function () {
    var addUser = function (req, res, next) {
      console.log(req.body);
      queryHelper.insertUser(req.body, function (err, status) {
          if(status){
              res.send({status:true, message:"Success in Creating User"});
          }else{
              res.send({status:false, message:"Failure in Creating User"});
          }
      });
    };
    var fetchUser = function (req, res, next) {
        queryHelper.getUsers(function (err, users) {
            if(err){
                res.send({status: false, error: "problem in fetch users"})
            }else{
                res.send({status: true, users: users})
            }
        });
    };
    return{
        addUser : addUser,
        getUser : fetchUser
    }
};