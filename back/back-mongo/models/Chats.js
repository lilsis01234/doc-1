const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RendezVousSchema = new Schema({
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    },
    docteur:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    },
    contenu : String,
    pieceJointes: File,
    date: Date
})

const RendezVous = mongoose.model('RendezVous', RendezVousSchema)

module.exports = RendezVous