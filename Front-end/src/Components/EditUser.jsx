// import  Button from "@mui/material"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import getUser from '../service/api'
import { useParams } from 'react-router-dom';


//Component
const EditUser = () => {

    const defaultValues = {
        name: '',
        password:'',
        email:''
    }
    const [editUser, setEditUser] = useState(defaultValues)
    const {id} = useParams()

    useEffect(() => {
        singleUser()
    },[])
     
    const singleUser = async () => {
        const response = await getoneUser(id)
        console.log('data agaya' + response)
        setEditUser(response.data)    
    }
    const getoneUser = async(id) => 
    {
        try{
            return await axios.get(`http://localhost:12000/getdata/${id}`)
        }
        catch(err)
        {
            console.log('Error while calling single user ' + err)
        }
    }
    

    const formik = useFormik(
        {
            initialValues: {
                name: "",
                email: "",
                password: ""
            },
            validationSchema: Yup.object({
                name: Yup
                    .string().min(2).max(30)
                    .required('Please enter a name'),
                email: Yup
                    .string().email().required('Please enter a email'),
                password: Yup
                    .string().min(6).max(30)
                    .required('Please enter a password')
            }),
            onSubmit: async (values) => {
                console.log(values)
                // try {
                //     return await axios.post(`http://localhost:12000/create`, values)
                // }
                // catch (err) {
                //     console.log('Error while calling api', err)
                // }
            }
        }
    )
    // console.log(formik)
    // console.log(Yup)


    return (
        <>
            <h1>Edit Page</h1>
            <form onSubmit={formik.handleSubmit}>

                <TextField type='text' name='name' id='name' onChange={formik.handleChange} value={editUser.name} label="Name" variant="standard" />
                {formik.errors.name && formik.touched.name ? (<p>{formik.errors.name}</p>) : null}
                <br /> <br />

                <TextField type='password' name='password' onChange={formik.handleChange} value={editUser.password} id='password' label="Password" variant="standard" />
                {formik.errors.password && formik.touched.password ? (<p>{formik.errors.password}</p>) : null}
                <br />
                <br />     

                <TextField type='email' name='email' id='email' onChange={formik.handleChange} value={editUser.email} label="Email" variant="standard" />
                {formik.errors.email && formik.touched.email ? (<p>{formik.errors.email}</p>) : null}

                <br />
                <br />
                <Button type='submit' variant="contained">Submit</Button>
                <br />
                <br />
            </form>
        </>
    )
}

export default EditUser;

//Work