import React, {useEffect, useState} from 'react'
import { useQuery } from '@apollo/client'
import {GET_USERS} from '../GraphQL/Queries'

export default function GetUsers() {
    const { data } = useQuery(GET_USERS)
    const [users, setUsers] = useState([])

    useEffect(() => {
        if(data) setUsers(data.getAllUsers)
    }, [data])
    
    return (
        <div>
            <h1>All Users</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{ user.id }</td>
                            <td>{ user.first_name }</td>
                            <td>{ user.last_name }</td>
                            <td>{ user.email }</td>
                            <td>{ user.password }</td>
                        </tr>
                    ))}
            </table>
        </div>
    )
}
