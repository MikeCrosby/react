import React from 'react'
import './AddressCard.css'

// stateless component
const addressCard = ( props ) => {
    // pretty self explanatory, note: have given inputs name fields so we can use generic update handler
    return (
        <div className="AddressCard">
            <input placeholder="...Name" value={props.name} onChange={props.changed} name="name"/>
            <address>
                <input placeholder="...Address Line 1" value={props.address1} onChange={props.changed} name="address1"/>
                <input placeholder="...Address Line 2" value={props.address2} onChange={props.changed} name="address2"/>
                <input placeholder="...Town/City" value={props.city} onChange={props.changed} name="city"/>
                <input placeholder="...County" value={props.county} onChange={props.changed} name="county"/>
                <input placeholder="...Postcode" value={props.postcode} onChange={props.changed} name="postcode"/>
            </address>
            <input placeholder="...Phone number" value={props.telephone} onChange={props.changed} name="telephone"/>
            <input placeholder="...Email" value={props.email} onChange={props.changed} name="email"/>
            <button onClick={props.click} className="red">Delete</button>
        </div>
    )
}

export default addressCard;