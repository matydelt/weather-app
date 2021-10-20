import React from "react";
import { Link } from "react-router-dom";
import "./ciudad.css"

export default function Ciudad({city}) {
    return (
        <div className="ciudad">
            <Link to="/">
                        <button className="btn btn-sm btn-danger">volver</button>
            </Link>
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {Math.floor(city.temp-270)} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {Math.floor(city.latitud)}º</div>
                        <div>Longitud: {Math.floor(city.longitud)}º</div>
                    </div>
            </div>
        </div>
    )
}