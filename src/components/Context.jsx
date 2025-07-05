import { useState } from "react";
import { AppContext } from "./AppContext";
const ContextProvider = (props) => {

    const [modeChange,setModeChange] = useState(true)

    return (
        <AppContext.Provider value={{modeChange,setModeChange}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider 
