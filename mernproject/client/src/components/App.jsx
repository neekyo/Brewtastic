import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Countries from './pages/Countries'
import AddCountry from './pages/AddCountry'
import Secret from './pages/Secret'
import Login from './pages/Login'
import Signup from './pages/Signup'
import api from '../api'
import Beers from './pages/Beers'
import Breweries from './pages/Breweries'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      name: "",
      tagline: "",
      description: "",  
      image_url: "",
      abv: "",
      ibu: "",
      ingredients: "",
      food_pairing: "",
    }
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Beertastic</h1>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/beers">Beers</NavLink>
          <NavLink to="/breweries">Breweries</NavLink>
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && (
            <Link to="/" onClick={e => this.handleLogoutClick(e)}>
              Logout
            </Link>
          )}
          {api.isAdmin && <NavLink to="/secret">Secret</NavLink>}
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/countries" component={Countries} />
          <Route path="/add-country" component={AddCountry} />
          <Route path="/breweries" component={Breweries} />
          <Route path="/beers" component={Beers} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/secret" component={Secret} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    )
  }
}


let users = ['a','b','c','d','e','f','g']
let index = Math.floor(Math.random()*users.length)
let winner = users[index]

console.log('our winner is ', winner)

let min = index*(360/users.length)
let max = (index+1)*(360/users.length)

let rotate = getRandomArbitrary(min, max) + Math.floor(Math.random()*7)*360

console.log(rotate)



function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}




