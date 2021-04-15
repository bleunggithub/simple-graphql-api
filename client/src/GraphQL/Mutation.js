import { gql } from '@apollo/client'

export const CREATE_USER = gql`
    mutation createUser(
        $first_name: String!
        $last_name: String!
        $email: String!
        $password: String!
        ){
        createUser(
            first_name: $first_name
            last_name: $last_name
            email: $email
            password: $password
            ){
            id
        }
    }
`

export const DELETE_USER_BY_ID = gql`
    mutation deleteUserById(
        $id: Int!
    ){
        deleteUserById(
            id: $id
        ){
            id
        }
    }
`

export const UPDATE_USER_BY_ID = gql`
    mutation updateUserById(
        $id: Int!
        $first_name: String!
        $last_name: String!
        $email: String!
        $password: String!
        ){
        updateUserById(
            id: $id
            first_name: $first_name
            last_name: $last_name
            email: $email
            password: $password
            ){
            id
        }
    }
`