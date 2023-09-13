const express = require('express')
const router = express.Router()

const Doctor = require('../models/Doctor')

const bcrypt = require('bcrypt')

//inscription
router.post('/inscriptionDoctor', (req, res) => {
    let {name, firstname, contact, speciality, experience} = req.body
    name = name.trim()
    firstname = firstname.trim()
    contact = contact.trim()
    speciality = speciality.trim()
    experience = experience.trim()

    if (name == "" || firstname == "" || contact == "" || speciality == "" || experience == "") {
        res.json({
            status: "FAILED",
            message: "Empty input fields!"
        })
    } else if (!/^[a-zA-Z]*$/.test(name)) {
        res.json({
            status: "FAILED",
            message: "Invalid name entered"
        })
    } else{
        const newDoctor = new Doctor({
        name,
        firstname,
        contact,
        speciality,
        experience
        })

        newDoctor.save().then(result => {
            res.json({
            status: "SUCCESS",
            message: "Inscription reussi",
            date: result,
            })
        })
        .catch(err => {
        res.json(err)
        })
    }})

module.exports = router

router.get('/doctor/:id',(req,res)=>{
    const id = req.params.id;
    Doctor.findById(id)
})