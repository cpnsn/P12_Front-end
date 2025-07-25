import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-modal-oc-project";

import DateInput from "../components/DateInput";
import DropdownSelect from "../components/DropdownSelect";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employeesSlice";
import states from "../data/states.json";

export default function Home() {
  const initialFormState = {
    firstName: "",
    lastName: "",
    dateOfBirth: null,
    startDate: null,
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  };

  const [formData, setFormData] = useState(initialFormState);

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

  const requiredFields = [
    "firstName",
    "lastName",
    "dateOfBirth",
    "startDate",
    "street",
    "city",
    "state",
    "zipCode",
    "department",
  ];

  const validateForm = () => {
    for (let field of requiredFields) {
      const value = formData[field];
      if (!value || (typeof value === "string" && value.trim() === "")) {
        return false;
      }
    }
    return true;
  };

  const dispatch = useDispatch();

  const saveEmployee = () => {
    if (!validateForm()) {
      alert("Please fill all fields.");
      return;
    }
    dispatch(addEmployee(formData));
    setShowModal(true);
    setFormData(initialFormState);
  };

  return (
    <div className="mx-auto my-[2%]">
      <div className="title text-5xl font-bold">
        <h1>HRnet</h1>
      </div>
      <div className="content-container">
        <Link
          to="/employee-list.html"
          className="bg-slate-600 text-white font-medium my-6 py-2 px-5 rounded-md inline-block"
        >
          View Current Employees
        </Link>
        <div className="text-slate-600 2xl:w-[30%] bg-slate-100 rounded-lg pt-4 pb-6 px-10">
          <h2 className="text-xl mb-4 font-bold text-center">
            Create Employee
          </h2>
          <form action="#" id="create-employee">
            <div className="flex justify-between">
              <div className="w-[47%]">
                <label htmlFor="firstName">First Name</label>
                <input
                  className="outline-none rounded border border-slate-400 p-2 w-full"
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="w-[47%]">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="outline-none rounded border border-slate-400 p-2 w-full"
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex justify-between">
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
            </div>

            <div className="mt-8 bg-slate-200 rounded-md p-4">
              <fieldset className="address">
                <legend className="font-bold">Address</legend>

                <label htmlFor="street">Street</label>
                <input
                  className="outline-none rounded border border-slate-400 p-2 w-[70%]"
                  id="street"
                  type="text"
                  value={formData.street}
                  onChange={handleChange}
                />

                <div className="flex justify-between">
                  <div className="w-[60%]">
                    <label htmlFor="city">City</label>
                    <input
                      className="outline-none rounded border border-slate-400 p-2 w-full"
                      id="city"
                      type="text"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="w-[34%]">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                      className="outline-none rounded border border-slate-400 p-2 w-full"
                      id="zipCode"
                      type="number"
                      value={formData.zipCode}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <DropdownSelect
                  id="state"
                  label="State"
                  options={stateOptions}
                  value={formData.state}
                  onChange={(id, value) =>
                    setFormData((prev) => ({ ...prev, [id]: value }))
                  }
                />
              </fieldset>
            </div>
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
        </div>
        <button
          className="bg-emerald-300 text-emerald-900 font-bold py-2 px-12 mt-6 rounded-md"
          onClick={saveEmployee}
        >
          Save
        </button>
      </div>
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <p className="text-center text-green-600 font-semibold">
            Employee Created!
          </p>
        </Modal>
      )}
    </div>
  );
}
