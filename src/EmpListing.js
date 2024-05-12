// import { create } from 'json-server';
import React, { useEffect, useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom';


function EmpListing() {
    const [empdata,setEmpdata] =useState(null);
    const navigate = useNavigate();

    const LoadDetail =(id)=>{
        navigate('/employee/detail/'+id);
    }
    const LoadEdit =(id)=>{
        navigate('/employee/edit/'+id);
    }

    const Removefunction =(id)=>{
        // if (window.confirm('Do you want to remove..?')){
        //     fetch("http://localhost:8000/employee"+id,{
        //         method:"DELETE"
        //     }).then((res)=>{
        //        alert("Removed Successfully")
        //        window.location.reload();
        //     }).catch((err)=>{
        //         console.log(err.message)
        //     })
        // }
        if(window.confirm("Do you want to Remove..?")){
            fetch("http://localhost:8000/employee/"+id,{
                method:"DELETE",
               
            }).then((res)=>{
               alert("Removed Successfully")
               window.location.reload();
            }).catch((err)=>{
                console.log(err.message)
            })
        }
    }
    useEffect(() =>{
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((res)=>{
            // fetch("http://dummy.restapiexample.com/api/v1/employees").then((res)=>{
            return res.json();
        }).then((resp)=>{
            setEmpdata(resp.data)
            
        }).catch((err)=>{
            console.log(err.message);
        })

    },[])
    // const {records,setRecords}=useState([]);
    // const filter = input.value.toUpperCase();
    // const handleFilter =(e)=>{
    //     const newData = records.filter(item=>item.id.toLowerCase().includes(e.target.value.toLowerCase()))
    //     setRecords(newData)
    // }
   
   const [query,setQuery]=useState("");
  return (
    <div >
        <nav className="navbar navbar-dark bg-dark">
  <a className="navbar-brand">Crud-App</a>
    <form action="search" >
        <input placeholder='search..' aria-label="Search"  type="search" onChange={(e)=>setQuery(e.target.value)}></input>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
</nav>
    <div className='container my-3 py-4'>
        <div className="card">
            <div className="card-title">
                <h2>Employee Listing</h2>
            </div>
            <div className="card-body">
                <div className='div-btn'>
                    <Link to="employee/create" className='btn btn-success'>Add New(+)</Link>
                </div>
                {/* <div className='div-btn'>
                    <input type="text" onChange={handleFilter} placeholder='Search'/>
                </div> */}
                <table className='table table-bordered'>
                    <thead className='bg-dark'>
                        <tr className='colorr'>
                            <td className='bg-dark text-white'>ID</td>
                            <td className='bg-dark text-white'>Name</td>
                            <td className='bg-dark text-white'>Email</td>
                            <td className='bg-dark text-white'>Phone</td>
                            <td className='bg-dark text-white'>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {empdata && 
                            empdata.filter(item=>item.name.toLowerCase().includes(query)).map(item=>(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td><a onClick={()=>{LoadEdit(item.id)}} className='btn btn-success'>Edit</a>
                                    <a onClick={()=>{Removefunction(item.id)}} className='btn btn-danger'>Remove</a>
                                    <a onClick={()=>{LoadDetail(item.id)}} className='btn btn-primary'>Details</a></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
  )
}

export default EmpListing