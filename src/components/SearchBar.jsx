import React, { useState } from "react";

export default function SearchBar({onSearch}) {
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
        onChange={e => setCity(e.target.value)}
      />
    </div>
      
      <input type="submit" value="Agregar" className="btn btn-primary"/>
    </form>
  );
}
