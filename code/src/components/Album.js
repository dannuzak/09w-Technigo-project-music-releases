import React from 'react'


export const Album = (props) => {
/* console.log(props.artists[0].name) */
console.log(props)
  return (
    <>
     
      <div className="album-card">
        <a 
          href={props.urlAlbum} 
          target= "_blank" 
          rel="noopener noreferrer"
        >
          <img className="album-cover" src={props.image} alt="Album cover"/>
        </a>
        <div className="album-text">
          <h2 className="album-name">{props.name}</h2>
          <a 
            href={props.urlArtist}
            target= "_blank" 
            rel="noopener noreferrer"
          >
            <h3 className="album-artist">{props.artists}</h3>
          </a> 
        </div>
      </div>
     
    </>
  );
};

export default Album;
