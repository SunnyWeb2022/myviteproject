import React, { useState } from "react";
import AppContextapi from "./Createcontextapi";
import Context from "./context";
import DemoContext from "./DemoContext";

const UserAppProvider= () =>
{
      const [user,setUser]=useState("sunny kumar mehta")
    return (
        <AppContextapi.Provider value={user}>
            <Context/>
            <DemoContext />
        </AppContextapi.Provider>
    )

}

export default UserAppProvider;