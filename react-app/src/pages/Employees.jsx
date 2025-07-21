import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EmployeeTable from "../components/EmployeeTable";

export default function Employees() {
  useEffect(() => {
    document.title = "HRnet - Current Employees";
  }, []);

  const employees = useSelector((state) => state.employees.list);
  const sortedEmployees = [...employees].reverse();

  return (
    <div id="employee-div" className="content-container w-[80%] mx-auto my-[2%]">
      <h1 className="text-5xl font-bold">Current Employees</h1>
      <EmployeeTable employees={sortedEmployees} />
      <div className="bg-slate-600 text-white font-medium my-6 py-2 px-5 rounded-md">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
