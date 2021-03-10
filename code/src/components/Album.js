import React from 'react'
/* import data from './data.json' */

export const Album = (props) => {
console.log(props)
  return (
    <>
      <div className="album-container">
        <img src="{props.images[0].url}" alt="Album cover"/>
        <h3>{props.name}</h3>
        <h3>{props.artists[0].name}</h3>
      </div>
    </>
  );
};

export default Album;

