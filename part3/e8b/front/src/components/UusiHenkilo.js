import React from 'react';

// 2.10 uuden henkilön lomake
const  UusiHenkilo = (props) =>  {
  //console.log('NewPerson: ' )
  return ( 
  <div>
    <form  onSubmit={props.handleAddEntry}>
    <div>
      nimi: 
      <input 
        value={props.newName}
        onChange={props.handleEntryChange}
      />
    </div>
    <div>
      numero: 
      <input 
        value={props.newNumber}
        onChange={props.handleNumberChange}
      />
    </div>
    <div>
      <button type="submit">lisää</button>
    </div>
    </form>
  </div>
  )
}

export default UusiHenkilo