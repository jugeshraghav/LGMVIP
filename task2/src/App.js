
import {useState} from "react";
import './App.css';


function App() {

    const [users, setUsers]= useState([false]);

    function displayCards(){
      const url = "https://reqres.in/api/users?page=1";
      fetch(url)
      .then((response)=>response.json())
      .then((data)=>{
       setUsers(data.data);
      })
     
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
        (users.length===0)? (<h1>No Data Found</h1>) :

          users.map((user,index)=>(
                 <div className="Card" key={index}> 
                 <div >
                     <img src={user.avatar} alt="img"></img>
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
