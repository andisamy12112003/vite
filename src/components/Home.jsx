import {useContext, useEffect, useState } from 'react'
import Header from './Header'
import ItemsTodo from './ItemsTodo'
import { BiSearch } from 'react-icons/bi'
import { AppContext } from './AppContext'
const categoryArr = [
    {
        
        value:"personal"
    },
    {
        
        value:"family"
    },
    {
    
        value:"friends"
    },
    {
        
        value:"sports"
    },
    {
    
        value:"education"
    },
    {
        value:"cooking"
    },
    {

        value:"bills"
    },
    {

        value:"birth day"
    },
    {
        value:"other"
    },
    
]

function Home() {
    const [category,setCategory] = useState("personal")
    const [title,setTitle] = useState(null)
    const [description,setDescription] = useState(null)
    const [startDate,setStartDate] = useState(null)
    const [endDate,setEndDate] = useState(null)
    const [errorTitle,setErrorTitle] = useState(false)
    const [errorStartDate,setErrorStartDate] = useState(false)
    const [errorEndDate,setErrorEndDate] = useState(false)
    const [errorDescription,setErrorDescription] = useState(false)
    const [searchInput,setSearchInput] = useState("")
    const {modeChange} = useContext(AppContext)
    const [todoList,setTodoList] = useState([])
    const [filterTodo,setFilterTodo] = useState(todoList)
    {/*avoid update the state variable in the useState method beacase the use state return the current state values during add the object in the array so the first object before onClick event*/}
    {/*the altenative methoad is assign a variable and set the object data and pass the data to the useState update array function*/}
    let addtodoData = {
        category,title,description,startDate,endDate
    }
    useEffect(()=>{
        const updateSearchItems = todoList.filter(items=>items.category.includes(searchInput))
        setFilterTodo(updateSearchItems)    
    },[todoList,searchInput])

    const AddTodo = () =>{
        if(title===null){
            setErrorTitle(true)
        }
        if (description===null){
            setErrorDescription(true)
        }
        if(startDate===null){
            setErrorStartDate(true)
        }
        if(endDate===null){
            setErrorEndDate(true)
        }
        if(title!==null){
            setErrorTitle(false)
        }
        if(endDate!==null){
            setErrorEndDate(false)
        }
        if(description!==null){
            setErrorDescription(false)
        }
        if(startDate!==null){
            setErrorStartDate(false)
        }
        if(title!==null && endDate!==null && description!==null && startDate!==null){
            setTodoList(prev=>([...prev,addtodoData]))
            
        }
    }
  
    return (
    <div className={`w-screen ${modeChange?null:"bg-gray-700"}`}>
        <Header/>
        

        <div className=' flex max-sm:flex-col'>
            {/*sidebar container */}
        <div className={`h-[90vh] w-[25vw] max-sm:w-full max-sm:h-auto lg:h-auto max-lg:h-auto bg-[#d3c191] text-gray-500 max-lg:w-[40vw] box-border ${modeChange?null:"bg-gray-700 text-white"}`}>
            {/*input container*/}
            
            <div className='box-border p-7 '>
                   
                <div className="">
                    {/*title and category*/}
                    <div className='flex justify-between items-center max-sm:flex-col max-sm:items-start max-lg:flex-col max-lg:items-start lg:flex-col '>
                        <div className='max-sm:flex max-sm:flex-col max-lg:flex max-lg:flex-col lg:flex lg:flex-col  lg:w-full'>    
                            <label htmlFor="title" className='font-bold'>Title</label>
                            <input type="text" className={`border-2 m-1 rounded-md outline-none p-1
                             bg-[#e1d5c1] ${modeChange?null:"bg-gray-700"}`} onChange={(event)=>(setTitle(event.target.value))} value={title} placeholder='Enter Title'/>
                            {errorTitle?(<p className='text-red-500 font-bold text-[13px]'>*Enter Title</p>):""}
                        </div>

                    {/*Category container*/}
                        <div className='max-sm:flex max-sm:flex-col mt-2 lg:flex lg:flex-col lg:w-full'>
                            <label htmlFor="category" className='font-bold'>Category</label>
                            <select name="category" id="category" onChange={(event)=>setCategory(event.target.value)} className={`outline-none border-2 p-[1px] m-1 rounded-sm font-[600] 
                             max-lg:flex max-lg:flex-col bg-[#e1d5c1] ${modeChange?null:"bg-gray-700"}`}>
                                
                                {categoryArr.map(item=>(
                                    <option className="" value={item.value} key={item.id}>{item.value}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {/*decription container*/}
                    <div>    
                        <label htmlFor='description' className='font-bold'>Description</label><br />
                        <textarea name="" id="description" className={`border-2 max-sm:w-[80vw] h-70 max-sm:h-40 m-1 rounded-md outline-none p-1 max-lg:w-full max-lg:h-50 lg:w-full 
                    lg:h-[20vh] bg-[#e1d5c1] ${modeChange?null:"bg-gray-700"}`} onChange={(event)=>setDescription(event.target.value)}  value={description} placeholder='Enter Description'></textarea>
                        {errorDescription?(<p className='text-red-500 font-bold text-[13px]'>*Enter Description</p>):""}
                    </div>

                </div>
                {/*Date container*/}
                <div className='flex justify-between items-center max-sm:flex-col max-sm:items-start max-lg:flex-col max-lg:items-start lg:flex-col lg:items-start'>
                    <div className='mt-2 '>
                        <p className='font-bold '>Task start on </p>
                        <input className='font-[500] ' type="date" onChange={(event)=>setStartDate(event.target.value)}/>
                        {errorStartDate?(<p className='text-red-500 font-bold text-[13px]'>*Select Start Date</p>):""}
                    </div>
                    <div className='mt-2'>
                        <p className='font-bold'>Deadline on </p>
                        <input className='font-[500]' type="date" onChange={(event)=>setEndDate(event.target.value)} />
                        {errorEndDate?(<p className='text-red-500 font-bold text-[13px]' >*Select End Date</p>):""}
                    </div>
                </div>
            
            {/*add todo container*/}
                <div className='mt-4 max-lg:mt-6 lg:mt-6 '>
                    <button className={` ${modeChange?null:"bg-gray-700"} border-2 p-1 rounded-md font-bold bg-[#aea5a5]`} onClick={AddTodo}>Add Todo</button>
                </div>    
            
            </div>

            
        </div>

        
        <div >
            {/*filter container*/}
                
            <div className={`${modeChange?null:"bg-gray-700"} flex bg-[#d3c191] max-sm:flex-col max-sm:p-3`}>

                <div className='flex justify-start items-start'>
                <input type="text" className={`border-2 rounded-md outline-none bg-[#e1d5c1] 
                border-gray-500 p-1 w-70 border-r-0 ${modeChange?null:"bg-gray-700 text-white"} `} onChange={(event)=>setSearchInput(event.target.value)} 
                placeholder='Search Category'/>
                <div className={`${modeChange?null:"bg-gray-700"} border-2 border-gray-500 bg-[#e1d5c1] border-l-0 p-1 -ml-1`}>
                <BiSearch className=' text-2xl'/>
                </div>   
                </div>
            </div>
            {/*todo ITems container*/}
            <div className={`${modeChange?null:"bg-gray-700"} max-lg:w-[60vw] w-[75vw] bg-[#d3c191] h-[85vh] box-border p-5 max-sm:w-full max-sm:h-auto overflow-auto no-scrollbar`}>
                <ItemsTodo filterTodo={filterTodo} />
            </div>
        </div>


        </div>
    </div>
  )
}

export default Home