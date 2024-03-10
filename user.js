const mongosoe  = require('mongoose')

const userSchema = new mongosoe.Schema({
    username: {
        type: String,
        required: [true,'Username can not be blank ']
    },
    password: {
        type: String,
        required: [true,'Password can not be blank ']
    }
})

module.exports = mongosoe.model('User',userSchema)