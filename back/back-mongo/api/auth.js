
const express = require('express')
const router = express.Router()

const Doctor = require('../models/Doctor')
const CompteDoctor = require('../models/CompteDoctor')
const Role2 = require('../models/Role')

const bcrypt = require('bcrypt')
router.post('/login',(req,res)=>{
    CompteDoctor.findOne({email:req.body.email})
    .populate('Role2',['id','titreRole','role'])
})