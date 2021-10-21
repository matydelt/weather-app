import React, { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({onSearch, error}) {
  const [city, setCity] = useState("");  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      
       <div className="mb-3">
     <input className="form-control"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => {
          
          setCity(e.target.value)}}
      />
    </div>
      <p className="text-danger">{error}</p>
      <input type="submit" value="Agregar" className="btn btn-primary"/>
    </form>
  );
}
