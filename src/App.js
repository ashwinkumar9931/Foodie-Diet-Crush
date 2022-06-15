
import './App.css';
// import './App2.css';
import React, {useState, useEffect} from 'react';


function App() {


  const [endPoint, setEndPoints] = useState('');
  const [container, setContainer] = useState([]);
  const [finalPoint, setFinalPoint] = useState('');

  useEffect(() => {
    fetchMe()
  }, [finalPoint])

  const fetchMe= () => {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com',
		    'X-RapidAPI-Key': '991a296850msh729897506ea0e1bp144789jsndef04c34c0bb'
      }
    };
    
    fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=+${endPoint}`, options)
      .then(response => response.json())
      .then(response => {
        console.log (response.hits);
        return response.hits;
      })

      .then(data => {
        setContainer(data);
        console.log("variable ");
        console.log(container);
      })

      .catch(err => console.error(err));
  };

  const onChangeHandler = (e) => {
      setEndPoints(e.target.value);
  }

  const submitHandler = e => {
    e.preventDefault();
    setFinalPoint(endPoint);
  }

  

  return (
      
      <div className="App">
      
      
      <div class="loader">
      <div class="loader-square"></div>
      <div class="loader-square"></div>
      <div class="loader-square"></div>
      <div class="loader-square"></div>
      <div class="loader-square"></div>
      <div class="loader-square"></div>
      <div class="loader-square"></div>
      </div>
        
        <p class="beauti">Foodie Diet Crush</p>

        {/* <h1 contenteditable spellcheck="false">Foodie Diet Crush</h1> */}

        <form onSubmit={submitHandler}>
          <input type="text" value={endPoint} onChange={onChangeHandler} placeholder="Search Your Diet Recipe..."/>
          <button type='submit'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
        </form>

      <br></br>
      <div className='element'>

      
        
        {container.map((item, index) => {
          return (
            
            <div  className='geeks'>
            <br></br>
            <br></br>
            
            <a href={item.recipe.url}><img src={item.recipe.image} alt="" /></a>
            <br></br>
            <br></br>

            <p className='beauti4'>{item.recipe.label}
            </p>
            <br></br>
            <div class="beauti2">Dish Type:</div>
            <div class="beauti3">{item.recipe.dishType[0]}</div>
            <br></br>

            <div class="beauti2">Cusine Type:</div>
            <div class="beauti3">{item.recipe.cuisineType[0]}</div>
            <br></br>
            <div>
              <p className='beauti2'>Health Labels:</p>
             {item.recipe.healthLabels.map(name => (  
                <button type="button" class="btn btn-secondary">{name}</button>
              ))}  
            </div>
            <br></br>
            

            </div>
            
          )
        })}
        
      </div>
      </div>
  );
}

export default App;
