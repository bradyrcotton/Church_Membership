import React, {useState} from 'react';
import './roster.css'
import data from '../mock-data.json';


const Roster = () => {

    const [contacts, setContacts] = useState(data);

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
            <form>
                <input 
                type='text' 
                name="Member Name (LN, FN)"
                required="required"
                placeholder="Enter Members Name"
                />
                <input 
                type='text' 
                name="Status"
                required="required"
                placeholder="Enter Current Status"
                />
                <input 
                type='text' 
                name="Mailing Address"
                required="required"
                placeholder="Enter Mailing Address"
                />
                <input 
                type='text' 
                name="Physical Address"
                required="required"
                placeholder="Enter Physical Address"
                />
                <input 
                type='text' 
                name="City"
                required="required"
                placeholder="Enter City"
                />
                <input 
                type='text' 
                name="State"
                required="required"
                placeholder="Enter State"
                />
                <input 
                type='text' 
                name="Zipcode"
                required="required"
                placeholder="Enter Zipcode"
                />
                <input 
                type='text' 
                name="Cell Phone"
                required="required"
                placeholder="Enter Cell Phone"
                />
                <input 
                type='text' 
                name="Home Phone"
                required="required"
                placeholder="Enter Home Phone"
                />

            </form>
        </div>
    )
}

export default Roster;