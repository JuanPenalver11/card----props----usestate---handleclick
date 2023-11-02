import Profile from "./img/Profile.jpg";
import React, { useState } from "react";
import Star from "./component/Star";

import "./App.css";

function App() {
  const [contact, setContact] = useState({
    name: "Jhon",
    surname: "Jhonson",
    phone: "+(0042) 608 234 786",
    email: "jhon.jhonson@email.es",
    isFavourite: true,
  });

  function filled() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavourite: !prevContact.isFavourite,
    }));
  }

  return (
    <div className="App">
      <div className="main">
      <div className='card'>
        <img className='card--img' src={Profile} alt=''/>
        <div className='card--info'>

          <Star isFilled = {contact.isFavourite} handleClick={filled}/>

          
          <h2 className='card--name'>{contact.name} {contact.surname}</h2>
          <p className='card--phone'>{contact.phone}</p>
          <p className='card--email'>{contact.email}</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
