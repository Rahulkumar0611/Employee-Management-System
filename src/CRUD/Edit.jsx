import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Edit = () => {
 
  let navigate   =   useNavigate()

 let [myname,setmyName]=useState("")
 let [mysalary,setmySalary]=useState("")
 let [mycompany,setmyCompany]=useState("")

 let obj=useParams()
 console.log(obj);

useEffect(()=>{
  axios.get(`http://localhost:4000/employees/${obj.id}`)
  .then((response)=>{
  setmyName(response.data.empName)
  setmySalary(response.data.empSalary)
  setmyCompany(response.data.empcompany)
  })
  },[])

let formHandle=(e)=>{
  let payload = {
    empName: myname,
    empSalary: mysalary,
    empcompany: mycompany
  };
  axios.put(`http://localhost:4000/employees/${obj.id}`,payload)
  .then(()=>{console.log("Data Updated");})
  .catch(()=>{console.log("errorrr");})

  navigate("/user")
}


let getName=(e)=>{
  setmyName(e.target.value)
}
let getSalary=(e)=>{
  setmySalary(e.target.value)
}
let getCompany=(e)=>{
  setmyCompany(e.target.value)
}

  return (
    <div  id={style.main1}>
         <form action="">
         <h1 className={style.heading}>EDIT USER</h1>        
        <label htmlFor="">Name</label>
        <input type="text" value={myname} onChange={getName}/>
        <label htmlFor="">Salary</label>
        <input type="text" value={mysalary} onChange={getSalary}  />
        <label htmlFor="">Company</label>
        <input type="text" value={mycompany} onChange={getCompany} />
        <button onClick={formHandle}>Submit</button>
      </form>
    </div>
  )
}

export default Edit;