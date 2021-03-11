import React from 'react'


export const Album = (props) => {
/* console.log(props.artists[0].name) */
console.log(props)
  return (
    <>
     
      <div className="album-card">
        <img className="album-cover" src="https://via.placeholder.com/150" alt="Album cover"/>
        <div className="album-text">
          <h2 className="album-name">{props.name}</h2>
          <h3 className="album-artist"> {props.artists[0].name}</h3>
        </div>
      </div>
     
    </>
  );
};

export default Album;

// props.images[0].url