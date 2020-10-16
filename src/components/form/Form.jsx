import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import classes from'./form.module.css';
import Button from '../button/Button.jsx';


class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      formErrors: {email: '', name: '', message: ''},
      nameValid: false,
      emailValid: false,
      messageValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
    () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let messageValid = this.state.messageValid;

    switch(fieldName) {
      case 'name':
        nameValid = value.length >= 3;
        fieldValidationErrors.name = nameValid ? '': ' is too short';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'message':
        messageValid = value.length >= 3;
        fieldValidationErrors.message = messageValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    nameValid: nameValid,
                    messageValid: messageValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.nameValid && this.state.messageValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <form className="demoForm">
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.name)}` + classes.form_border}>
          <label htmlFor="name">Name *</label><br />
          <input type="text" required className={classes.form_elem} name="name"
            value={this.state.name}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`+ classes.form_border}>
          <label htmlFor="email">E-mail *</label><br />
          <input type="email" required className={classes.form_elem} name="email"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.message)}` + classes.form_border}>
          <label htmlFor="message">Message *</label><br />
          <textarea type="text" required className={classes.form_elem} name="message"
            value={this.state.message}
            onChange={this.handleUserInput}></textarea>
        </div>
        <Button cssClasses='button_card btn btn_modal' disabled={!this.state.formValid}>Send Message</Button>
      </form>
    )
  }
}

export default Form;