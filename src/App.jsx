import { useState } from "react";
import Form from "./form";
import data from "./names.json";

function App() {

  const [contacts , setContacts] = useState(data);
  const [ addFormData , setAddFormData] = useState({
    
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  
  });

  const handleFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData =  {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }


  return (
    <div >
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
      {contacts.map((contact) => 
      (<tr>
        <td>{contact.fullName}</td>
        <td>{contact.address}</td>
        <td>{contact.phoneNumber}</td>
        <td>{contact.email}</td>
        <td> <div className="flex justify-center gap-5">
        <button className="border  border-black-700 bg-gray-500 text-white px-3 rounded-md text-sm">Edit</button>
        <button className="border  border-black-700 bg-gray-500 text-white px-3 rounded-md text-sm">Delete</button>
        </div>
        </td>
        </tr>
        ))}
      
      </tbody>
     </table>
     <div className="w-[90%] mx-auto  my-5">
        <h1> Add more details</h1>
        <br></br>
        <form>
            <input type="text" required placeholder="Name"name="fullName" className="border-2 mx-1 my-1" />
            <input type="text" required placeholder="Address" name="address" className="border-2 mx-1 my-1"/>
            <input type="text" required placeholder="Phone Number" name="phoneNumber" className="border-2 mx-1 my-1" />
            <input type="email" required placeholder="E mail"name="email" className="border-2 mx-1 my-1"/>
            <input type="submit" className="border border-black rounded-md"/>
        </form>
        </div>
    </div>
  )
}

export default App
