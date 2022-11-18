
const { default: mongoose } = require('mongoose')

const model = require('../Models/user')

const options = {
    page:1,
    limit:3
}

const parseId = (id) =>{
    return mongoose.Types.ObjectId(id)
}

/**  OBTENGO DATA DE USUARIOS
 * 
*/

exports.getData = (req, res) =>{
    model.paginate({},options ,(err, docs) =>{
        res.send({
            items: docs 
        })
    })
}

/**  
 * INSERTAR DATA DE USUARIOS
*/
exports.insertData = (req, res) => {
    const data = req.body
    model.create(data,(err,docs) =>{
        if (err){
            res.send({ error: 'Error'}, 422)
        } else{
            res.send({data:docs})
        }
    })
}

exports.updateSingle = (req, res) => {
    const { id } = req.params
    const body = req.body
    model.updateOne(
        { _id: parseId(id) },
        body,
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}

exports.deleteSingle = (req, res) => {
    const { id } = req.params
    model.deleteOne(
        { _id: parseId(id) },
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}
