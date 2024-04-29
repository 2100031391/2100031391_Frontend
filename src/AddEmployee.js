// AddEmployee.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const AddEmployee = ({ onAddEmployee }) => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEmployee(employee);
    setEmployee({});
    navigate('/employees');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <b>FirstName:</b> <input type="text" name="FirstName" placeholder="First Name" onChange={handleChange} /><br></br>
        <b>LastName:</b> <input type="text" name="LastName" placeholder="Last Name" onChange={handleChange} /><br></br>
        <b>Gender:</b> <input type="text" name="Gender" placeholder="Gender" onChange={handleChange} /><br></br>
        <b>Age:     </b>      <input type="number" name="Age" placeholder="Age" onChange={handleChange} /><br></br>
        <b>Department:</b> <input type="text" name="Department" placeholder="Department" onChange={handleChange} /><br></br>
        <b>Salary:</b> <input type="number" name="Salary" placeholder="Salary" onChange={handleChange} /><br></br>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
