import { useState } from "react"
import API from "../api/api"

function AttendanceTable(){

  const [employeeId,setEmployeeId] = useState("")
  const [records,setRecords] = useState([])

  const fetchAttendance = async ()=>{

    try{

      const res = await API.get(`/attendance/${employeeId}`)

      setRecords(res.data)

    }catch(err){

      alert("Error fetching attendance")

    }

  }

  return(

    <div className="mt-6">

      <h3 className="text-xl font-bold mb-2">
        View Attendance
      </h3>

      <div className="flex gap-3 mb-4">

        <input
          type="text"
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e)=>setEmployeeId(e.target.value)}
          className="border p-2"
        />

        <button
          onClick={fetchAttendance}
          className="bg-blue-600 text-white px-3 py-2 rounded"
        >
          Search
        </button>

      </div>

      {records.length > 0 && (

        <table className="table-auto w-full border">

          <thead className="bg-gray-100">

            <tr>
              <th className="border p-2">Date</th>
              <th className="border p-2">Status</th>
            </tr>

          </thead>

          <tbody>

            {records.map((rec,index)=>(

              <tr key={index}>
                <td className="border p-2">{rec.date}</td>
                <td className="border p-2">{rec.status}</td>
              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>

  )

}

export default AttendanceTable