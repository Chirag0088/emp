import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function EmpDetail() {
  const {empid} = useParams();
  const [empdata,setEmpdata] = useState({})
  useEffect (()=>{
    fetch("https://reqres.in/api/unknown/"+empid).then((res)=>{
            // fetch("http://dummy.restapiexample.com/api/v1/employees").then((res)=>{
            return res.json();
        }).then((resp)=>{
            setEmpdata(resp)
        }).catch((err)=>{
            console.log(err.message);
        })
  },[])
  return (
    <div>
      <div className='card text-center bg-dark text-white' style={{"textAlign":"left"}}>
        <div className="card-title">
          <h2>Employee Create</h2>
        </div>
        <div className="card-body"></div>
      {empdata &&
      <div>
        <h2>The Employee Name is :{empdata.first_name}{empdata.last_name}({empdata.id})</h2>
        <h3>Contact Details</h3>
        <h5>Email is : {empdata.email}</h5>
        
        <Link className='btn btn-danger' to="/">Back to Listing</Link>
        </div>
      }
     
      </div>
      
    </div>
  )
}

export default EmpDetail