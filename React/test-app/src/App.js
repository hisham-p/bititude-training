import React,{ useState } from 'react'; 
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState] =  useState({
  persons : [
      { name : 'Max' , age : 28 },
      { name : 'Mac' , age : 24 },
      { name : 'Marina' , age : 22 }
  ],
  otherState : "some other value"
  });

  console.log(personsState);

const switchNameHandler = () => {
  // console.log('was clicked');
  // this.state.persons[0] = 'MadMax' <--- Don't assign like this
  setPersonsState({
    persons :[
      { name : 'MadMax' , age : 29 },
      { name : 'Macaroni' , age : 25 },
      { name : 'Maria' , age : 23 }
  ]
   });
}

  return (
    <div className="App">
      <h1>Hi I am React app</h1>
      <p>Awsome react application</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies : Eats Apple</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
 
  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi ,I am React app'));
}

export default App;


