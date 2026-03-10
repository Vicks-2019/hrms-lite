import { useEffect, useState } from "react"
import API from "../api/api"

function EmployeeTable({ employees, refreshEmployees }) {

  const deleteEmployee = async (id)=>{

    try{

      await API.delete(`/employees/${id}`)

      refreshEmployees()

    }catch(err){

      alert("Failed to delete employee")

    }

  }

  if(employees.length === 0){
    return <p>No employees found</p>
  }

  return(

    <table className="table-auto w-full border">

      <thead className="bg-gray-100">

        <tr>
          <th className="border p-2">ID</th>
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Department</th>
          <th className="border p-2">Action</th>
        </tr>

      </thead>

      <tbody>

        {employees.map(emp => (

          <tr key={emp.employee_id}>

            <td className="border p-2">{emp.employee_id}</td>
            <td className="border p-2">{emp.full_name}</td>
            <td className="border p-2">{emp.email}</td>
            <td className="border p-2">{emp.department}</td>

            <td className="border p-2">

              <button
                onClick={()=>deleteEmployee(emp.employee_id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  )
}

export default EmployeeTable