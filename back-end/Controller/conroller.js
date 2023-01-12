const SchemaPersonModel = require('../models/personSchema.js')

// read
const getPerson = async (req,res) => {
    try {
        const result = await SchemaPersonModel.find()
        // console.log(result)
        res.send(result)
    } 
    catch (err) {
        console.log(err)
    }
    // result.forEach((items)=>
    // {
    //     console.log(items.name)
    // })
} 

// get individual
const getPersonID = async (req,res) =>
{
    try{
        const personId = req.params.id

        const result = await SchemaPersonModel.findById(personId)
        console.log(result)
        res.send(result)
    }
    catch (err){
        console.log(err)
    }
}

//create
const createPerson = async (req,res) =>
{
    const personDocument = new SchemaPersonModel(
        {
            name : req.body.name,
            password : req.body.password,
            email : req.body.email,
        }
    ) 
    const result =  await personDocument.save()
    console.log(result)
    res.send(result)
}

//update
const updatePerson = async (req,res) =>
{
    const updateID = req.params.id;
    const result = await SchemaPersonModel.findByIdAndUpdate(updateID , req.body , {new:true})
    console.log(result)
    res.send(result)
}


//delete
const deletePerson = async (req,res) =>
{
    const result = await SchemaPersonModel.findByIdAndDelete(req.params.id)
    console.log(result)
    res.send(result)
}  



module.exports = {createPerson, getPerson,getPersonID,updatePerson,deletePerson} ;  


