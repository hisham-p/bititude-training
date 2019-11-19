import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary' import
// Radium from 'radium';
import Cockpit from '../components/Cockpit/Cockpit'

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
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        deleted={this.deletePersonHandler}
                        changed={this.nameChangedHandler}/>
                </div>
            );
        }

        return (
            <div className="App">
                <Cockpit persons={this.state.persons} toggle={this.togglePersonHandler}/> 
                {persons}
            </div>
        );

    }
}

export default App;