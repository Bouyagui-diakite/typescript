import React from 'react';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './Heading';
import Oscar from './Oscar';
import Button from './Button';
import Input from './Input';
import Container from './Container';
import User from './components/state/User';




function App() {
  const personName = {
    first: 'Bouyagui',
    last: 'Diakite'
  }

  
  const nameList = 
  [
      {
          first: 'Barry',
          last: 'Allen',
      },

      {
          first: 'Oliver',
          last: 'Queen',
      },

      {
          first: 'Kara',
          last: 'Danvers',
      }
  
  ]
  return (
    <div className="App">

<Greet name="Bouyagui" isLoggedIn= {true}/>
      {/* 

      

      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status ='loading'/>
      <Heading>Placeholder Text</Heading>
      <Oscar>
          <Heading>Oscar goes to Nathalie portman</Heading>
      </Oscar>
      <Button handelClick={(event, id) => {
        console.log('Button was clicked', event, id);
        
      }}/>
      <Input value='' handleChange={(event) => console.log(event)
      }/> */}
      {/* <Container styles={{ border: '1px solid black', padding: '1rem', marginTop: '40px' }}/> */}
     <User/>
    </div>
  );
}

export default App;
