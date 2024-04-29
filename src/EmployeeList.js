import React from 'react';
import Employee from './Employee';
import './App.css';

const EmployeeList = ({ employees, onEdit, onDelete, onViewDetails }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Department</th>
          <th>Age</th>
          <th>Salary</th>
          <th>Position</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <Employee key={index} employee={employee} onEdit={onEdit} onDelete={onDelete} onViewDetails={onViewDetails} />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;