import React, { useState } from "react";
import { Modal } from "react-modal-oc-project";

import DateInput from "../components/DateInput";
import DropdownSelect from "../components/DropdownSelect";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employeesSlice";
import states from "../data/states.json";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: null,
    startDate: null,
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  const stateOptions = states.map((s) => ({
    value: s.abbreviation,
    label: s.name,
  }));

  const departmentOptions = [
    { value: "Sales", label: "Sales" },
    { value: "Marketing", label: "Marketing" },
    { value: "Engineering", label: "Engineering" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Legal", label: "Legal" },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleDateChange = (field, date) => {
    if (date) {
      const formattedDate = date.toLocaleDateString("en-US");
      setFormData((prev) => ({ ...prev, [field]: formattedDate }));
    }
  };

  const dispatch = useDispatch();

  const saveEmployee = () => {
    dispatch(addEmployee(formData));
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
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />

          <DateInput
            id="dateOfBirth"
            label="Date of Birth"
            selectedDate={formData.dateOfBirth}
            onChange={handleDateChange}
          />

          <DateInput
            id="startDate"
            label="Start Date"
            selectedDate={formData.startDate}
            onChange={handleDateChange}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              value={formData.street}
              onChange={handleChange}
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
            />

            <DropdownSelect
              id="state"
              label="State"
              options={stateOptions}
              value={formData.state}
              onChange={(id, value) =>
                setFormData((prev) => ({ ...prev, [id]: value }))
              }
            />

            <label htmlFor="zipCode">Zip Code</label>
            <input
              id="zipCode"
              type="number"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </fieldset>

          <DropdownSelect
            id="department"
            label="Department"
            options={departmentOptions}
            value={formData.department}
            onChange={(id, value) =>
              setFormData((prev) => ({ ...prev, [id]: value }))
            }
          />
        </form>
        <button onClick={saveEmployee}>Save</button>
      </div>
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <p className="text-center text-green-600 font-semibold">
            Employee Created!
          </p>
        </Modal>
      )}
    </>
  );
}
