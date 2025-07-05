import { useContext } from "react"
import myphoto from "../assets/myphoto.jpg"
import { BsMoonFill, BsSunFill } from "react-icons/bs"
import { AppContext } from "./AppContext"

function Header() {
    const {modeChange,setModeChange} = useContext(AppContext)
  return (
    <div className={`w-full bg-[#d3c191] h-[10vh] text-5xl flex justify-between items-center box-border p-8 
    ${modeChange?null:"bg-gray-700"}`}>
        
        <div>
            <h1 className="font-[800] text-gray-500 max-sm:text-3xl sm:text-4xl">TODofy </h1>
        </div>
        <div className="flex items-center"> 
            {modeChange?(<BsMoonFill className="w-20 size-9 text-gray-700 max-sm:size-7 sm:size-8" onClick={()=>setModeChange(!modeChange)}/>):(<BsSunFill className="text-[#d3c191] w-20 size-9 
            max-sm:size-7 sm:size-8 " 
            onClick={()=>setModeChange(!modeChange)}/>)}
            <img src={myphoto} alt=""  className="w-13 rounded-full m-4 max-sm:w-10 sm:w-13"/>
        </div>
        
    </div>
  )
}

export default Header