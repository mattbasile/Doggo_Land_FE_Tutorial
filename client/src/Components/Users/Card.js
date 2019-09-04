import React from 'react'
import {withRouter} from 'react-router-dom'

function Card(props) {
    let image_styles = {
            height: "350px",
            background: `lightblue url(${props.item.img_url}) no-repeat center center`, 
            backgroundSize: "cover"
    }
    return (
        <div className="card my-8 mx-1 flex flex-col justify-between">
            <div style={image_styles} className="rounded-t-sm"></div>
            <div className="px-4">
                <div className="flex items-center mt-3">
                    <p className="text-3xl body-font font-extrabold">{props.item.name}</p>
                    {props.item.male >= 1 ? 
                    ( <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-700 body-font text-white mx-2 ">M</div>)
                    : <div className="w-8 h-8 rounded-full flex items-center justify-center bg-pink-300 body-font text-white mx-2 ">F</div>
                    }
                    {props.item.Size === "small" ? (
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-700 body-font text-white">Sm</div>
                    ) : props.item.size ==="medium" ? (
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-orange-500 body-font text-white">Md</div>
                    ) : (
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-red-500 body-font text-white">Lg</div>
                    )}
                   
                    
                </div>
                <p className="body-font font-normal ">{
                    props.item.bio === null ? `${props.item.name} is the goodest doggo...` : props.item.bio.length > 90 ? (`${props.item.bio.substring(0,90)}...`) : props.dog.bio 
                    } 
                </p>
            </div>
            <div className="mt-8 bg-gray-100 rounded-b-sm text-center body-font ">
                {props.dogMode?
                <button className="w-4/5 bg-blue-700 text-white h-8 rounded mx-auto my-6 font-semibold hover:bg-blue-800 flex justify-center items-center"  onClick={()=>{props.history.push(`/dog/${props.item.id}`)}}>Learn More</button>
                : <button className="w-4/5 bg-blue-700 text-white h-8 rounded mx-auto my-6 font-semibold hover:bg-blue-800 flex justify-center items-center" onClick={()=>{props.history.push(`/kennel/${props.item.id}`)}}>Learn More</button>
                }
            </div>
        </div>
    )
}
export default withRouter(Card)
