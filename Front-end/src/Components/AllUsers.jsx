import React ,{useState} from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import axios from 'axios';
import { useEffect } from "react";
import  getUsers  from '../service/api';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link  } from "react-router-dom"; 
// import { useNavigate } from "react-router-dom";
// import DeleteUser from '../service/api';
// import EditUser from "./EditUser.jsx";


// Get All Users

const AllUsers = () => {

    const [users, setUsers] = useState([])

    // const navigate = useNavigate()

    useEffect(() => {
        getallUsers()

    },[])

    const getallUsers = async () => {
        const responseUsers = await getUsers()
        setUsers(responseUsers.data)
        //console.log(responseUsers.data)
    }
    // const editbtn = (id) => {
    //     console.log(id)
    //     navigate(`/getdata/${id}`)
    //     // Component={Link} to={`/update/${user._id}`}
    // }
    const delbtn = async (id) => {
        console.log(id)
        try {
            return await axios.delete(`http://localhost:12000/delete/${id}`)
        }
        catch (err) {
            console.log('Error while calling api Delete Users', err)
        }
    }
    return (
        <Table>
            <TableHead >
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>NAME</TableCell>
                    <TableCell>PASSWORD</TableCell>
                    <TableCell>EMAIL</TableCell>
                    <TableCell></TableCell>

                </TableRow>
            </TableHead>

            <TableBody >
                {
                    users.map(user => (

                        <TableRow key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.password}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Button component={Link} to={`/update/${user._id}`}>
                                    <EditIcon />
                                </Button>

                                <Button onClick={() => delbtn(user._id)} color='secondary'>
                                    <DeleteForeverIcon />
                                </Button>

                            </TableCell>

                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
export default AllUsers;


//Work