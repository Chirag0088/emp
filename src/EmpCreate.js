import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function EmpCreate() {
    const [id, setId] = useState("");
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [avtar, setAvtar] = useState("");
    const [valid, setValid] = useState(false);
    
    const navigate = useNavigate();

    const handlesubmit =(e)=>{
        e.preventDefault();
       
       const empdata={first_name,last_name,email,avtar};
       
        fetch("https://reqres.in/api/users",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empdata)
        }).then((res)=>{
           alert("Saved Successfully")
           navigate('/');
        }).catch((err)=>{
            console.log(err.message)
        })
    }
    return (
        <div className='container'>
            <div className="row my-3 py-4">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Employee Create</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label >ID</label>
                                            <input value={id} disabled="disabled" type="text" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label >First_Name</label>
                                            <input type="text" value={first_name} onMouseDown={e=>setValid(true)} required onChange={e=>setFirst_name(e.target.value)} className='form-control' />
                                         {first_name.length===0 && valid && <span className='text-danger'>Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label >Last_Name</label>
                                            <input type="text" value={last_name} onChange={e=>setLast_name(e.target.value)} className='form-control' />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label >Email</label>
                                            <input type="email" value={email} onChange={e=>setEmail(e.target.value)}  className='form-control' />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>profile_image</label>
                                            <input src='' value={avtar} onChange={e=>setAvtar(e.target.value)} className='form-control' />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button type='submit' className='btn btn-success'>Save</button>
                                            <Link to="/" className='btn btn-danger'>Back</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmpCreate