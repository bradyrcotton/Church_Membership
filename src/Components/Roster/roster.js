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
                    {contacts.map(() => (
                        <tr>
                            <td> Brady </td>
                            <td> Member </td>
                            <td> 316 Madison 2550 </td>
                            <td> Same </td>
                            <td> Huntsville </td>
                            <td> AR </td>
                            <td> 72740 </td>
                            <td> 479-981-6638 </td>
                            <td> 479-981-6638</td>
                        </tr>                    
                    ))}               
                </tbody>
            </table>
        </div>
    )
}

export default Roster;