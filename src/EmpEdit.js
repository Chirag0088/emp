import React, { useEffect, useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';

function EmpEdit() {
//     const {empid} = useParams();
// //   const {empid} = useParams();
// //   const [id, setId] = useState("");
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [active, setActive] = useState(true);
// //   const [valid, setValid] = useState(false);
// //   const navigate=useNavigate;
// //   const handlesubmit =(e)=>{
// //     e.preventDefault();
// //    const empdata={id,name,email,phone,active};
  
// //     fetch("http://localhost:8000/employee"+empid,{
// //         method:"PUT",
// //         headers:{"content-type":"application/json"},
// //         body:JSON.stringify(empdata)
// //     }).then((res)=>{
// //         alert("Saved Successfully")
// //         navigate("/");
// //     }).catch((err)=>{
// //         console.log(err.message)
// //     })
// // }
// //   const [empdata,setEmpdata] = useState({})
//   useEffect (()=>{
//     fetch("http://localhost:8000/employee/"+empid).then((res)=>{
//             // fetch("http://dummy.restapiexample.com/api/v1/employees").then((res)=>{
//             return res.json();
//         }).then((resp)=>{
//             setId(resp.id);
//             setName(resp.name);
//             setEmail(resp.email);
//             setPhone(resp.phone);
//             setActive(resp.isactive);
//         }).catch((err)=>{
//             console.log(err.message);
//         })
//   },[])
  
//   const [id, setId] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [active, setActive] = useState(true);
//   const [valid, setValid] = useState(false);
//   const navigate=useNavigate;
//   const handlesubmit =(e)=>{
//     e.preventDefault();
//    const empdata={id,name,email,phone,active};
  
//     fetch("http://localhost:8000/employee/"+empid,{
//         method:"PUT",
//         headers:{"content-type":"application/json"},
//         body:JSON.stringify(empdata)
//     }).then((res)=>{
//         alert("Saved Successfully")
//        navigate("/")
//     }).catch((err)=>{
//         console.log(err.message)
//     })
// }
//   return (
//     <div>
//             <div className="row">
//                 <div className="offset-lg-3 col-lg-6">
//                     <form className="container" onSubmit={handlesubmit}>
//                         <div className="card" style={{ "textAlign": "left" }}>
//                             <div className="card-title">
//                                 <h2>Employee Edit</h2>
//                             </div>
//                             <div className="card-title">
//                                 <div className="row">
//                                     <div className="col-lg-12">
//                                         <div className="form-group">
//                                             <label   >ID</label>
//                                             <input value={id} disabled="disabled" type="text" className='form-control' />
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-12">
//                                         <div className="form-group">
//                                             <label   >Name</label>
//                                             <input type="text" value={name} onMouseDown={e=>setValid(true)} required onChange={e=>setName(e.target.value)} className='form-control' />
//                                          {name.length===0 && valid && <span className='text-danger'>Enter the name</span>}
//                                         </div>
//                                     </div>

//                                     <div className="col-lg-12">
//                                         <div className="form-group">
//                                             <label   >Email</label>
//                                             <input type="text" value={email} onChange={e=>setEmail(e.target.value)} className='form-control' />
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-12">
//                                         <div className="form-group">
//                                             <label   >Phone</label>
//                                             <input type="number" value={phone} onChange={e=>setPhone(e.target.value)}  className='form-control' />
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-12">
//                                     <div className="form-check">
//                                             <input type="checkbox" checked={active} onChange={e=>setActive(e.target.checked)} className='form-check-input' />
//                                             <label className='form-check-label'>Is Active</label>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-12">
//                                         <div className="form-group">
//                                             <button type='submit' className='btn btn-success'>Save</button>
//                                             <Link to="/" className='btn btn-danger'>Back</Link>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
const {empid} = useParams();
const [empdata,setEmpdata] = useState({})
useEffect (()=>{
  fetch("http://localhost:8000/employee/"+empid).then((res)=>{
          // fetch("http://dummy.restapiexample.com/api/v1/employees").then((res)=>{
          return res.json();
      }).then((resp)=>{
        setId(resp.id)
        setName(resp.name)
        setEmail(resp.email)
        setPhone(resp.phone)
        setActive(resp.isactive)
      }).catch((err)=>{
          console.log(err.message);
      })
},[])
const [id, setId] = useState("");
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [active, setActive] = useState(true);
const [valid, setValid] = useState(false);

const navigate = useNavigate();

const handlesubmit =(e)=>{
    e.preventDefault();
   
   const empdata={id,name,email,phone,active};
   
    fetch("http://localhost:8000/employee/"+empid,{
        method:"PUT",
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
    <div>
         <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Employee Edit</h2>
                            </div>
                            <div className="card-title">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label >ID</label>
                                            <input value={id} disabled="disabled" type="text" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label >Name</label>
                                            <input type="text" value={name} onMouseDown={e=>setValid(true)} required onChange={e=>setName(e.target.value)} className='form-control' />
                                         {name.length===0 && valid && <span className='text-danger'>Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label >Email</label>
                                            <input type="text" value={email} onChange={e=>setEmail(e.target.value)} className='form-control' />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label >Phone</label>
                                            <input type="number" value={phone} onChange={e=>setPhone(e.target.value)}  className='form-control' />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input type="checkbox" checked={active} onChange={e=>setActive(e.target.checked)} className='form-check-input' />
                                            <label className='form-check-label'>Is Active</label>
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

export default EmpEdit