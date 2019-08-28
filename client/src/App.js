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




function App() {
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
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={()=><LandingPage dogs={dogs} kennels={kennels}/>}></Route>
        <Route path="/dog/:id" component={()=><DogPage dogs={dogs}/>}></Route>
        <Route path="/kennel/:id" component={()=><KennelPage kennels={kennels}/>}></Route>
        {/* Admin Routes */}
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/dashboard/:id" component={AdminDashPage} ></Route>
        <Route path="/profile/:id" component={AdminProfilePage}></Route>
      </Switch>
    </div>
  );
}

export default App;
