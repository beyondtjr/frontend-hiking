import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import AuthService from '../services';
import GuestNavMenu from './guestnavmenu';
import '../assets/dashboard.css'


class NavMenu extends Component {
  constructor(props){
    super(props)
    this.auth = new AuthService()

  }

  render() {
    console.log("This is the props.user. in navmenu :", this.props.user)
    return(
      <Navbar className="Navbar">
      <Navbar.Header>
        <Navbar.Brand pullLeft>
          <a href="/home"><img style={{ marginTop: -28}} src={require('../assets/fizbologo.png')} /></a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Text> <a className="navLink" href="/dashboard"> My Dashboard  </a> </Navbar.Text>

        <Navbar.Text> <a className="navLink" href="/hikes/new"> Create Hike  </a> </Navbar.Text>
        <Navbar.Text> <a className="navLink" onClick={this.handleClick.bind(this)} href="/home"> Log Out </a> </Navbar.Text>
        <Navbar.Text pullRight></Navbar.Text>

      </Navbar.Collapse>
    </Navbar>
  )}

  handleClick = () => {
    this.auth.logout()
    this.props.statusUpdate()
  }
}

export default NavMenu;
