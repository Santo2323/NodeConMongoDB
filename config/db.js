const mongoose = require ('mongoose')

const DB_URI = `mongodb+srv://santo2323:1502santiB@pruebanode.iu12v2r.mongodb.net/?retryWrites=true&w=majority`

module.exports = () => {
    
    const connect = () => {
        mongoose.connect(
            DB_URI,
            {
                keepAlive:true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                if (err){
                console.log('DB:ERROR');
            } else {
                console.log('conexion exitosa')
            }
        }
        )

    }

    connect();
}