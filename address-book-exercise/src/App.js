import React, { Component } from 'react'
import './App.css'
import AddressCards from './components/AddressCards/AddressCards'

// stateful component
class App extends Component {

  state = {
    contacts: [
      {
        id: '0',
        name: 'Michael Crosby',
        address1: '12 Keats Close',
        address2: '',
        city: 'Downham Market',
        county: 'Norfolk',
        postcode: 'PE38 9TT',
        telephone: '07734081266',
        email: 'mcrosby89@gmail.com'
      }
    ],
    postcodeGuess: '',
    newContact: {
      id: '',
      name: '',
      address1: '',
      address2: '',
      city: '',
      county: '',
      postcode: '',
      telephone: '',
      email: ''
    }
  }

  // immutable state change
  valueChangedHandler = (event, id) => {
    // find index from contacts
    const contactIndex = this.state.contacts.findIndex(c => {
      return c.id === id
    })
    
    // create new contact, not a reference (spread operator achieves this instead of instantiating new object)
    const contact = {...this.state.contacts[contactIndex]}

    // generic way to avoid making multiple change handlers, attach name to input fields and access object via
    contact[event.target.name] = event.target.value

    // create new contacts object, same as above, keep immutability
    const contacts = [...this.state.contacts]
    contacts[contactIndex] = contact

    // update state with new data
    this.setState({ contacts: contacts })
  }

  deleteContactHandler = contactIndex => {
    const contacts = [...this.state.contacts]
    // splice off deleted contact
    contacts.splice(contactIndex, 1)
    this.setState({ contacts: contacts })
  }

  // have used getAddress API instead of postcode, as couldn't find a useful thing that added value to the form
  // that came back from the postcode api.. other than autocomplete
  getAddresses = (event) => {
    fetch(`https://api.postcodes.io/postcodes/${event.target.value}/autocomplete`)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          postcodeGuess: data.result[0]
        })        
      })
      .catch(() => {
        console.log("Error retrieving autocomplete")
      })
  }

  handleFormSubmit = () => {
    const id = new Date().valueOf().toString()

    const contact = {...this.state.newContact}
    contact['id'] = id

    // update state with new data
    this.setState({ contacts: [...this.state.contacts, contact] })
  }

  updateFakeContact = (event) => {   
    // create new contact, not a reference (spread operator achieves this instead of instantiating new object)
    const contact = {...this.state.newContact}

    // generic way to avoid making multiple change handlers, attach name to input fields and access object via
    contact[event.target.name] = event.target.value

    if(event.target.name === 'postcode') {
      this.getAddresses(event)
    }

    // update state with new data
    this.setState({ newContact: contact })
  }

  render() {
    return (
      <div className="App">
        <h1>Address book</h1>
        <div className="container">
          <div className="left">  
            <div className="AddNewCard">
              <h2>Add new contact</h2>
              <input placeholder="Name" name="name" onChange={this.updateFakeContact} value={this.state.newContact.name} />
              <p>Postcode guess: {this.state.postcodeGuess}</p>
              <input placeholder="Postcode" name="postcode" onChange={this.updateFakeContact} value={this.state.newContact.postcode} />                
              <input placeholder="Address Line 1" name="address1" onChange={this.updateFakeContact} value={this.state.newContact.address1} />
              <input placeholder="Address Line 2" name="address2" onChange={this.updateFakeContact} value={this.state.newContact.address2} />
              <input placeholder="Town/City" name="city" onChange={this.updateFakeContact} value={this.state.newContact.city} />
              <input placeholder="County" name="county" onChange={this.updateFakeContact} value={this.state.newContact.county} /> 
              <input placeholder="Phone number" name="telephone" onChange={this.updateFakeContact} value={this.state.newContact.telephone} />
              <input placeholder="Email" name="email" onChange={this.updateFakeContact} value={this.state.newContact.email} />
              <button className="red" onClick={this.handleFormSubmit}>Add contact</button>                
            </div>          
          </div>
          <div className="right">
            <div className="inline_block">
              <AddressCards changed={this.valueChangedHandler} clicked={this.deleteContactHandler} contacts={ this.state.contacts }/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
