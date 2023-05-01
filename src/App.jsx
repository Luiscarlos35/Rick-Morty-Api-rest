import './index.css'
import imagenRickMorty from './img/rick-morty.png'
import { useState } from 'react'
import Caracteres from './Componest/Caracteres'

function App() {
  const [Characters, setCharacters] = useState(null);
  const reqApi=async ()=>{
  const api = await fetch('https://rickandmortyapi.com/api/character')
  const characterApi = await api.json();

  setCharacters(characterApi.results);
  

  };
  



  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">Rick & Morty</h1>

      {Characters ?(
        <Caracteres Characters ={Characters} setCharacters = {setCharacters}/> 
      ):(
        <>
        <img src={imagenRickMorty} alt="Rick & Morty" className="img-home"/>
        <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
        </>
      )}
      
     
 

      </header>
    </div>
  )
}
export default App;