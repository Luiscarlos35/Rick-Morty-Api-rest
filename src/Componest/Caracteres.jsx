import './Caracteres.css';

function Characters(props) {
  const {Characters,setCharacters} = props;

  const resetCharacters = () =>{
    setCharacters(null);
  }
  
  

  return (
    <div className='characters'>
        <h1>Personajes</h1>
        <span className='back-home'onClick={resetCharacters}>Volver al Inicio</span>
        <div className='container-characters'>
          {Characters.map((characters,index)=>(
            <div className='character-container'key={index}>
          <p>{characters.name}</p> 
          <div>
          <img src={characters.image} alt={characters.name} />
          </div>
         <div>
          <h3>{characters.name}</h3> 
          <h6>
          {characters.status=== "Alive" ? (
            <>
            <span className="alive"/>
            Vivo
            </>
            ):(
              <>
              <span className='dead'>
                Muerto

              </span>
              </>
          )}
          </h6>
          <p>
            <span className='text-grey'>Episodios: </span>
           <span>{characters.episode.length}</span>
          </p>
          <p>
            <span className='text-grey'>Especie: </span>
            <span>{characters.species}</span>
          </p>
         </div>
        </div>
          ))}
    </div>
    <span className='back-home'onClick={resetCharacters}>Volver al Inicio</span>
    </div>
  );
}

export default Characters;