import { useContext } from "react"
import { AppContext } from "./AppContext"

function ItemsTodo(props) {
    const {filterTodo} = props
    const {modeChange} = useContext(AppContext)

    return (
    <div className={`box-border ${modeChange?null:"bg-gray-700"}`}>
        {filterTodo.length===0?(<h1 className={`${modeChange?"":"bg-gray-700 text-white"} text-2xl font-bold text-gray-600`}>**No Todos Available</h1>):(
        <ul className="flex flex-wrap">
            {filterTodo.map(items=>(
                <>
                    <li className="bg-gray-200 rounded-2xl w-100  min-h-10 max-h-auto box-border p-2 m-2">
                            <div>
                                <span className="bg-blue-500 text-white min-w-12 p-1 px-2.5 rounded-4xl  ">{items.category}</span>
                            </div>
                            <div>
                            
                    </div>  
                        <div className="flex justify-between flex-wrap">
                            <h1 className="m-2 font-bold">{items.title}</h1>
                            <h1 className="m-2">{items.todayDate}</h1>
                        </div>
                        <p className="ml-4 mt-2">{items.description}
                        </p>
                        
                        <div className="flex justify-between ">
                        <p className="m-2">{`Starts-${items.startDate}`}</p>
                        <p className="m-2">{`Dead line-${items.endDate}`}</p>
                        </div>


                        <div className="flex justify-between">
                            <button className=" px-2 rounded-2xl text-white bg-green-400">Finished </button>
                            <button className="bg-red-500 px-2 rounded-2xl text-white " 
                            >Delete </button>
                        </div>
                    </li>
                </>
            ))}
        </ul>)}
    </div>
  )
}

export default ItemsTodo
