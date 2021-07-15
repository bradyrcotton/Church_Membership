import React from 'react';

const EditableRow = ({ 
    editFormData, 
    handleEditFormChange, 
    handleCancelClick   
}) => {
    return (
        <tr>
            <td>
                <input 
                    type='text' 
                    name="member"
                    required="required"
                    placeholder="Enter Name (LN,FN)"
                    value={editFormData.member}
                    onChange={handleEditFormChange}
                    ></input>           
            </td>
            <td>
                <input 
                    type='text' 
                    name="status"
                    required="required"
                    placeholder="Enter Current Status"
                    value={editFormData.status}
                    onChange={handleEditFormChange}
                    ></input> 
            </td>
            <td>
                <input 
                    type='text' 
                    name="mailingAddress"
                    required="required"
                    placeholder="Enter Mailing Address"
                    value={editFormData.mailingAddress}
                    onChange={handleEditFormChange}
                    ></input> 
            </td>
            <td>
                <input 
                    type='text' 
                    name="physicalAddress"
                    required="required"
                    placeholder="Enter Physical Address"
                    value={editFormData.physicalAddress}
                    onChange={handleEditFormChange}
                    ></input>
            </td>
            <td>
                <input 
                    type='text' 
                    name="city"
                    required="required"
                    placeholder="Enter City"
                    value={editFormData.city}
                    onChange={handleEditFormChange}
                    ></input>
            </td>
            <td>
                <input 
                    type='text' 
                    name="state"
                    required="required"
                    placeholder="Enter State"
                    value={editFormData.state}
                    onChange={handleEditFormChange}
                    ></input>
            </td>
            <td>
                <input 
                    type='text' 
                    name="zipcode"
                    required="required"
                    placeholder="Enter Zipcode"
                    value={editFormData.zipcode}
                    onChange={handleEditFormChange}
                    ></input>
            </td>
            <td>
                <input 
                    type='text' 
                    name="cellPhone"
                    required="required"
                    placeholder="Enter Cell Phone"
                    value={editFormData.cellPhone}
                    onChange={handleEditFormChange}
                    ></input>
            </td>
            <td>
                <input 
                    type='text' 
                    name="homePhone"
                    required="required"
                    placeholder="Enter Home Phone"
                    value={editFormData.homePhone}
                    onChange={handleEditFormChange}
                    ></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    );
};


export default EditableRow;