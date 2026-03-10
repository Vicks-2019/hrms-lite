import { Link } from "react-router-dom"

function Navbar(){

  return(

    <nav className="bg-blue-600 text-white p-4 flex gap-6">

      <h1 className="font-bold">HRMS Lite</h1>

      <Link to="/">Dashboard</Link>
      <Link to="/employees">Employees</Link>
      <Link to="/attendance">Attendance</Link>

    </nav>

  )

}

export default Navbar