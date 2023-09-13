const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CompteDoctorSchema = new Schema({
    email: String,
    password: String,
    compte:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    },
    role2:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Role2'
    }
})
const CompteDoctor = mongoose.model('CompteDoctor', CompteDoctorSchema)

module.exports = CompteDoctor