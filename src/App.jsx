import React, { Fragment, useState } from "react";
import  { nanoid } from "nanoid";
import data from "./names.json";
import ReadOnlyRow from "./Components/ReadOnlyRow";
import EditableRow from "./Components/EditableRow";

function App() {

  const [contacts , setContacts] = useState(data);

  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  });

  const [editContactId, setEditContactId] = useState(null);

  const [editFormData , setEditFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  });


  function handleFormChange(event){
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);

  };

  const handleAddFormSubmit = (event) => {
      event.preventDefault();

      const newContact = {
        id: nanoid(),
        fullName: addFormData.fullName,
        address: addFormData.address,
        phoneNumber: addFormData.phoneNumber,
        email: addFormData.email
      };

      const newContacts = [...contacts , newContact];
      setContacts(newContacts);

  };


  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };
    
      const newContacts = [...contacts];

      const index = contacts.findIndex((contact) => contact.id === editContactId);

      newContacts[index] = editedContact;

      setContacts(newContacts);
      setEditContactId(null);
  };

  const handleEditClick = (event , contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email
    }

    setEditFormData(formValues);
  }

  const handleCancelClick = (event) => {
    event.preventDefault();
    setEditContactId(null);
  }

  const handleDeleteClick = (contactId) => {

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contact.id);

    newContacts.splice(index , 1);
    setContacts(newContacts);


  }


  return (
    <div >
    <form onSubmit={handleEditFormSubmit}>
     <table className="w-[90%] mx-auto  my-5">
      <thead className="bg-blue-300 justify-center ">
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>E-mail</th> 
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="bg-blue-100 justify-center">
      {contacts.map((contact) => (
        <Fragment>
        {editContactId === contact.id ? (<EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>) 
        : (<ReadOnlyRow contact={contact} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>)}
        
        
        </Fragment>
        
      ))  }
      
      </tbody>
     </table>
     </form>
     <div className="w-[90%] mx-auto  my-5">
        <h1> Add more details</h1>
        <br></br>
        <form onSubmit={handleAddFormSubmit}>
            <input type="text" required="required" placeholder="Name" name="fullName" className="border-2 mx-1 my-1" onChange={handleFormChange}/>
            <input type="text" required="required" placeholder="Address" name="address" className="border-2 mx-1 my-1" onChange={handleFormChange}/>
            <input type="text" required="required" placeholder="Phone Number" name="phoneNumber" className="border-2 mx-1 my-1" onChange={handleFormChange}/>
            <input type="email" required="required" placeholder="E mail" name="email" className="border-2 mx-1 my-1" onChange={handleFormChange}/>
            <button type="submit" className="border border-black rounded-md">Submit</button>
        </form>
        </div>
    </div>
  )
}

export default App
