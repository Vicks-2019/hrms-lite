import { useEffect, useState } from "react"
import API from "../api/api"

import EmployeeForm from "../components/EmployeeForm"
import EmployeeTable from "../components/EmployeeTable"

function Employees(){

  const [employees,setEmployees] = useState([])
  const [loading,setLoading] = useState(true)

  const fetchEmployees = async ()=>{

    try{

      const res = await API.get("/employees/")

      setEmployees(res.data)

    }catch(err){

      console.error("Error loading employees")

    }finally{

      setLoading(false)

    }

  }

  useEffect(()=>{
    fetchEmployees()
  },[])

  if(loading){
    return <p>Loading employees...</p>
  }

  return(

    <div>

      <h2 className="text-2xl font-bold mb-4">
        Employee Management
      </h2>

      <EmployeeForm refreshEmployees={fetchEmployees} />

      <EmployeeTable
        employees={employees}
        refreshEmployees={fetchEmployees}
      />

    </div>

  )
}

export default Employees