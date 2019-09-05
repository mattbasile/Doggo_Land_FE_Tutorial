import React from 'react'
import {withRouter} from 'react-router-dom'

function Card(props) {
    let image_styles = {
            height: "350px",
            background: `lightblue url(${props.item.img_url}) no-repeat center center`, 
            backgroundSize: "cover"
    }
    return (
        <div className="card my-8 mx-3 flex flex-col justify-between">
            <div style={image_styles} className="rounded-t-sm"></div>
            {props.dogMode?
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
            :
            <div className="card-text px-4">
                <div className="flex items-center justify-between">
                    <p className="text-3xl body-font font-extrabold">{props.item.name}</p>
                    <div className="flex ">
                        <i className="fas fa-dog text-2xl"></i>
                        <p className="text-xl ml-2">{props.item.dogs.length}</p>
                    </div>
                    
                </div>
                <p className="body-font font-normal ">{
                    props.item.bio === null ? `${props.item.name} is a lovely home for dogs...` : props.item.bio.length > 90 ? (`${props.item.bio.substring(0,90)}...`) : props.item.bio 
                    } 
                </p>
                <div className="flex mt-4">
                    <div className="flex w-1/2 items-baseline ">
                        <i className="fas fa-home text-xl"></i>
                        <p className="body-font font-normal ml-2 text-md"> {props.item.location}</p>
                    </div>
                    <div className="flex w-1/2">
                    <div className="flex items-baseline ">
                        <i className="fas fa-phone text-xl"></i>
                        <p className="body-font font-normal ml-2 ">{props.item.phone}</p>
                    </div>
                    </div>
                </div>
            </div>
            }
            <div className="mt-8 bg-gray-100 rounded-b-sm text-center body-font ">
                <button className="w-4/5 bg-blue-700 text-white h-8 rounded mx-auto my-6 font-semibold hover:bg-blue-800 flex justify-center items-center"onClick={()=>{props.dogMode?props.history.push(`/dog/${props.item.id}`):props.history.push(`/kennel/${props.item.id}`)}}>Learn More</button>
                
            </div>
        </div>
    )
}
export default withRouter(Card)
