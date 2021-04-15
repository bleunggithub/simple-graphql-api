import React, {useEffect, useState} from 'react'

import { useMutation } from '@apollo/client'
import { DELETE_USER_BY_ID } from '../GraphQL/Mutation'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';



export default function DisplayUsers({data, refetch}) {

    const classes = useStyles();

    const [deleteUserById, { error }] = useMutation(DELETE_USER_BY_ID)
    const [users, setUsers] = useState(data)

    const deleteUser = (e) => {
        const id = parseInt(e.currentTarget.value)

        deleteUserById({
            variables: {
                id
            }
        })

        if (error) console.log(error)

        refetch()
    }
    
    useEffect(() => {
        setUsers(data)
    }, [data])

    return (
        <div className={classes.container}>
            <h1>All Users</h1>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Password</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {users.map(user => (
                        <TableRow key={user.id}>
                        <TableCell component="th" scope="row">
                            {user.id}
                        </TableCell>
                        <TableCell align="right">
                            {user.first_name}{' '}{user.last_name}
                        </TableCell>
                        <TableCell align="right">{user.email}</TableCell>
                        <TableCell align="right">{user.password}</TableCell>
                        <TableCell align="right">
                            <Button name="id" value={user.id} onClick={deleteUser}>
                                <CancelIcon />
                            </Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

const useStyles = makeStyles({
    table: {
        width: '80%',
        margin: '2em auto',
    },
    container: {
        padding: '0 5% 5% 5%'
    }
});