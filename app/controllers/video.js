
const { default: mongoose } = require('mongoose')

const model = require('../Models/video')



const parseId = (id) =>{
    return mongoose.Types.ObjectId(id)
}

exports.getData = (req, res) =>{
    model.find({} ,(err, video) =>{
        res.send({
            items: video
        })
    })
}


exports.insertData = (req, res) => {
    const data = req.body
    model.create(data,(err,video) =>{
        if (err){
            res.send({ error: 'Error'}, 422)
        } else{
            res.send({data:video})
        }
    })
}

exports.updateSingle = (req, res) => {
    const { id } = req.params
    const body = req.body
    model.updateOne(
        { _id: parseId(id) },
        body,
        (err, video) => {
            res.send({
                items: video
            })
        })
}

exports.deleteSingle = (req, res) => {
    const { id } = req.params
    model.deleteOne(
        { _id: parseId(id) },
        (err, video) => {
            res.send({
                items: video
            })
        })
}
