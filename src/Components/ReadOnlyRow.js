import React from 'react';



const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.member}</td>
            <td>{contact.status}</td>
            <td>{contact.mailingAddress}</td>
            <td>{contact.physicalAddress}</td>
            <td>{contact.city}</td>
            <td>{contact.state}</td>
            <td>{contact.zipcode}</td>
            <td>{contact.cellPhone}</td>
            <td>{contact.homePhone}</td>
            <td>
                <button type="button" onClick={(event) => handleEditClick(event, contact)} >Edit</button>
                <button type="button" onClick={() => handleDeleteClick(contact.id)}>Delete</button>
            </td>
        </tr>  
    );
};

export default ReadOnlyRow;