import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../GraphQL/Mutation'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


export default function AddUser() {
    const classes = useStyles();

    const [input, setInput] = useState({
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

    const [createUser, {error} ] = useMutation(CREATE_USER)

    const addUser = (e) => {
        e.preventDefault();

        const {first_name, last_name, email, password} = input

        createUser({
            variables: {
                first_name,
                last_name,
                email,
                password
            }
        })

        if (error) console.log(error)

        setInput({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
        })

        //fetch data
    }

    return (
        <div className={classes.container}>
            <h1>Add new user</h1>
        <form>
            <div className={classes.inputContainer}>
                <TextField required label="first_name" name="first_name" value={input.first_name} onChange={handleInputChange} type="text" className={classes.input} />
                <TextField required label="last_name" name="last_name" value={input.last_name} onChange={handleInputChange} type="text" className={classes.input} />
                <TextField required label="email" name="email" value={input.email} onChange={handleInputChange} type="email" className={classes.input} />
                <TextField required label="password" name="password" value={input.password} onChange={handleInputChange} type="password" className={classes.input} />
            </div>
            <div className={classes.inputContainer}>
                <Button variant="outlined" onClick={addUser}>Add A New User</Button>    
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
        width: '20%',
        margin: 10,
    }
});