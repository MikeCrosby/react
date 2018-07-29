import React from 'react'
import AddressCard from './AddressCard/AddressCard'

// stateless component
const addressCard = ( props ) => {
    // loop over contacts object and generate new card for each contact
    return props.contacts.map( ( contact, index ) => {
        return <AddressCard
            click={props.clicked.bind(this, index)}
            name={contact.name}
            address1={contact.address1}
            address2={contact.address2}
            city={contact.city}
            county={contact.county}
            postcode={contact.postcode}
            telephone={contact.telephone}
            email={contact.email}
            position={index}
            key={contact.id}
            changed={(event) => props.changed(event, contact.id)}
        />
    } );
};

export default addressCard;