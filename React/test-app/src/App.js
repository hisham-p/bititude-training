import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

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
        // console.log('Was clicked!'); DON'T DO THIS: this.state.persons[0].name =
        // 'Maximilian';
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

        // Below line only points to the index which contains an Object in
        // array(Persons) const person = this.state.persons[personIndex]; For better
        // approach we use spread operator like shown below(For making a copy of the
        // array)
        const person = {
            ...this.state.persons[personIndex]
        };

        // Another alternative approach is show below which is not used later const
        // person = Object.assign({},this.state.persons[personIndex]); here we update
        // value according to the value in input field
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});

        // Here we manually assign the value to be updated this.setState( {   persons: [
        //     { name: 'Max', age: 28 },     { name: event.target.value, age: 29 }, {
        // name: 'Stephanie', age: 26 }   ] } )
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    }

    deletePersonHandler = (personIndex) => {
        // Just copy the array into new and update that and merge them later --> Method
        // 1 : const persons = this.state.persons;
        //  Method 2 :
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {/* <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age} />
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Max!')}
        changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
      <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age} /> */}
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
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>

                {/* Here We are doing an event handling to change the data onclick */}
                {/* <button
        style = {style}
        onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button> */}

                <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>

                {/* showing the if condition part with ternary opertaion */}
                {/* {
                this.state.showPersons === true ?  */
            }
            {/* End of ternary operation */
            }
            {/* : null
                  } */}

                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'},
        // React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;