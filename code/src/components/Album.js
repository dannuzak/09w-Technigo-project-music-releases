import React from 'react'


export const Album = (props) => {
console.log(props.artists[0].name)
  return (
    <>
     <div className="main-container">
      <div className="album-container">
        <img className="album-cover" src="https://via.placeholder.com/150" alt="Album cover"/>
        <h3 className="album-name">{props.name}</h3>
        <h3 className="album-artist"> {props.artists[0].name}</h3>
      </div>
     </div>  
    </>
  );
};

export default Album;

// props.images[0].url