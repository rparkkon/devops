import React from 'react';

// 2.9 suodatus
const Suodatus = (props) =>  {
  //console.log('Suodatus: ',  props.filter )
  return ( 
    <div>
    rajaa näytettävä: 
    <input 
        value={props.filter}
        onChange={props.filterChange}
        />
    </div>
  )
}

export default Suodatus