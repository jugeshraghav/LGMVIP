
import {useState} from "react";
import './App.css';
import loader from './loading2.gif';


function App() {

    const [users, setUsers]= useState([]);

    const displayCards = async()=>{
      const response = await fetch("https://reqres.in/api/users?page=1")
       const jsonResponse = await response.json();
       setUsers(jsonResponse.data);
      }

  return (
    <div className="bodyContainer">

      <div className="navbar">
        <ul>
          <li>Kemcho</li>
          <li><button onClick={displayCards}>Get Users</button></li>
        </ul>
      </div>

      <div className="CardContainer">
      {
        (users.length===0) ? <img src={loader} alt="loader" style={{display:"block", margin:"auto"}}></img>:

          users.map((user,index)=>(
                 <div className="Card" key={index}> 
                 <div >
                     <img className="cardImage" src={user.avatar} alt="img"></img>
                     <div className="content">
                     <p className="name">{user.first_name} {user.last_name}</p>
                     <p>{user.email}</p>
                     </div>
                 </div>
                 </div>
          ))
      }
      </div>
    
    </div>
  );
}

export default App;
