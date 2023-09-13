const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoleSchema = new Schema({
    RoleTitle: String,
})

const Role = mongoose.model('Role', RoleSchema)

module.exports = Role