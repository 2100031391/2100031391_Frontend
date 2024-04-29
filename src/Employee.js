import React from 'react';

const Employee = ({ employee, onEdit, onDelete, onViewDetails }) => {
  const { id, FirstName, LastName, Department, Salary, Age, Position } = employee;

  const handleViewDetails = () => {
    onViewDetails(employee);
  };

  const handleEdit = () => {
    onEdit(employee);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{FirstName}</td>
      <td>{LastName}</td>
      <td>{Department}</td>
      <td>{Age}</td>
      <td>${Salary.toFixed(2)}</td>
      <td>{Position}</td>
      <td>
        <button onClick={handleViewDetails}>View</button>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Employee;