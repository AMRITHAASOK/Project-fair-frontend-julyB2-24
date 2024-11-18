import React from 'react'
import UserProfile from '../Components/UserProfile'
import AddProject from '../Components/AddProject'
import ViewProject from '../Components/ViewProject'

function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="row p-5">
          <h1>Welcome User</h1>
        </div>
        <div className="row">
          <div className="col-8">
                    <div className="row">
                          <div className="col-6">
                            <h3>My Projects</h3>
                          </div>
                          <div className="col-6">
                            <AddProject/>
                          </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <ViewProject/>
                      </div>
                    </div>
          </div>
          <div className="col-4">
            <UserProfile/>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Dashboard
