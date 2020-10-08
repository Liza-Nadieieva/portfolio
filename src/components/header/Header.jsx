import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Form, FormControl} from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import classes from './header.module.css';
import {NavLink} from 'react-router-dom';
import Button from '../button/Button.jsx';
import Modal from '../modal/Modal.jsx';


class Header extends Component {
  state = {
    isOpen: false,
  }

  openModal = () => {
    this.setState({ isOpen: true });
  }

  handleSubmit = () => {
    this.setState({ isOpen: false });
  }

  handleCancel = () => {
    this.setState({ isOpen: false });
  }
  render() {
    return(
      <Navbar className={classes.header} expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={classes.navbar}>
          <Nav className='mr-auto'>
            <NavLink to="/about" className={classes.link} activeClassName={classes.active}>About me</NavLink>
            <NavLink to="/experiments" className={classes.link} activeClassName={classes.active}>Experiments</NavLink>
            <Button cssClasses="button_header" onClick={this.openModal}>Contact</Button>
            <Modal
                isOpen={this.state.isOpen}
                onCancel={this.handleCancel}
                onSubmit={this.handleSubmit}
            >
            </Modal>
          </Nav>
         <Navbar.Text>
           <a href="https://www.instagram.com/nadeeva_liza" target="_blank" className='ml-3'><i className="fab fa-instagram fa-lg"></i></a>
           <a href="https://www.facebook.com/liza.nadieieva" target="_blank" className='ml-3'><i className="fab fa-facebook-square fa-lg"></i></a>
           <a href="https://github.com/Liza-Nadieieva" target="_blank" className='ml-3 mr-2'><i className="fab fa-github fa-lg"></i></a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}


export default Header;