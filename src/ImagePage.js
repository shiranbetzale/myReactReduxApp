import React from 'react';

function ImagePage(props) {
 const {url}=props;

  return (
    <div style={{width: '200px', height:'200px', display: 'flex'}}>
      <img src={url}/>
    </div>
  );
}

export default ImagePage;
