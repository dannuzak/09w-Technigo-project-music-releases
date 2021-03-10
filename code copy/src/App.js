import React from 'react'
import data from './data.json'
import Header from './components/Header'
import Album from './components/Album'

// const artistName = `${data.albums.artists.name}` 

console.log(data)

export const App = () => {
  return (
    <>
      <div className="App">
        <Album  /> 
       
      </div>
      <div>
        
      </div>
    </>
  )
}

export default App; 
// const getData = () => {

//   fetch('./data.json')
  
//   .then ((response) => {
//     return response.json();
//     console.log(response)
//   })
//   .then ((myJson) => {
//     // const filterAlbum = 
//   console.log(myJson);
//   });
// }
// useEffect(() => {
//   getData()
// })