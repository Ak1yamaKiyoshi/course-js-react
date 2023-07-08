'use client'
import Image from 'next/image'
import styles from './page.module.css'
import React from "react";
import { IsAdminContext } from '@/context/IsAdminContext';
//import Interface_db from '@/database/queries';
//import db from "@/database/db"



export default function Login() {
  const {isAdmin, setIsAdmin} = React.useContext(IsAdminContext);

  function handleSubmit(e) {
    console.log(e)
  }

  return (
    <div className={styles.login_page_container}> 
      <h1> Login </h1>
      <form onSubmit={handleSubmit}> 
        <label htmlFor="login-name-input"> Name </label>
        <input type="text" id="login-name-input" /> 
        <label htmlFor="login-password-input"> Password </label>
        <input type="text" id="login-password-input" />
      </form>
      <button> Submit </button>
      <button> Im not an admin </button>
    </div>
    )
       
}
