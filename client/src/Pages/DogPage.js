import React,{useState, useEffect} from 'react'
// Import withRouter to give us access to the match property
import {withRouter} from 'react-router-dom';

function DogPage(props) {
    const [currentDog, setCurrentDog] = useState([]);
    const [currentKennel, setCurrentKennel] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if(props.dogs.length>0){
            let dog = props.dogs.filter(dog=>Number(dog.id)===Number(props.match.params.id));
            let kennel = props.kennels.filter(kennel=>Number(kennel.id)===Number(dog[0].kennel_id))
            setCurrentDog(...dog);
            setCurrentKennel(...kennel);
            setIsLoading(false)
        }
    }, props.dogs)
    let image_styles = isLoading?null:{
        height: "auto",
        backgroundImage: `url(${currentDog.img_url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center", 
        backgroundSize: "cover",
        width: "60%"
    }
    let textStyle = {
        fontFamily: "Lato",
        fontWeight: 300,
        fontSize: "30px",
        lineHeight: "140.3%"
    }
    return (
        <div>
            {isLoading?
                <h2>
                    Fetching Dog Data!
                </h2>
            :
                <section className="flex h-screen">
                    <div style={image_styles} className="w-3/5"></div>
                    <div className="p-12 w-2/5 flex flex-col justify-center">
                        <h2 className="body-font text-5xl font-bold body-font dog-title">{currentDog.name}</h2>
                        <p className="py-4 pr-4 leading-loose">
                         {currentDog.bio}
                        </p>
                    <div className="flex w-full items-baseline justify-between my-4 pr-4">
                        <div className="flex ">
                            <i className="fas fa-dog text-2xl"></i>
                            {currentDog.breeds.map(breed=>{
                               return <p className="text-xl ml-2 capitalize">{breed}</p>
                            })}
                        </div>
                        <div className="flex">
                            <i className="far fa-calendar-alt text-xl"></i>
                            <p className="body-font font-normal ml-2 text-md"> {currentDog.Age} Years</p>
                        </div>
                        <div className="flex items-baseline ">
                            <i className="fas fa-phone text-xl"></i>
                            <p className="body-font font-normal ml-2 ">{currentKennel.phone}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-3/4 mx-auto">
                        <a href={`mailto:${currentKennel.email}`} className="inline-block w-full mt-3 mx-auto h-12 rounded-lg body-font font-semibold text-xl bg-green-400 hover:bg-green-900 hover:text-green-400 flex justify-center items-center text-green-900">
                            Contact Kennel
                        </a>
                        <button className="inline-block w-full mt-3 mx-auto h-12 rounded-lg body-font font-semibold text-xl bg-blue-400 hover:bg-blue-500 hover:bg-blue-900 hover:text-blue-400 flex justify-center items-center text-blue-900">
                            Meet {currentDog.name}
                        </button>
                    </div>
                    
                    </div> 
                </section>







            }
        </div>
    )
}


export default withRouter(DogPage)