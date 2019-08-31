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
        <section>
            {current_items.map((item,i)=>{
                return<><input onChange={(e)=>props.handleSelection(e)} key={i} type="checkbox" value={item} name={props.type}/><label>{item}</label></>
            })}
        </section>
    )
}
