import React, {Component} from 'react'
import axios from 'axios'
import adorable from './giphy.gif'
import './App.css'

class App extends Component {
  state = {
    quote: ''
  }

  componentDidMount =() => {
    axios.get('https://cat-fact.herokuapp.com/facts/')
      .then(res => {
        console.log('response', res)
        console.log(res.data.all.length)
        this.setState({
          quote: res.data.value
        })
      })
  }

  getNewFact = () => {
    axios.get('https://cat-fact.herokuapp.com/facts/')
      .then( 
         res => {
          //  console.log(res);
          var x = Math.floor(Math.random() * (234))
          var  y = res.data.all[x].text
          console.log(y, x)
          this.setState({
            quote: y
          })
         }
      )
    }


  render () {
    return(
      <div className="catFacts">
      <img src={adorable} width="400px"/>
      <h1>Fun Cat Facts</h1>
      <p>{this.state.quote}</p>
    <button onClick={ this.getNewFact}>New Cat Fact</button>
    </div>
    )
  }
}

export default App