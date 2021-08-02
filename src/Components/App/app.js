import React, {useState, Fragment} from 'react';
import { nanoid } from 'nanoid';
import './app.css';
import data from '../mock-data.json';
import ReadOnlyRow from '../ReadOnlyRow';
import EditableRow from '../editableRow';


const App= () => {

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
    });

    const [editFormData, setEditFormData] = useState({
        member: '',
        status: '',
        mailingAddress: '',
        physicalAddress: '',
        city: '',
        state: '',
        zipcode: '',
        cellPhone: '',
        homePhone: ''
    });

    const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData }
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

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

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact ={
            id: editContactId,
            member: editFormData.member,
            status: editFormData.status,
            mailingAddress: editFormData.mailingAddress,
            physicalAddress: editFormData.physicalAddress,
            city: editFormData.city,
            state: editFormData.state,
            zipcode: editFormData.zipcode,
            cellPhone: editFormData.cellPhone,
            homePhone: editFormData.homePhone
        };

        const newContacts = [ ...contacts ];

        const index = contacts.findIndex((contact) => contact.id === editContactId);

        newContacts[index] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            member: contact.member,
            status: contact.status,
            mailingAddress: contact.mailingAddress,
            physicalAddress: contact.physicalAddress,
            city: contact.city,
            state: contact.state,
            zipcode: contact.zipcode,
            cellPhone: contact.cellPhone,
            homePhone: contact.homePhone
        }

        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);

        setContacts(newContacts);
    };

    return (
        
        <div className="roster-container">
            <h1>Calvary Baptist Church Membership</h1>
            <form onSubmit={handleEditFormSubmit}>
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
                            <th> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <Fragment>
                                {editContactId === contact.id ? (
                                    <EditableRow 
                                    editFormData={editFormData} 
                                    handleEditFormChange={handleEditFormChange}
                                    handleCancelClick={handleCancelClick} /> 
                                ) : (
                                <ReadOnlyRow 
                                contact={contact} 
                                handleEditClick={handleEditClick}
                                handleDeleteClick={handleDeleteClick}
                                />
                                )}       
                            </Fragment>
                        ))}                                 
                    </tbody>
                </table>
            </form>
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

export default App;