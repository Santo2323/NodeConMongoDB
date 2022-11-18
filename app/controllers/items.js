const res = require("express/lib/response")

exports.getData = (req, res) =>{
    res.send({data:'Esto viene desde ITEMS'})
}