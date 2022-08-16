import React, { Component } from 'react'
import Search from './components/Search'
import dataJson from './components/data.json'
export default class App extends Component {
  render() {
    return (
      <div>

          <Search data={dataJson}/>
        
      </div>
    )
  }
}

