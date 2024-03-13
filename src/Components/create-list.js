import React, { useState } from 'react';


const Createlist = () => {
  const [userList, setUserList] = useState([]);
  const [inputText, setInputText] = useState("");

  const updateName = (event) => {
    setInputText(event.target.value);

  };

  const addUser = () => {
    // setUserList()
    const newUser = {
      id: userList.length,
      name: inputText
    }
    const arr = [newUser, ...userList]
    setUserList(arr)
    setInputText("")
  }
  const deleteUser = (id) => {
    // setUserList()
    const filteredUserList = userList.filter(item => item.id !== id)
    setUserList(filteredUserList);
  }

  console.log('test-------userList', userList)
  console.log('test-------inputText', inputText)


  return (
    < div style={{ padding: 30 }}>

      Name: <input type='text' name='name' onChange={updateName} value={inputText} placeholder='Enter Name' style={{ padding: '5px 10px', width: 300, fontSize: 17 }} />&nbsp;&nbsp;<button onClick={addUser}>Add</button>

      <ul>
        {userList.map((user) => (
          <li key={user.id}>{user.name} <button onClick={() => deleteUser(user.id)}>X</button></li>
        ))}
      </ul>
    </div>
  );
};

export default Createlist;