import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_USER_BY_ID } from '../GraphQL/Mutation'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


export default function UpdateUser({refetch}) {
    const classes = useStyles();

    const [input, setInput] = useState({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setInput({
            ...input, [name]:value
        })
    }

    const [updateUserById, {error} ] = useMutation(UPDATE_USER_BY_ID)

    const updateUser = (e) => {
        e.preventDefault();

        const { first_name, last_name, email, password } = input
        
        const id = parseInt(input.id)

        updateUserById({
            variables: {
                id,
                first_name,
                last_name,
                email,
                password
            }
        })

        if (error) console.log(error)

        setInput({
            id: "",
            first_name: "",
            last_name: "",
            email: "",
            password: "",
        })
        
        refetch()
    }

    return (
        <div className={classes.container}>
            <h1>Update user</h1>
        <form>
            <div className={classes.inputContainer}>
                <TextField required label="ID" name="id" value={input.id} onChange={handleInputChange} type="text" className={classes.input} />
                <TextField required label="First Name" name="first_name" value={input.first_name} onChange={handleInputChange} type="text" className={classes.input} />
                <TextField required label="Last Name" name="last_name" value={input.last_name} onChange={handleInputChange} type="text" className={classes.input} />
                <TextField required label="Email" name="email" value={input.email} onChange={handleInputChange} type="email" className={classes.input} />
                <TextField required label="Password" name="password" value={input.password} onChange={handleInputChange} type="password" className={classes.input} />
            </div>
            <div className={classes.inputContainer}>
                <Button variant="outlined" onClick={updateUser}>Update User Details</Button>    
            </div>
        </form>
        </div>
    )
}



const useStyles = makeStyles({
    container: {
        margin:'5% 5% 0 5%'
    },
    inputContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: '3em'
    },
    input: {
        flexGrow: 1,
        margin: 10,
    }
});