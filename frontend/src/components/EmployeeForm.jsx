import { useState } from "react"
import API from "../api/api"

function EmployeeForm({ refreshEmployees }) {

  const [formData,setFormData] = useState({
    employee_id:"",
    full_name:"",
    email:"",
    department:""
  })

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async (e)=>{

    e.preventDefault()

    try{

      await API.post("/employees/",formData)

      setFormData({
        employee_id:"",
        full_name:"",
        email:"",
        department:""
      })

      refreshEmployees()

    }catch(err){

      alert("Failed to add employee")

    }

  }

  return(

    <form onSubmit={handleSubmit} className="mb-6 grid grid-cols-4 gap-3">

      <input
        type="text"
        name="employee_id"
        placeholder="Employee ID"
        value={formData.employee_id}
        onChange={handleChange}
        className="border p-2"
        required
      />

      <input
        type="text"
        name="full_name"
        placeholder="Full Name"
        value={formData.full_name}
        onChange={handleChange}
        className="border p-2"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2"
        required
      />

      <input
        type="text"
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
        className="border p-2"
        required
      />

      <button className="bg-blue-600 text-white p-2 rounded col-span-4">
        Add Employee
      </button>

    </form>

  )
}

export default EmployeeForm