import React, { Component } from 'react'
import api from '../../api'
import axios from 'axios'

export default class Beers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: [],
    }
  }

  render() {
    return (
      <div className = "background">
        <h2>List of beers</h2>
      <div className="Beers">
        {this.state.beers.map((eachBeer, i) => (
          <div className = "eachBeer">
          <img key = {i} src={eachBeer.image_url}/>
          <ul className = "beerDeets">
          <p key={i}>Name: {eachBeer.name}</p>
          <p key={i}>ABV: {eachBeer.abv}%</p>
          <p key={i}>Tag: {eachBeer.tagline}</p>
          </ul>
          </div>
        ))}
      </div>
      </div>
    )
  }
  
  componentDidMount() {
    axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=80`)
    .then((response) => {
      console.log(response.data)
      this.setState({
        beers: response.data,
      })
    })
      .catch(err => console.log(err))
  }
}
