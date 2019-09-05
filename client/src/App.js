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
import Footer from "./Components/Utilities/Footer"



export default function App() {
  // Retrieve our Dogs and Kennels from the backend
  const [dogs, setDogs] = useState([]);
  const [kennels, setKennels] = useState([]);
  const [dogsCopy, setDogsCopy] = useState([]);
  const [kennelsCopy, setKennelsCopy] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getDogs = async ()=>{
   await axios.get("http://localhost:5000/api/visitors/dogs")
    .then(res=>{
      setDogs(res.data) 
      setDogsCopy(res.data) 
      setIsLoading(false)
    })
    .catch(err=>console.log(err))
  }
  const getKennels = async () =>{
    await axios.get("http://localhost:5000/api/visitors/kennels")
    .then(res=>{
      setKennels(res.data) 
      setKennelsCopy(res.data) 
      setIsLoading(false)
    })
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    getDogs();
    getKennels();
  },[])
  const handleFilter = async (filterObject) =>{
    await getKennels();
    await getDogs();
    const kennel_copy =  kennels;
    let dog_copy = dogs;
    if(!filterObject){
      return;
    }
    // If the location key array has a length greater than 1
    if(filterObject["location"].length >= 1){
      let location_array = filterObject["location"];
      // Loop over the location array
      let filtered_dogs = []
      for(let i = 0; i<location_array.length; i++){
        let new_dogs = kennel_copy.filter(kennel=>{
          if(kennel.location===location_array[i]){
            return kennel.dogs
        }});
        filtered_dogs = [...filtered_dogs, new_dogs[0].dogs];
      };
      dog_copy = filtered_dogs.flatMap(dog=>dog);
    }
    if(filterObject["age"].length >= 1){
      let age_array = filterObject["age"];
      console.log(age_array);
      let filtered_dogs = []
      for(let i=0; i<age_array.length; i++){
        console.log(age_array[i])
        if(age_array[i]==="Puppy"){
          let puppies = dog_copy.filter(dog=>dog.Age<5);
          console.log(puppies);
          filtered_dogs = [...filtered_dogs, puppies]
        }
        else if(age_array[i]==="Dog"){
          let doggies = dog_copy.filter(dog=>dog.Age<10&&dog.Age>=5);
          filtered_dogs = [...filtered_dogs, doggies]
        }
        else{
          
          let oldies = dog_copy.filter(dog=>dog.Age>=10);
          filtered_dogs = [...filtered_dogs, oldies]
        }
      }
      dog_copy = filtered_dogs.flatMap(dog=>dog);
    }
    if(filterObject["breed"].length >= 1){
      let breed_array = filterObject["breed"];
      console.log(breed_array);
      let filtered_dogs = [];
      for(let i =0; i<breed_array.length; i++){
        // breed_array[i] === filtered breed;
        /*
        Find the dogs who have the breed breed_array[i];
        */
        for(let j = 0; j<dog_copy.length; j++){
          for(let k =0; k<dog_copy[j].breeds.length; k++){
            if(dog_copy[j].breeds[k]===breed_array[i]){
              filtered_dogs.push(dog_copy[j])
            }
          }
        }
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

  return (
    <section className="App bg-blue-100">
      <Navigation/>
        <Switch>
          <Route exact path="/" component={()=><LandingPage dogs={dogs} kennels={kennels} handleFilter={handleFilter} kennelsCopy={kennelsCopy} dogsCopy={dogsCopy}/>}></Route>
          <Route path="/dog/:id" component={()=><DogPage dogs={dogs} kennels={kennels} />}></Route>
          <Route path="/kennel/:id" component={()=><KennelPage kennels={kennels} dogs={dogs} />}></Route>
          {/* Admin Routes */}
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/dashboard/:id" component={AdminDashPage} ></Route>
          <Route path="/profile/:id" component={AdminProfilePage}></Route>
        </Switch>
        <Footer/>
    </section>
  );
}