import React from 'react';

const Names = ({ persons, deleteHandler, filter = ''}) => {
  //console.log('Names: ', persons , ' ', filter )

  const filtered = filter === '' ?  persons : persons.filter(person => {return person.name.toLowerCase().startsWith(filter.toLowerCase()) })
  console.log('filtered: ',filtered, ' length 2: ', filtered.length, ' typeof: ', typeof(filtered))
  if (filtered.length === 0 || typeof(filtered) === "string") {
    return (null)
  }
  const  namemap  = () => filtered.map(name => 
    <tr key={name.name}>
      <td>{name.name}</td>
      <td>{name.number}</td>
      <td><button onClick={deleteHandler} id={name.id}>Poista</button></td>
    </tr>)

  return (
    <div>
      <table><tbody>
      {namemap()}
      </tbody></table>
    </div>
  )
}
export default Names