import React from 'react'
import { Link } from 'react-router-dom'
import "./about.css"

function About() {
    return (
        <div>
                <section className="seccion-perfil-usuario">
        <div className="perfil-usuario-header">
            <div className="perfil-usuario-portada">
                <div className="perfil-usuario-avatar">
                    <img src="" alt="img-avatar"/>
                    <button type="button" className="boton-avatar">
                        <i className="far fa-image"></i>
                    </button>
                </div>
                <Link to="/ciudad"><button type="button" className="boton-portada">
                   Volver
                </button>
                </Link>
                
            </div>
        </div>
        <div className="perfil-usuario-body">
            <div className="perfil-usuario-bio">
                <h3 className="titulo">Matias Oscar Taborda</h3>
                <p className="texto">Full Stack Developer,</p>
            </div>
            <div class="perfil-usuario-footer">
                <ul class="lista-datos">
                    <li><i className="icono fas fa-map-signs"></i> Direccion de usuario:</li>
                    <li><i className="icono fas fa-phone-alt"></i> Telefono:</li>
                    <li><i className="icono fas fa-briefcase"></i> Trabaja en.</li>
                    <li><i className="icono fas fa-building"></i> Cargo</li>
                </ul>
                <ul class="lista-datos">
                    <li><i className="icono fas fa-map-marker-alt"></i> Ubicacion:</li>
                    <li><i className="icono fas fa-calendar-alt"></i> Fecha nacimiento:9/8/1997</li>
                    <li><i className="icono fas fa-user-check"></i> Registro.</li>
                    <li><i className="icono fas fa-share-alt"></i> Redes sociales.</li></ul>
            </div>
            <div class="redes-sociales">
                <a href="https://www.linkedin.com/in/matias-taborda-full-stack/" className="boton-redes facebook fab fa-facebook-f" >in<i className="icon-facebook"></i></a>
                <a href="https://github.com/matydelt" className="boton-redes twitter fab fa-twitter">git</a>
                {/* <a href="" className="boton-redes instagram fab fa-instagram"></a> */}
            </div>
        </div>
    </section>
        </div>
    )
}

export default About
