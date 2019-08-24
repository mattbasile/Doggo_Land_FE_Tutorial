import React, {useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [dogs, getDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    axios.get("http://localhost:5000/api/visitors/dogs")
    .then(res=>{
      getDogs(res.data)
      setIsLoading(false)
    })
    .catch(err=>console.log(err))
  })
  return (
    <div className="App">
      {isLoading?
        <h2>Gathering the best Doggos in the world!</h2>
        :
        dogs.map(dog=>{
          return <p>{dog.name}</p>
        })
      }
    </div>
  );
}

export default App;
