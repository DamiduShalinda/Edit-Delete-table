import React from 'react'

export const ReadOnlyRow = (contact) => {
  return (
    <div>
    <tr>
    <td>{contact.fullName}</td>
    <td>{contact.address}</td>
    <td>{contact.phoneNumber}</td>
    <td>{contact.email}</td>
    </tr>
    </div>
  )
}
