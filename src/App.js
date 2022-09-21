import React , {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { nameOfImageAction,fetchDogData, fetchSubDogData } from "./action";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Dog1 from "./Dog1";
import Dog2 from "./Dog2";
import Home from "./Home";

function App() {
  const [nameDog, setNameDog]=useState('');
  const [subNameDog, setSubNameDog]=useState('');

  const dogs=useSelector(state=>state.dogsData);
  const subDogs=useSelector(state=>state.subDogData);
  let nameOfImage=useSelector(state=>state.nameOfImage);

  const dispatch=useDispatch();
  
  const handleChange=(strSelected)=>{
    strSelected !== "" && dispatch(fetchSubDogData(strSelected));
    setNameDog(strSelected);
    setSubNameDog('');
    nameOfImage=[]
  }
  
  const handleChangeSubDogs=(strSelected)=>{
    setSubNameDog(strSelected)
  }
  
  const handleChangeNumOfImages=(strSelected)=>{
    dispatch(nameOfImageAction(nameDog, subNameDog, strSelected))
  }

  useEffect(()=>{
     dispatch(fetchDogData());
  },[])

  const params= {
    nameOfImage, nameDog,dogs,subDogs,  subNameDog, handleChange, handleChangeSubDogs, handleChangeNumOfImages 
  }

  const handleShowDog1=()=>{
    dispatch(nameOfImageAction('hound', 'blood', 1))
  }

  const handleShowDog2=()=>{
    dispatch(nameOfImageAction('dane', 'great', 1))
  }

  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home - search</Link>
            </li>
            <li>
              <Link to="/dog1">dog1</Link>
            </li>
            <li>
              <Link to="/dog2">dog2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/dog1" element={<Dog1  handleShowDog1={handleShowDog1} nameOfImage={nameOfImage}/>} />
          <Route path="/dog2" element={<Dog2 handleShowDog2={handleShowDog2}  nameOfImage={nameOfImage}/>} />
          <Route path="/" element={<Home  {...params} />} />
        </Routes>

    </Router>
  );
}

export default App;
