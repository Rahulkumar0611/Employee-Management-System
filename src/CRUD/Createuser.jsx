import React, { useState } from "react";
import style from "./home.module.css";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const Createuser = () => {
  let [name, Setname] = useState("");
  let [salary, Setsalary] = useState("");
  let [company, Setcompany] = useState("");

  let navigate   =   useNavigate()

  let nameData = (e) => {
    Setname(e.target.value);
  };
  let salaryData = (e) => {
    Setsalary(e.target.value);
  };
  let companyData = (e) => {
    Setcompany(e.target.value);
  };
  let formhandle = (e) => {
    e.preventDefault();
    let payload = {
      empName: name,
      empSalary: salary,
      empcompany: company
    };

    axios
      .post("http://localhost:4000/employees", payload)
      .then(() => {
        console.log("Data Sent");
      })
      .catch(() => {
        console.log("Error");
      });

       navigate("/user")

  };

  return (
    <div id={style.main1}>
      <form action="">
    <h1 className={style.heading}>CREATE USER</h1>
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={nameData} />
        <label htmlFor="">Salary</label>
        <input type="text" value={salary} onChange={salaryData} />
        <label htmlFor="">Company</label>
        <input type="text" value={company} onChange={companyData} />
        <button onClick={formhandle}>Submit</button>
      </form>
    </div>
  );
};

export default Createuser;
