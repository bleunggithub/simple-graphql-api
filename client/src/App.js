import React, {useEffect, useState} from 'react'
import './App.css';

import DisplayUsers from './Component/DisplayUsers';
import AddUser from './Component/AddUser';
import UpdateUser from './Component/UpdateUser';

import { useQuery } from '@apollo/client'
import { GET_USERS } from './GraphQL/Queries'

function App() {

  const { data, refetch} = useQuery(GET_USERS) //error, loading
  const [users, setUsers] = useState([])

  useEffect(() => {
    if(data) setUsers(data.getAllUsers)
  }, [data])

  return (
    <>
      <AddUser refetch={refetch}/>
      <UpdateUser refetch={refetch}/>
      <DisplayUsers data={users} refetch={refetch} />
    </>
  );
}

export default App;
