import React , {useEffect} from 'react';
import ImagePage from "./ImagePage";

function Dog2(props) {
const {handleShowDog2, nameOfImage}=props;

  useEffect(()=>{
   handleShowDog2()
 },[])


  return (
    <>
      <h1>Dog2</h1>
    {
      nameOfImage.length>0 &&
      nameOfImage.map((img, i)=>{
      return <ImagePage key={i} url={img}/>
      })
    }
    </>

  );
}

export default Dog2;
