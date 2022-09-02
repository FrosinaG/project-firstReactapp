import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Users = () => {
  const [userList, setUserList] = useState();
  useEffect(() => {
    console.log(userList);
    axios.get("https://dummyjson.com/users")

      .then((response) => {
        setUserList(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.error();
      })

  }, [])
  if (!userList) return null;
  console.log(userList)
  const { users, firstName, lastName, birthDate, email, gender, image } = userList;
  return (
    <div className='alluser'>
   
      {users.map((data) => {
        console.log(data);
        return (
          <>
            <div className='prof'>
              <div key={data.id}>
                <p className='prof1'>First Name:{data.firstName}</p>
                <p className='prof1'>Last Name:{data.lastName}</p>
                <p className='prof1'>Gender:{data.gender}</p>
                <p className='prof1'>BirthDate:{data.birthDate}</p>
                <p className='prof1'>Email:{data.email}</p>
                <img src={data.image} alt={firstName} key={data.id}className="imgapp"/>

              </div><Link to ={`/userlink/${data.id}`} className="linkid">View more...</Link></div>
          </>);
      })}
    </div>
  )
};

export default Users