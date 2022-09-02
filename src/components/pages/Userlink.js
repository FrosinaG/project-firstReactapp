import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Userlink = () => {
  let { id } = useParams();
  let location = useLocation();

  const [userlink, setUserlink] = useState();

  console.log(useParams());
  console.log("location", location);

  const apicall = () => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((data) => setUserlink(data.data));
  };

  useEffect(() => {
    apicall();
  }, []);
  if (!userlink) return null;
  const { firstName, lastName, email, image, birthDate } = userlink;
  return (
    <div className="user-card">
      <div className="user-text">
        <p className='prof1'>First Name:{firstName}</p>
        <p className='prof1'>Last Name:{lastName}</p>
        <p className='prof1'>BirthDate:{birthDate}</p>
        <p className='prof1'>Email:{email}</p>
      </div>
      <div className="img-user">
        <img src={image} alt={firstName} key={id} className="imgapp" />
      </div>
    </div>
  );
};

export default Userlink;
