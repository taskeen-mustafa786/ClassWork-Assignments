import React from 'react';
import {useState} from 'react';
import './style.css';

export default function App() 
{
  const [friendName,setFriendName] = useState();
  const [friendList,setFriendList] = useState([]);

  function addFriend()
  {
    setFriendName(document.getElementById("friendname").value)
    if(friendName.trim()!='')
     setFriendList([...friendList,friendName])
     setFriendName('');
  }

  

  return (
    <div >
     <input 
      type="text"
      id = "friendname"
      placeholder = "Enter name of friend"
      value = {friendName}
      onChange={(e) => setFriendName(e.target.value)}
       required
       
        ></input>
     <br/>
     <button onClick = {
       function ()
       {
        addFriend();
       }
     } >Add to friend list</button>
     <button onClick = {() =>setFriendName('')}
     >Clear</button>
     <br/>
     <hr/>
     <br/>
     <div>
        
        <h3>Friends</h3>
        <button onClick = {()=>(setFriendList([]))}>Clear List</button>
        <hr />
        {
        friendList.length === 0 ? (
          <div>No friend added yet</div>
        ) : (
          friendList.map((friend, index) => (
            <div key={index}>{index+1}. {friend}</div>
          )))}
        <hr />
        
      </div>
    </div>
  );
}
