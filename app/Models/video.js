const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const videoSchema = new Schema(
    {
        image:{
            type: String,
            default: 'https://imgur.com/3Qmaql6'
        },
        title: {
            type: String,
            required:true
        },
        
        subtitle:{
            type:String,
            unique:true,
            required:true
        },
        author:{
            type:String, 
            required:true
        }
    },
    {
        versionKey: false, 
        timestamps: true
    }
);

videoSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('video', videoSchema)