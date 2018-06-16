var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    basic: {
        name: {
            type: String
            // required: true
        },
        sport: {
            type: Array,
            default:[]
        },
        gender: {
            type: String
            // required: true
        },
        nationality: {
            type: String
            // required: true
        },
        married:{
            type: String
        }
    },
    about :{
        desc:{
            type:String
        },
        location:{
            type:String
        },
        team:{
            type:String
        },
        association:{
            type:String
        }
    },
    social :{
        facebook:{
            type:String
        },
        twitter:{
            type:String
        },
        instagram:{
            type:String
        },
        youtube:{
            type:String
        }
    },
    created_at: Date
});

userSchema.pre('save', function (next) {
    this.created_at = new Date();
    next();
});

var settings = mongoose.model('users', userSchema );
module.exports = settings;