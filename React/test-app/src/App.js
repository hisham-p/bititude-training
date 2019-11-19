import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
// import styled from 'styled-components' import Radium from 'radium';
//  const StyledButton = styled.button ` background-color: ${props => props.alt ? 'red'
// : 'green'}             font: inherit;             color: white; border: 1px
// solid blue;             padding: 8px;             cursor: pointer;  &:hover {
//                 background-color: white;           color: ${props =>
// props.alt ? 'red' : 'green'}             }      `;

class App extends Component {
    state = {
        persons: [
            {
                id: '1',
                name: 'Max',
                age: 28
            }, {
                id: '2',
                name: 'Manu',
                age: 29
            }, {
                id: '3',
                name: 'Stephanie',
                age: 26
            }
        ],
        otherState: 'some other value',
        showPersons: false
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {
                    name: newName,
                    age: 28
                }, {
                    name: 'Manu',
                    age: 29
                }, {
                    name: 'Stephanie',
                    age: 27
                }
            ]
        })
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this
            .state
            .persons
            .findIndex(pers => {
                return pers.id === id;
            });
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});

    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    }

    deletePersonHandler = (personIndex) => {

        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    render() {

        // const style = {     backgroundColor: 'green',     font: 'inherit',     color:
        // 'white',     border: '1px solid blue',     padding: '8px',     cursor:
        // 'pointer',     ':hover': {         backgroundColor: 'white',         color:
        // 'green'     } };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>

                    {this
                        .state
                        .persons
                        .map((person, index) => {
                            return <Person
                                click=
                                {() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                changed
                                ={(event) => this.nameChangedHandler(event, person.id)}
                                key={person.id}/>
                        })
}
                </div>
            );
            // style.backgroundColor = 'red'; style[':hover'] = {     backgroundColor:
            // 'white',     color: 'red' }
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>

                {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>Toggle Persons</StyledButton> */}

                <button className="button" onClick={this.togglePersonHandler}>Toggle Persons</button>
                {persons}
            </div>
        );

    }
}

export default App;