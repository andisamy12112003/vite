import { createContext } from "react";
import { useState } from "react";
export const AppContext = createContext()

const ContextProvider = (props) => {

    const [modeChange,setModeChange] = useState(true)

    return (
        <AppContext.Provider value={{modeChange,setModeChange}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider 
