import React from 'react';

export default function Employees() {
  const employeeData = [
    { name: 'Teju', salary: 50000 },
    { name: 'Varshini', salary: 60000 },
    { name: 'Harsh', salary: 55000 },
    { name: 'Dhanush', salary: 70000 }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Employee List</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
