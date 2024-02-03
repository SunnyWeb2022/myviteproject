import React, { useContext } from "react";
import AppContextapi from "./Createcontextapi";

const Context=()=>
{
    const myname=useContext(AppContextapi);
    return (
        <>
          <h1 className='text-yellow-500 text-3xl'>This is My Name {myname} </h1>
        </>
    )
}

export default Context;