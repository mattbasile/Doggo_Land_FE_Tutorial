import React, {useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';
// Adding to create our dynamic routes
import {Switch} from 'react-router'
import {Route, withRouter} from 'react-router-dom'
// Importing Pages for rendering
import LandingPage from "./Pages/LandingPage"
import DogPage from "./Pages/DogPage"
import KennelPage from "./Pages/KennelPage"
// Admin Pages
import LoginPage from "./Pages/LoginPage"
import AdminDashPage from "./Pages/AdminDashPage"
import AdminProfilePage from "./Pages/AdminProfilePage"
// Import Navigation
import Navigation from "./Components/Utilities/Navigation"



export default function App() {
  // Retrieve our Dogs and Kennels from the backend
  const [dogs, setDogs] = useState([]);
  const [kennels, setKennels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    axios.get("http://localhost:5000/api/visitors/dogs")
    .then(res=>{
      setDogs(res.data) 
      setIsLoading(false)
    })
    .catch(err=>console.log(err))
    axios.get("http://localhost:5000/api/visitors/kennels")
    .then(res=>{
      setKennels(res.data) 
      setIsLoading(false)
    })
    .catch(err=>console.log(err))
  },[])
  const handleFilter = (filterObject) =>{
    const kennel_copy = kennels;
    let dog_copy = dogs;
    if(!filterObject){
      return;
    }
    // If the location key array has a length greater than 1
    console.log(filterObject["location"].length)
    if(filterObject["location"].length >= 1){
      let location_array = filterObject["location"];
      // Loop over the location array
      let filtered_dogs = []
      for(let i = 0; i<location_array.length; i++){
        let new_dogs = kennel_copy.filter(kennel=>{
          if(kennel.location===location_array[i]){
            return kennel.dogs
        }});
      console.log(new_dogs)
        filtered_dogs = [...filtered_dogs, new_dogs[0].dogs];
        console.log(filtered_dogs)
      };
      console.log(dog_copy)
      dog_copy = filtered_dogs.flatMap(dog=>dog);
    }
    console.log(dog_copy);
    if(filterObject["age"].length >= 1){
      let age_array = filterObject["age"];
      let filtered_dogs = []
      for(let i =0; i<age_array; i++){
        if(age_array[i]==="Puppy"){
          let puppies = dog_copy.filter(dog=>dog.Age<5);
          filtered_dogs = [...filtered_dogs, puppies]
        }
        else if(age_array[i]==="Dog"){
          let doggies = dog_copy.filter(dog=>dog.Age<10);
          filtered_dogs = [...filtered_dogs, doggies]
        }
        else{
          let oldies = dog_copy.filter(dog=>dog.Age>10);
          filtered_dogs = [...filtered_dogs, oldies]
        }
      }
      dog_copy = filtered_dogs;
      console.log(dog_copy)
    }
    if(filterObject["breed"].length >= 1){
      let breed_array = filterObject["breed"];
      let filtered_dogs = [];
      for(let i =0; i<breed_array; i++){
        let new_dogs = dog_copy.filter(dog=>{
          return dog.breeds.filter(breed=>{
            if(breed = breed_array[i]);{
              return breed
            }
          })
        })
        filtered_dogs = [...filtered_dogs, new_dogs];
      }
      dog_copy = filtered_dogs;
      console.log(dog_copy)
    }
    if(dog_copy.length === dogs.length){
      return;
    }
    else{
      setDogs(dog_copy)
    }
  }

  const filterItems = (filter, values) =>{
    if(filter === "location"){
      const filtered_locations = kennels.filter(kennel=>{
        if(kennel.location===filter){
          return kennel.dogs
        }
        setKennels(filtered_locations);
      });
    }
    else if(filter ){}
  }
  return (
    <section className="App">
      <Navigation/>
        <Switch>
          <Route exact path="/" component={()=><LandingPage dogs={dogs} kennels={kennels} handleFilter={handleFilter}/>}></Route>
          <Route path="/dog/:id" component={()=><DogPage dogs={dogs}/>}></Route>
          <Route path="/kennel/:id" component={()=><KennelPage kennels={kennels}/>}></Route>
          {/* Admin Routes */}
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/dashboard/:id" component={AdminDashPage} ></Route>
          <Route path="/profile/:id" component={AdminProfilePage}></Route>
        </Switch>
    </section>
  );
}