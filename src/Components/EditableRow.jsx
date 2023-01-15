import React from 'react'

const EditableRow = ({editFormData , handleEditFormChange , handleCancelClick}) => {
  return (
    
    <tr>
        <td><input type="text" name="fullName" placeholder="Name..." 
             value={editFormData.fullName} onChange={handleEditFormChange}/></td>

        <td><input type="text" name="address" placeholder="Address..." 
             value={editFormData.address} onChange={handleEditFormChange}/></td>

        <td><input type="text" name="phoneNumber" placeholder="Phone Number..." 
             value={editFormData.phoneNumber} onChange={handleEditFormChange}/></td> 

        <td><input type="email" name="email" placeholder="email..." 
             value={editFormData.email} onChange={handleEditFormChange}/></td>

        <td><button type='submit' className="border border-black px-1 rounded-md">save</button>
              <button className="border border-black px-1 rounded-md" onClick={handleCancelClick}> Cancel</button>
        </td>

    </tr>
  )
  }

export default EditableRow