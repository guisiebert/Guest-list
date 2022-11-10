import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "../components/Card";

function App() {
  const [userName, setUserName] = useState("Amandino");
  const [userList, setUserList] = useState([{name: 'Tom Blair', timing: '10/11/2022 17:21:49'},{name: 'Wilson Ramos', timing: '11/11/2022 17:21:49'}]);
  const [user, setUser] = useState({name: '', avatar: ''})

  function handleAddUser() {
    const newUser = {
      name: userName,
      timing: new Date().toLocaleDateString("pt-br", {hour: '2-digit', minute: '2-digit', second: '2-digit'}),
    };

    setUserList((prevState) => [...prevState, newUser]);
  }

  useEffect(() => {
    fetch('https://api.github.com/users/guisiebert')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
  },[])

  return (
    <div className="container">
      <header>
        <h1>Guestlist</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil"/>
        </div>
      </header>
      <input
        type="text"
        placeholder="Add your name to the list"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button type="button" onClick={handleAddUser} >
        RSVP
      </button>
      <h2>Confirmed Guests:</h2>
      {userList.map((user, index) => (
        <Card 
          key={(index)} 
          name={user.name} 
          timing={user.timing} 
        />
      ))}
    </div>
  );
}

export default App;
