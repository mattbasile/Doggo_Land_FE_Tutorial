import React,{useState,useEffect} from 'react'

export default function DogFilter(props) {
    const [current_items, setCurrentItems] = useState([...props.items]);

 
    useEffect(() => {
        console.log(props.type)
        if(props.type==="age"){
            setCurrentItems(["Puppy", "Dog", "Senior"])
        }
        if(props.type==="breed"){
        // return every value of an array of arrays
        const breeds = props.items.flatMap((item)=>item);
        console.log(breeds)
        const rebrand = new Set(breeds);
        console.log(...rebrand)
        setCurrentItems([...rebrand])
        }

    }, [])
   
    return (
        <section>
            {current_items.map((item,i)=>{
                return<><input key={i} type="checkbox" value={item}/><label>{item}</label></>
            })}
        </section>
    )
}
