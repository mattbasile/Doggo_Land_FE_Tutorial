import React,{useState} from 'react'
import HeroImg from "../media/hero_img.jpg"
// import Card Section
import CardSection from "../Components/Users/CardSection"
import DogFilter from "../Components/Users/DogFilter"

export default function LandingPage(props) {
    const heroBgStyle ={
        background:`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.4)), url(${HeroImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '650px'
    }
    const [dogMode, setDogMode] = useState(true);
    const [selectedFilters, setSelectedFilter] = useState({location: [], age: [], breed:[]});
    const [showFilter, setShowFilter] = useState(false);

    // arrayRemove Function from -> https://love2dev.com/blog/javascript-remove-from-array/
    function arrayRemove(arr, value) {
        let text = arr.filter(function(ele){
            return ele != value;
        });
        setSelectedFilter(text);
     }
    const handleSelection =(e)=>{
        let key = e.target.name;
        let value = e.target.value;
        if(selectedFilters[key]){
            if(selectedFilters[key].includes(value)){
               let reset = selectedFilters[key].filter(val=>val!==value);
               setSelectedFilter(prev => ({...prev, [key]: reset}));
            }
            else{
               let new_array = [...selectedFilters[key], value];
               setSelectedFilter(prev => ({...prev, [key]: new_array}));
            }
        }
        else{
            setSelectedFilter(prev => ({...prev, [key]: value}))
        }
    }
    const toggleFilter = (e)=>{
        e.preventDefault();
        setShowFilter(!showFilter);
    }
    const SubmitFilter = (e)=>{
        e.preventDefault();
        props.handleFilter(selectedFilters);
        toggleFilter(e);
    }
    return (
        <section >
           {/* Header */}
           <div style={heroBgStyle} className="w-full flex items-center">
               <div className="w-1/2 ml-32">
                    <h2 className="text-5xl title-font text-10xl text-white ">Find your best friend today!</h2>
                    <div className="w-1/2 mt-12 flex justify-between">
                        <button className="bg-green-600 py-2 px-4 text-lg rounded text-white font-semibold body-font">Search Dogs</button>
                        <button className="bg-blue-600 py-2 px-4 text-lg rounded text-white font-semibold body-font">Search Kennels</button>
                    </div>
               </div> 
           </div>
           {/* Dog | Kennel Toggle */}
            <div className="h-24 bg-blue-700 text-white title-font ">
                <div className="h-24 flex text-5xl w-4/5 items-center justify-around mx-auto">
                    <p onClick={()=>{setDogMode(true)}}>Dogs</p>
                    <p onClick={()=>{setDogMode(false)}}>Kennels</p>
                </div>
            </div>
            {/* Filter */}
        {/* 
            Filter both dogs and location age and breed.
            - Get Locations from Kennels
            - If location is selected use their dog array for the cardSection
        */}
            <button className="text-lg font-semibold body-font" onClick={(e)=>{toggleFilter(e)}}>Filter</button>
            {showFilter?
                <section className="" >
                    <div className="flex">
                        <div>
                        <p>Location</p>
                        <DogFilter items={props.kennels.map(kennel=>kennel.location)} type={"location"} handleSelection={handleSelection}/>
                        </div>
                        <div>
                        <p>Age</p>
                        <DogFilter items={props.dogs.map(dog=>dog.Age)} type={"age"} handleSelection={handleSelection}/>
                        </div>
                        <div>
                        <p>Breed</p>
                        <DogFilter items={props.dogs.map(dog=>dog.breeds)} type={"breed"} handleSelection={handleSelection}/>
                        </div>
                    </div>
                    <button onClick={(e)=>SubmitFilter(e)}>Submit Search</button>
                </section>
                : null
            }

           {/* Card Section -> Cards */}    
            <CardSection id="dogs" items={dogMode?props.dogs:props.kennels} dogMode={dogMode}/>
           

        </section>
    )
}
