import { useState } from "react"
import API from "../api/api"

function AttendanceForm(){

  const [data,setData] = useState({
    employee_id:"",
    date:"",
    status:"Present"
  })

  const handleChange = (e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()

    try{

      await API.post("/attendance/",data)

      alert("Attendance marked")

    }catch(err){

      alert("Error marking attendance")

    }
  }

  return(

    <form onSubmit={handleSubmit} className="mb-6 grid grid-cols-3 gap-3">

      <input
        type="text"
        name="employee_id"
        placeholder="Employee ID"
        onChange={handleChange}
        className="border p-2"
        required
      />

      <input
        type="date"
        name="date"
        onChange={handleChange}
        className="border p-2"
        required
      />

      <select
        name="status"
        onChange={handleChange}
        className="border p-2"
      >

        <option value="Present">Present</option>
        <option value="Absent">Absent</option>

      </select>

      <button className="bg-green-600 text-white p-2 rounded col-span-3">
        Mark Attendance
      </button>

    </form>
  )
}

export default AttendanceForm