import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* section 1 */}
      <div className="row p-5">
        <div className="col-6 p-5 mt-5">
              <h1 className='my-3'>Project Fair</h1>
              <p className='my-2' style={{textAlign:'justify'}}>Project management software connects teams, enabling everyone in the organization to prioritize the work that matters most. Software that fosters this type of high-level collaboration is essential for most companies. But at a glance, many of the tools organizations use have seemingly similar features. Use our guide to narrow down your choices and understand which tools are best for different types of companies.</p>
             <Link to={'/login'}>
             <button className='btn btn-info my-4'>Get Started</button>
             </Link>
        </div>
        <div className="col-6 p-5">
                <img src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png" alt=""  width={'100%'} height={'450px'} className='rounded shadow'/>
        </div>
      </div>
   {/* section 2 */}
      <div className="container mt-5 p-5">
        <h3 className='text-center m-4'>Explore Our Projects</h3>
            <div className="row p-5">
              <div className="col-4">
                  <ProjectCard/>
              </div>
              <div className="col-4">
              <ProjectCard/>
              </div>
              <div className="col-4">
              <ProjectCard/>
              </div>
            </div>
      </div>
      {/* section 3 */}
      <div className="container text-center">
       <Link to={'/projects'}>
       <button className='btn mb-5'>View Projects</button>
       </Link>
      </div>
    </div>
  )
}

export default Home
