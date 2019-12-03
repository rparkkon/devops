import React from 'react';
import ReactDOM from 'react-dom';

const STYLE = {
  backgroundColor: {
      color: 'blue'
  },
  visibility: {
    visibility: 'hidden'
  },
  errorColor: {
      color: 'red'
  },
  fontSize: {
    'fontSize': '20px'
  }
}

const Otsikko = (props) =>  {
    return ( 
      <div>
          <h1>{props.nimi}</h1>
      </div>
    )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) =>  {
  //console.log('Palaute: ', props)
  return ( 
    <div>
      <table>
      <tbody>
      <tr>
        <th align="left">hyvä</th>
        <th align="left">{props.palaute.hy}</th>
      </tr>
       <tr>
        <th align="left">neutraali</th>
        <th align="left">{props.palaute.ne}</th> 
      </tr>
      <tr>
        <th align="left">huono</th>
        <th align="left">{props.palaute.hu}</th> 
      </tr>
      <tr>
        <th align="left">keskiarvo</th>
        <th align="left">{props.mean}</th> 
      </tr>
      <tr>
        <th align="left">positiivisia</th>
        <th align="left">{props.positive} %</th> 
      </tr>
      </tbody>
    </table>
    </div>
  )
}


class App extends React.Component { 
  constructor() {
    super()
    this.state = {
      counter: 0
    }
    this.palaute = {
      hy: 0,
      ne: 0,
      hu: 0
    }
  }

  asetaArvoon = (category) => {
    return () => {
      this.palaute[category] = this.palaute[category] + 1    
      this.setState({counter: this.state.counter + 1})
    }
  }

  render() {

    const meanValue = () => { 
      //console.log('values ', this.state.counter)
      if (this.state.counter > 0) {
          return (((-1)*this.palaute.hu + 0*this.palaute.ne + (1)*this.palaute.hy) / this.state.counter).toFixed(1)
      }
      else
        return 0
    }

    const toggleStats = (x) => () => {
      //console.log('x value ', x)
      var elementObj=document.getElementById("statsno"); 
      if (elementObj != null) {    
        //console.log('elementObj.innerText: ', elementObj.innerText);
        elementObj.innerText = "";
        var elementObj2=document.getElementById("stats"); 
        if (elementObj2 != null) {
            elementObj2.style.visibility = 'visible';
        }
      }
    }
  
  const positiveValue = () => { 
  //console.log('values ', this.state.counter)
  if (this.state.counter > 0) {
      return  (100 * this.palaute.hy / this.state.counter).toFixed(1);
    }
    else
      return 0
  }

    return (
      <div>
        <Otsikko nimi='anna palautetta'/>
        <Button handleClick={this.asetaArvoon('hy')} text='hyvä' />
        <Button handleClick={this.asetaArvoon('ne')} text='neutraali' />
        <Button handleClick={this.asetaArvoon('hu')} text='huono' />

        <Otsikko nimi='statistiikka'/>

        <div id = "statsno" >
          <p>Ei yhtään palautetta annettu</p>
        </div>

        <div id = "stats" style={STYLE.visibility} >
          <Statistics palaute={this.palaute} mean={meanValue()} positive = {positiveValue()}/>        
        </div>

      {toggleStats(this.state.counter)()}
    </div>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)