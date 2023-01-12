// crud routes

const express = require('express')
const router = express.Router()
const {createPerson, getPerson, getPersonID,updatePerson, deletePerson} = require('../Controller/conroller.js')



router.get('/getdata',getPerson)

router.get('/getdata/:id',getPersonID)

router.post('/create',createPerson)

router.put('/update/:id',updatePerson)

router.delete('/delete/:id',deletePerson)

module.exports = router