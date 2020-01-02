import React from 'react';
import personService from './services/persons'
import sqlserverService from './services/sqlserver'
import './index.css'

// Tehtävän 3.9. yhteydessä: Komponentit omiin tiedostoihin
import UusiHenkilo from './components/UusiHenkilo'
import Notification from './components/Notification'
import Otsikko from './components/Otsikko'
import Suodatus from './components/Suodatus'
import Names from './components/Names'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      // 2.18 parempi virheilmoitus 
      info: null,
      organis: []
    }
  }

// 2.11 data palvelimelta
componentDidMount() {
  console.log('persons did mount')

// 2.14 data palvelimelta,  2.15 moduulissa
personService
  .getAll()
  .then(response => {
    this.setState({persons: response})
  })

// sql
//sqlserverService
//  .getInfo('999')
//  .then(response => {
//    this.setState({organis: response})
//  })
 

}

  addEntry = (event) => {
    event.preventDefault()
    //console.log('addEntry: ', this.state.newName)
    //console.log(event.target)
    const entryObject = {
        name: this.state.newName ,
        // 2.8 puhelinnumero
        number: this.state.newNumber
    }

    // 2.7 ei tuplia
    const result = this.state.persons.find( person => person.name === entryObject.name );
    //console.log("TUPLA: ", result, 'persons: ', this.state.persons,  'entry: ', entryObject)
    if (result) {
      // 2.17 korvataan numero
      const msg = result.name.concat(' [' , result.id, '] on jo luettelossa, korvataanko vanha numero uudella?')
      //const msg = result.name.concat(' on jo luettelossa, korvataanko vanha numero uudella?')
      if (window.confirm(msg)) { 
        result.number = entryObject.number
        personService
        .update(result.id, result)
        .then(response => {
          console.log(response)
          this.setState({
            persons: this.state.persons,
            info: 'korvattiin '.concat(result.name).concat(' numero: ',result.number)
          })
        })
          // 2.19 virhe kiinni
          .catch(error => {
          this.setState({
            info: `henkilö '${result.name}' on poistettu palvelimelta`,
            persons: this.state.persons.filter(n => n.id !== result.id)
          })
          setTimeout(() => {
            this.setState({info: null})
          }, 5000)
        })    
      }
    return
    }
    if (result == null) {
      personService
        .create(entryObject)
        .then(person => {
          console.log('AddEntry: respnse: ', person)
          this.setState({
            persons: this.state.persons.concat(person),
            newName: '',
            newNumber: '',
            info: 'lisättiin '.concat(person.name)
          })
          setTimeout(() => {
            this.setState({info: null})
          }, 5000)          
        })
    }    
  }

  handleEntryChange = (event) => {
    //console.log('handleEntryChange: ', event.target.value)
    this.setState({ newName: event.target.value })
  }

  // 2.8 puhelinnumero
  handleNumberChange = (event) => {
    //console.log('handleEntryChange: ', event.target)
    this.setState({ newNumber: event.target.value })
  }

  // 2.9 suodatus
  handleFilterChange = (event) => {
    //console.log('handleEntryChange: ', event.target)
    this.setState({ filter: event.target.value })
  }

  // 2.16 poista
  handleDelete = (event) => {
    console.log('handleDelete: [', event.target.id, ']')
    if (event.target.id) {
      const personToDelete = this.state.persons.find( person => String(person.id) === String(event.target.id))

      if (personToDelete) {
        if (window.confirm('Poistetaanko '.concat(personToDelete.name).concat(' [' , event.target.id, ']?'))) { 
        //if (window.confirm('Poistetaanko '.concat(personToDelete.name).concat('?'))) { 
          personService
            .deletePerson(personToDelete.id)
            .then(response => {
              console.log(response)
              const persons = this.state.persons.filter(n => n.id !== personToDelete.id)
              this.setState({
                persons: persons,
                info: 'poistettiin '.concat(personToDelete.name)
              })
            })
            // 2.19 virhe kiinni
            .catch(error => {
              this.setState({
                info: `henkilö '${personToDelete.name}' on jo valitettavasti poistettu palvelimelta`,
                persons: this.state.persons.filter(n => n.id !== personToDelete.id)
              })
              setTimeout(() => {
                this.setState({info: null})
              }, 5000)
            })            
        }
      }
    }
    //this.setState({ filter: event.target.value })
  }


  render() {
    return (
      <div>
        <Otsikko nimi='Puhelinluettelo' />

        <Notification message = {this.state.info} />

        <Suodatus filter={this.state.filter} filterChange={this.handleFilterChange} />

        <Otsikko nimi='Lisää uusi' />

        <UusiHenkilo handleAddEntry={this.addEntry}
                     newName={this.state.newName}
                     handleEntryChange={this.handleEntryChange}
                     newNumber={this.state.newNumber}
                     handleNumberChange={this.handleNumberChange}
                     />

        <Otsikko nimi='Numerot' />

        <Names persons={this.state.persons} filter={this.state.filter} deleteHandler={this.handleDelete}/>

      </div>
    )
  }
}

export default App;
