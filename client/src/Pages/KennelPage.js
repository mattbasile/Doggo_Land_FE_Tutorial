import React, {useEffect,useState} from 'react'
// Import withRouter to give us access to the match property
import {withRouter} from 'react-router-dom';
import CardSection from "../Components/Users/CardSection"


function KennelPage(props) {
    const [currentKennel, setCurrentKennel] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if(props.kennels.length>0){
            let kennel = props.kennels.filter(kennel=>Number(kennel.id)===Number(props.match.params.id))
            setCurrentKennel(...kennel);
            setIsLoading(false)
        }
    }, props.kennels)
    let image_styles = isLoading?null:{
        height: "auto",
        backgroundImage: `url(${currentKennel.img_url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center", 
        backgroundSize: "cover",
        width: "60%"
    }
    
    return (
        <>
        {isLoading?
                <h2>
                Fetching Dog Data!
                </h2>
            :
        <section>
            <section className="flex h-screen">
                <div style={image_styles} className="w-3/5"></div>
                <div className="p-12 body-font body-font w-2/5 flex flex-col justify-center bg-white">
                    <h2 className="text-5xl font-bold body-font">{currentKennel.name}</h2>
                    <p className=" py-4 pr-4">
                    {currentKennel.bio}
                    </p>
                <div className="flex w-full items-baseline justify-between my-4 pr-4">
                    <div className="flex ">
                        <i className="fas fa-dog text-2xl"></i>
                        <p className="text-xl ml-2">{
                            currentKennel.dogs.length
                        }</p>
                    </div>
                    <div className="flex">
                        <i className="fas fa-home text-xl"></i>
                        <p className="body-font font-normal ml-2 text-md"> {currentKennel.location}</p>
                    </div>
                    <div className="flex items-baseline ">
                        <i className="fas fa-phone text-xl"></i>
                        <p className="body-font font-normal ml-2 ">{currentKennel.phone}</p>
                    </div>
                </div>
                <button  className="inline-block w-full mt-3 mx-auto h-12 rounded-lg body-font font-semibold text-xl bg-green-400 hover:bg-green-900 hover:text-green-400 flex justify-center items-center text-green-900 w-3/4">
                    Contact Kennel
                </button>
                </div> 
            </section>
            <section className="w-full h-24 title-font text-5xl text-white bg-blue-700 text-center py-4 mb-2">
                <h2 className="m-0">Our Dogs</h2>
            </section>
            {currentKennel.dogs.length>0?<CardSection id="dogs" items={currentKennel.dogs} dogMode={true}/>:<h3 className="text-center text-5xl title-font my-16">Sorry, we have no dogs currently ☹️ Please check back soon!</h3>}
        </section>
        }
        </>
    )
}


export default withRouter(KennelPage)