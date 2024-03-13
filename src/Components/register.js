import React, { useState } from 'react';


const Register = () => {
  const [name, setName] = useState('');

  const updateName = (event) => {
    setName(event.target.value);
  };

  return (
    < div style={{ padding: 30 }}>

      Name: <input type='text' name='name' value={name} onChange={updateName} placeholder='Enter Name' style={{ padding: '5px 10px', width: 300, fontSize: 17 }} />
      <h1> {name} </h1>
    </div>
  );
};

export default Register;