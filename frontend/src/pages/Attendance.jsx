import AttendanceForm from "../components/AttendanceForm"
import AttendanceTable from "../components/AttendanceTable"

function Attendance(){

  return(

    <div>

      <h2 className="text-2xl font-bold mb-4">
        Attendance Management
      </h2>

      <AttendanceForm/>

      <AttendanceTable/>

    </div>

  )

}

export default Attendance