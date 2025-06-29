import React, { useState } from "react";
import DataTable from "react-data-table-component";

const customStyles = {
  headCells: {
    style: {
      fontWeight: "bold",
      fontSize: "15px",
    },
  },
  cells: {
    style: {
      fontSize: "15px",
    },
  },
};

const columns = [
  { name: "First Name", selector: (row) => row.firstName, sortable: true },
  { name: "Last Name", selector: (row) => row.lastName, sortable: true },
  { name: "Start Date", selector: (row) => row.startDate, sortable: true },
  { name: "Department", selector: (row) => row.department, sortable: true },
  { name: "Date of Birth", selector: (row) => row.dateOfBirth, sortable: true },
  { name: "Street", selector: (row) => row.street },
  { name: "City", selector: (row) => row.city },
  { name: "State", selector: (row) => row.state },
  { name: "Zip Code", selector: (row) => row.zipCode },
];

export default function EmployeeTable({ employees }) {
  const [filterText, setFilterText] = useState("");

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((val) =>
      String(val).toLowerCase().includes(filterText.toLowerCase())
    )
  );
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className="border px-3 py-2 rounded my-6"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <DataTable
        columns={columns}
        data={filteredEmployees}
        pagination
        highlightOnHover
        dense
        persistTableHead
        customStyles={customStyles}
        paginationComponentOptions={{
          rowsPerPageText: "Show",
          rangeSeparatorText: "to",
          selectAllRowsItem: false,
        }}
      />
    </>
  );
}
