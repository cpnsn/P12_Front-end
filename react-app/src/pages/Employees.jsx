import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EmployeeTable from "../components/EmployeeTable";

export default function Employees() {
  useEffect(() => {
    document.title = "HRnet - Current Employees";
  }, []);

  const employees = useSelector((state) => state.employees.list);

  const columns = [
    { name: "First Name", selector: row => row.firstName, sortable: true },
    { name: "Last Name", selector: row => row.lastName, sortable: true },
    { name: "Start Date", selector: row => row.startDate, sortable: true },
    { name: "Department", selector: row => row.department, sortable: true },
    { name: "Date of Birth", selector: row => row.dateOfBirth, sortable: true },
    { name: "Street", selector: row => row.street },
    { name: "City", selector: row => row.city },
    { name: "State", selector: row => row.state },
    { name: "Zip Code", selector: row => row.zipCode },
  ];

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <EmployeeTable employees={employees} />
      <a href="index.html">Home</a>
    </div>
  );
}
