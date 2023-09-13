const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Role2Schema = new Schema({
    RoleTitle: String,
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Role'
    }
})

const Role2 = mongoose.model('Role2', Role2Schema)

module.exports = Role2