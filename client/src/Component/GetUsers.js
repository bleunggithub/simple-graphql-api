import React, {useEffect, useState} from 'react'
import { useQuery } from '@apollo/client'
import { GET_USERS } from '../GraphQL/Queries'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CancelIcon from '@material-ui/icons/Cancel';



export default function GetUsers() {

    const classes = useStyles();

    const { data } = useQuery(GET_USERS) //error, loading
    const [users, setUsers] = useState([])

    useEffect(() => {
        if(data) setUsers(data.getAllUsers)
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
                        <TableCell align="right"><CancelIcon /></TableCell>
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