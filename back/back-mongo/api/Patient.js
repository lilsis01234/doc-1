const express = require('express')
const router = express.Router()

const Patient = require('../models/Patient')

const bcrypt = require('bcrypt')


//inscription
router.post('/inscriptionPatient', (req, res) => {
    let {name, firstname, contact,address,weight, dateOfBirth} = req.body
    name = name.trim()
    firstname = firstname.trim()
    contact = contact.trim()
    address = address.trim()
    weight = weight.trim()
    dateOfBirth = dateOfBirth.trim()

    if (name == "" || firstname == "" || contact == "" || weight == "" || address == "" || dateOfBirth == "") {
        res.json({
            status: "FAILED",
            message: "Empty input fields!"
        })
    } else if (!/^[a-zA-Z]*$/.test(name)) {
        res.json({
            status: "FAILED",
            message: "Invalid name entered"
        })
    } else {
                   const newPatient = new Patient({
                    name,
                    firstname,
                    contact,
                    weight,
                    address,
                    dateOfBirth
                   })

                   newPatient.save().then(result => {
                       res.json({
                        status: "SUCCESS",
                        message: "Inscription reussi",
                        date: result,
                       })
                   })
                   .catch(err => {
                    res.json(err)
                   })
             }
        })


module.exports = router