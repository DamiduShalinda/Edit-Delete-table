import { useState } from "react"




export default function Form(){

    

    return(
        <div className="w-[90%] mx-auto  my-5">
        <h1> Add more details</h1>
        <br></br>
            <input type="text" required placeholder="Name"name="fullName" onChange={handleAddFormChange}/>
            <input type="text" required placeholder="Address" name="address"onChange={handleAddFormChange}/>
            <input type="text" required placeholder="Phone Number" name="phoneNumber"onChange={handleAddFormChange}/>
            <input type="email" required placeholder="E mail"name="email"onChange={handleAddFormChange}/>
        </div>
    )
}