import React,{useState,useEffect} from 'react'

export default function DogFilter(props) {
    const [current_items, setCurrentItems] = useState([...props.items]);
    
    // Using useEffect to determine which values to display to filter our content.
    useEffect(() => {
        if(props.type==="age"){
            setCurrentItems(["Puppy", "Dog", "Senior"])
        }
        if(props.type==="breed"){
        const breeds = props.items.flatMap((item)=>item);
        const rebrand = new Set(breeds);
        setCurrentItems([...rebrand])
        }
    }, [])
   
    return (
        <>
            {current_items.map((item,i)=>{
                return<div className="w-100 my-4 flex items-center"><input onChange={(e)=>props.handleSelection(e)} key={i} type="checkbox" value={item} name={props.type}/><label className="ml-2 text-lg">{item}</label></div>
            })}
       </>
    )
}
