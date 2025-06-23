import React, { useState } from "react";
import states from "../data/states.json";

export default function EmployeeForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const saveEmployee = () => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(formData);
    localStorage.setItem("employees", JSON.stringify(employees));
    setShowModal(true);
  };

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <a href="employee-list.html">View Current Employees</a>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={formData.firstName} onChange={handleChange}/>

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={formData.lastName} onChange={handleChange}/>

          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input id="dateOfBirth" type="text" value={formData.dateOfBirth} onChange={handleChange}/>

          <label htmlFor="startDate">Start Date</label>
          <input id="startDate" type="text" value={formData.startDate} onChange={handleChange}/>

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" value={formData.street} onChange={handleChange}/>

            <label htmlFor="city">City</label>
            <input id="city" type="text" value={formData.city} onChange={handleChange}/>

            <label htmlFor="state">State</label>
            <select name="state" id="state" value={formData.state} onChange={handleChange}>
                {states.map((state) => (
                    <option key={state.abbreviation} value={state.abbreviation}>
                        {state.name}
                    </option>
                ))}
            </select>

            <label htmlFor="zipCode">Zip Code</label>
            <input id="zipCode" type="number" value={formData.zipCode} onChange={handleChange}/>
          </fieldset>

          <label htmlFor="department">Department</label>
          <select name="department" id="department" value={formData.department} onChange={handleChange}>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>
        <button onClick={saveEmployee}>Save</button>
      </div>
      {showModal && (
        <div id="confirmation" className="modal">
          Employee Created!
        </div>
      )}
    </>
  );
}
