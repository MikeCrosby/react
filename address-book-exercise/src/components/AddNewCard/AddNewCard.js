import React, { Component } from 'react'
import './AddNewCard.css'

// stateless component
class AddNewCart extends Component {
    // using arrow function on button click so can propagate props back up the tree
    render () {
        return (
            <div className="AddNewCard">
                <h2>Add new contact</h2>
                <input placeholder="Name" name="name" />
                <p>Postcode guess: {this.props.guess}</p>
                <input placeholder="Postcode" name="postcode" />                
                <input placeholder="Address Line 1" name="address1" />
                <input placeholder="Address Line 2" name="address2" />
                <input placeholder="Town/City" name="city" />
                <input placeholder="County" name="county" /> 
                <input placeholder="Phone number" name="telephone" />
                <input placeholder="Email" name="email"/>
                <button className="red" onClick={this.props.clicked}>Add contact</button>                
            </div>
        )
    }
}

export default AddNewCart;