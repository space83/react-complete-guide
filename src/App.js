import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {  
  state = {
    persons: [
      { id: 'aaaaa', name: 'Max', age: 28 },
      { id: 'bbbbb', name: 'Manu', age: 29 },
      { id: 'ccccc', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  } 

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]); //alternative for above

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;



    this.setState( {persons: persons} )
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const styleButton = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer '
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click ={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
               />
          })}
        </div>    
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style={styleButton}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>      
      {persons}
      </div>
    );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
 
export default App;
