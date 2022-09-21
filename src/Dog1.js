import React , {useEffect} from 'react';
import ImagePage from "./ImagePage";

function Dog1(props) {
const {handleShowDog1, nameOfImage}=props;

  useEffect(()=>{
   handleShowDog1()
 },[])

  return (
    <>
      <h1>Dog1</h1>
    {
      nameOfImage.length>0 &&
      nameOfImage.map((img, i)=>{
      return <ImagePage key={i} url={img}/>
      })
    }
    </>

  );
}

export default Dog1;
