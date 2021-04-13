import React, {useEffect} from 'react'
import { useQuery, gql } from '@apollo/client'
import {GET_USERS} from '../GraphQL/Queries'

export default function GetUsers() {
    const { error, loading, data } = useQuery(GET_USERS)
    
    useEffect(() => {
        console.log(data)
    }, [data])
    
    return (
        <div>
            
        </div>
    )
}
