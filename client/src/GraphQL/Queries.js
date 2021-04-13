import { gql } from '@apollo/client'

export const GET_USERS = gql`
    query{
        getAllUsers{
            id
            first_name
            last_name
            email
            password
        }
    }
`