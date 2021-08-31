import {useState} from 'react';
import {Route} from 'react-router-dom';
import Cards from './components/Cards';
import City from './components/City';
import NavBar from './components/NavBar';

const App = () => {

  const [cities, setCities]  = useState([]);

  
  const onSearch = (city) => {
    const API_KEY = '4ae2636d8dfbdc3044bede63951a019b';

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then((recurso) => {
        
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          }

          const cityExists = cities.filter(city => city.id === ciudad.id)

          cityExists.length > 0 ? alert('ya esta'): setCities(oldCities => [...oldCities, ciudad]);
        }else{
          alert('Ciudad no encontrada')
        }
      })  
  };

  const onFilter = (cityId) => {
    let city = cities.filter(c => c.id === parseInt(cityId));
    if(city.length > 0){
      return city[0];
    }else{
      return null;
    }
  }

  const onClose = (id) => {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }






  return (
    <div>
      <Route
        path='/'
        render={() => <NavBar onSearch={onSearch}/>}
      />


      <Route
        path='/'
        exact
        render = {() => <Cards cities ={cities} onClose={onClose}/>}
      />

      <Route 

        path='/ciudad/:id'
        render = {({match}) => <City match={match} city={onFilter(match.params.id)}/>}
      />
    </div>
  );
}

export default App;
