import React from "react";
import { useEffect } from "react";
import axios from "axios";
import style from "./home.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  let [content, Setcontent] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:4000/employees")
      .then((response) => {
        Setcontent(response.data);
      })
      .catch(() => {
        console.log("Errrorr");
      });
  }, []);

  let deleteuser=(id)=>{
   axios.delete(`http://localhost:4000/employees/${id}`)
   window.location.assign("/user")
  }

  return (
    <div id={style.table1}>
      {content.map((x) => {
        return (
          <div>
           
            <table>
              <tr colspan="2">
                <td>EMP ID</td>
                <td>:  {x.id}</td>
              </tr>
              <tr>
                <td>NAME</td>
                <td>: {x.empName}</td>
              </tr>
              <tr>
                <td>SALARY</td>
                <td>: {x.empSalary}</td>
              </tr>
              <tr>
                <td>COMPANY</td>
                <td>: {x.empcompany}</td>
              </tr>
              <tr>
                <td>
                  <button><Link to={`/edit/${x.id}`}>EDIT</Link></button>
                </td>
                <td>
                  <button onClick={()=>{deleteuser(x.id)}}>DELETE</button>
                </td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default User;
