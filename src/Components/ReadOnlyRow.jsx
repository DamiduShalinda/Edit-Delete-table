import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td><button className="border border-black px-1 rounded-md" onClick={event => handleEditClick(event,contact)}>Edit</button>
          <button className="border border-black px-1 rounded-md" onClick={() => handleDeleteClick(contact.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;