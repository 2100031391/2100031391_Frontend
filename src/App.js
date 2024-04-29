import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
import EmployeeDetails from './EmployeeDetails';
import Navbar from './Navbar';

const App = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      FirstName: 'Sam',
      LastName: 'Adam',
      Gender: 'Male',
      Age: 35,
      Salary: 100000,
      Department: 'IT',
      Position: 'Junior',
    },
    {
      id: 2,
      FirstName: 'John',
      LastName: 'Jacob',
      Gender: 'Male',
      Age: 45,
      Salary: 90000,
      Department: 'Sales',
      Position: 'Senior',
    },
  ]);

  const addEmployee = (employee) => {
    const newEmployee = { ...employee, id: employees.length + 1 };
    setEmployees([...employees, newEmployee]);
  };

  const updateEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    );
    setEmployees(updatedEmployees);
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={(
              <div>
                <h2>Home</h2>
                {/* Home component content */}
              </div>
            )}
          />
          <Route
            path="/employees"
            element={(
              <div>
                <h2>Employee List</h2>
                <EmployeeList employees={employees} onUpdateEmployee={updateEmployee} onDelete={deleteEmployee} />
              </div>
            )}
          />
          <Route
            path="/employees/add"
            element={(
              <div>
                <h2>Add Employee</h2>
                <AddEmployee onAddEmployee={addEmployee} />
              </div>
            )}
          />
          <Route
            path="/employees/edit/:id"
            element={(
              <div>
                <h2>Edit Employee</h2>
                <EditEmployee onUpdateEmployee={updateEmployee} />
              </div>
            )}
          />
          <Route
            path="/employees/:id"
            element={<EmployeeDetails />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
