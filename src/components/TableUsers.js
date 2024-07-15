import Table from 'react-bootstrap/Table';
import { fetchAllUsers } from '../Services/UserService';
import { useEffect, useState } from 'react';

const TableUsers = (props) => {
  const [listUsers, setListUsers] = useState([])

  useEffect(()=>{
    getUsers()
  }, [])

  const getUsers = async ()=>{
    let response = await fetchAllUsers()
    if(response && response.data){
      setListUsers(response.data)
    }
  }


  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First name</th>
            <th>Last name</th>
          </tr>
        </thead>
        <tbody>
          {
            listUsers && listUsers.length > 0 &&
            listUsers.map((user)=>(
            <tr key={user.id}>
               <td>{user.id}</td>
               <td>{user.email}</td>
               <td>{user.first_name}</td>
               <td>{user.last_name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default TableUsers;
