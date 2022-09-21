import React from 'react';
import DdlList from './DdlPage';
import ImagePage from "./ImagePage";

function Home(props) {
  const {nameOfImage, nameDog,dogs,subDogs,  subNameDog, handleChange, handleChangeSubDogs, handleChangeNumOfImages }=props;

  return (
  <div className="App">
    <DdlList 
      str={nameDog}
      options={dogs}
      subDogs={subDogs}
      subNameDog={subNameDog}
      handleChange={handleChange}
      handleChangeSubDogs={handleChangeSubDogs}
      handleChangeNumOfImages={handleChangeNumOfImages}
    />
    {
      nameOfImage.length>0 &&
      nameOfImage.map((img, i)=>{
      return <ImagePage key={i} url={img}/>
      })
    }
  </div>
  );
}

export default Home;

