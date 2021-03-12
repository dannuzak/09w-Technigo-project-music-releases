import React from 'react'
/* import svg from '../public/icons/heart.svg' */


export const Album = (props) => {
/* console.log(props.artists[0].name) */
console.log(props)
  return (
    <>
      <div className="album-card">
        <div className = "album-cover">
          <div className="icon-container"> 
            <img className="icon heart" src="/icons/heart.svg" alt="heart icon"/>
            <img className="icon play" src="/icons/play.svg" alt="play button icon"/> 
            <img className="icon dots" src="/icons/dots.svg" alt="dots icon"/> 
          </div>  
          <a href={props.urlAlbum} target= "_blank" rel="noopener noreferrer">
            <img className="cover" src={props.image} alt={props.name}/>
          </a>
          
        </div>
        <div>
        <a href={props.urlAlbum} target= "_blank" rel="noopener noreferrer">  
          <h2 className="album-name">{props.name}</h2>
        </a>  
        </div>
        <div className="album-artist">
          <a href={props.urlArtist} target= "_blank" rel="noopener noreferrer"> 
           <h2>{props.artists}</h2>
          </a> 
        </div>   
      </div> 
    </>
  );
};

export default Album;
