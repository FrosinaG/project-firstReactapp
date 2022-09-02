
import React from 'react'

const Contactus = () => {
  return (
    <div className='contact'>
      <h3>Contact</h3>
      <form>
        <label id="FirstName">First Name</label>
        <input type="text" name="FirstName" id="FirstName" />
        <label id="LastName">Last Name</label>
        <input type="text" name="lastname" id="lastName" />
        <label id="email"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
        </svg> E-mail</label>
        <input type="email" name="email" id="email" />
        <label id="textarea">Messages</label>
        <textarea></textarea>
        <div className='smal'>
          <input
            type="checkbox"
            id="checbox"
            name="chec"
            valute="on"
            className="mark1"
          />
          <button type="submit" onClick={(e) => submitform(e)} className='mark'>Submit</button>
        </div>
      </form>
    </div>
  )
};

const submitform = (e) => {

  e.preventDefault();
  console.log("submit")
  const postUrl = "https://jsonplaceholder.typicode.com/posts";
  const formdata = {
    FirstName: " FirstName",
    lastname: "lastname",
    email: "email",

  };
  fetch(postUrl, {
    method: "POST",
    body: JSON.stringify(formdata),
  })
    .then((responce) => responce.json())
    .then((resultat) => {
      console.log("success", resultat);
    })
    .catch((error) => {
      console.error("Error", error);
    })
}

export default Contactus