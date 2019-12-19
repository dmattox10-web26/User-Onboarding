import React, { useState } from 'react';
import { Container } from 'reactstrap'

import UOForm from './components/Form'
import UOList from './components/List'

function App() {
  const [users, updateUsers] = useState([])
  const addUser = (user) => {
    updateUsers(existingUsers => [...existingUsers, user])
  }
  return (
    <div className="App">
      <Container>
        <UOForm addUser={ addUser } />
        <UOList users={ users } />
      </Container>
    </div>
  );
}

export default App;
