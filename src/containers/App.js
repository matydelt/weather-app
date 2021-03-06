import React, { useState } from 'react';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import { Route } from 'react-router';
import About from '../components/about';
import Ciudad from '../components/ciudad';
import axios from 'axios';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  const [error, setError] = useState("")
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then((recurso) => {
        recurso = recurso.data
        if (recurso.main !== undefined && !cities.find(e => e.id === recurso.id)) {
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
          };
          setError("")
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          if (cities.find(e => e.id === recurso.id)) return setError("Esta ciudad ya esta siendo mostrada!")
          return setError("Esta ciudad no existe!")
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.find(c => c.id === parseInt(ciudadId));
    if (ciudad) {
      return ciudad;
    } else {
      return null;
    }
  }
  return (
    <div className="App">
      <Route basename={process.env.PUBLIC_URL}>

        <Route path='/' exact render={() => (<Nav onSearch={onSearch} setError={setError} error={error} />)} />
        <Route path='/' exact render={() => (<Cards
          cities={cities}
          onClose={onClose}
        />)}
        />
        <Route path='/ciudad/:ciudadId' exact render={({ match }) => {
          const city = onFilter(match.params.ciudadId)
          return <Ciudad city={city} />;
        }} />

        <Route path='/about' exact component={About} />
      </Route>
    </div>
  );
}

export default App;
