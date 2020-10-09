import React, { Component } from 'react';
import classes from './businessCard.module.css';
import myphoto from './myphoto.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Parallax from '../parallax/Parallax.jsx';
import Button from '../button/Button.jsx';
import Modal from '../modal/Modal.jsx';

class BusinessCard extends Component {
  state = {
    isOpen: false,
  }
  openModal = () => {
    this.setState({ isOpen: true });
    console.log('blah');
  }

  handleSubmit = () => {
    console.log('Submit function!');
    this.setState({ isOpen: false });
  }

  handleCancel = () => {
    console.log('Cancel function!');
    this.setState({ isOpen: false });
  }
  render() {
  return(
  	<div className={classes.card}>
		<Parallax />
		<div className={classes.title}>
 			<h2>Elizabeth Nadieieva</h2>
 			<img alt='#' src={myphoto} className={classes.img}/> <br />
      <span>Junior FrontEnd Developer</span> <br />
   		<Button cssClasses='button_card' onClick={this.openModal}>Contact me</Button>
 			<Modal
		          isOpen={this.state.isOpen}
		          onCancel={this.handleCancel}
		          onSubmit={this.handleSubmit}
              title={`Let's talk 2`}
        	></Modal>
		</div>
 	</div>
  	);
	}
}

export default BusinessCard;
