const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String
        },
        avatar:{
            type: String,
            default: 'httpt://image.com'
        },
        email:{
            type:String,
            unique:true,
            required:true
        }
    },
    {
        versionKey: false, 
        timestamps: true
    }
);

userSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('User', userSchema)