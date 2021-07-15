import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import './roster.css'
import data from '../mock-data.json';


const Roster = () => {

    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        member: '',
        status: '',
        mailingAddress: '',
        physicalAddress: '',
        city: '',
        state: '',
        zipcode: '',
        cellPhone: '',
        homePhone: ''
    })

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            member: addFormData.member,
            status: addFormData.status,
            mailingAddress: addFormData.mailingAddress,
            physicalAddress: addFormData.physicalAddress,
            city: addFormData.city,
            state: addFormData.state,
            zipcode: addFormData.zipcode,
            cellPhone: addFormData.cellPhone,
            homePhone: addFormData.homePhone
        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    return (
        <div className="roster-container">
            <table>
                <thead>
                    <tr>
                        <th> Member Name (LN, FN) </th>
                        <th> Status </th>
                        <th> Mailing Address </th>
                        <th> Physical Address </th>
                        <th> City </th>
                        <th> State </th>
                        <th> Zip Code </th>
                        <th> Cell Phone </th>
                        <th> Home Phone </th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
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
                        </tr>                    
                    ))}               
                </tbody>
            </table>
            <h2> Add Member</h2>
            <form className="form-container" onSubmit={handleAddFormSubmit}>
                <input 
                type='text' 
                name="member"
                required="required"
                placeholder="Enter Name (LN,FN)"
                onChange={handleAddFormChange}
                />
                <input 
                type='text' 
                name="status"
                required="required"
                placeholder="Enter Current Status"
                onChange={handleAddFormChange}
                />
                <input 
                type='text' 
                name="mailingAddress"
                required="required"
                placeholder="Enter Mailing Address"
                onChange={handleAddFormChange}
                />
                <input 
                type='text' 
                name="physicalAddress"
                required="required"
                placeholder="Enter Physical Address"
                onChange={handleAddFormChange}
                />
                <input 
                type='text' 
                name="city"
                required="required"
                placeholder="Enter City"
                onChange={handleAddFormChange}
                />
                <input 
                type='text' 
                name="state"
                required="required"
                placeholder="Enter State"
                onChange={handleAddFormChange}
                />
                <input 
                type='text' 
                name="zipcode"
                required="required"
                placeholder="Enter Zipcode"
                onChange={handleAddFormChange}
                />
                <input 
                type='text' 
                name="cellPhone"
                required="required"
                placeholder="Enter Cell Phone"
                onChange={handleAddFormChange}
                />
                <input 
                type='text' 
                name="homePhone"
                required="required"
                placeholder="Enter Home Phone"
                onChange={handleAddFormChange}
                />
                <button type="submit">Add Member</button>
            </form>
        </div>
    )
}

export default Roster;