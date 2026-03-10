function Dashboard(){

  return(

    <div className="grid grid-cols-3 gap-6">

      <div className="bg-white shadow p-6 rounded">

        <h3 className="text-gray-500">Total Employees</h3>
        <p className="text-3xl font-bold">12</p>

      </div>

      <div className="bg-white shadow p-6 rounded">

        <h3 className="text-gray-500">Present Today</h3>
        <p className="text-3xl font-bold">9</p>

      </div>

      <div className="bg-white shadow p-6 rounded">

        <h3 className="text-gray-500">Absent Today</h3>
        <p className="text-3xl font-bold">3</p>

      </div>

    </div>

  )

}

export default Dashboard