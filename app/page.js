"use client"
import SignIn from "./account/signin/page";
import { useState } from "react";
import Dashboard from './dashboard/page'

export default function Home() {
  const [isAuth, setIsAuth]= useState(null);
  return (
    <div>
      {
        isAuth ? 
          <Dashboard/> :
          <SignIn/>
      }
    </div>
  );
}
