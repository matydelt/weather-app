/* eslint-disable jsx-a11y/alt-text */
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
                    <img src="https://i.ibb.co/LSrJMd3/asfasfasf.jpg" alt="img-avatar"/>                    
                </div>
                <Link to="/weather-app/"><button type="button" className="boton-portada">
                   Volver
                </button>
                </Link>
                
            </div>
        </div>
        <div className="perfil-usuario-body">
            <div className="perfil-usuario-bio">
                <h3 className="titulo">Matias Oscar Taborda</h3>
                <p className="texto">Joven Argentino Full Stack Developer y futuro Ingeníero Informatico,siendo alguien responsable, amable, compañero </p>
            </div>
            <div class="perfil-usuario-footer">
                <ul class="lista-datos">
                    <a href="https://www.linkedin.com/in/matias-taborda-full-stack/" className="boton-redes facebook fab fa-facebook-f" ><i className="icon-facebook"></i></a>
                    <li><i className="icono fas fa-building"></i> Conocimientos: </li>
                    <li><img src="https://i.ibb.co/DgWh0tN/images.png" width={"60px"}/>
                    <img src="https://i.ibb.co/8bWDSm0/nodejs-original-wordmark-logo-icon-146412.png" width={"100px"}/>                   
                   <img src=" https://i.ibb.co/9qVg5SS/postgres.png" width={"80px"}/>
                   <img className='img-fallada' src="https://i.ibb.co/zZpr8rX/html-js-css.jpg" width={"300px"} />
                   </li>
                   
                </ul>
                <ul class="lista-datos">
                    <li><i className=""></i> Tecnologias usadas:</li>
                    <li><img src="https://i.ibb.co/DgWh0tN/images.png" width={"80px"}/><img src=" https://i.ibb.co/XXkfGpK/bootstrap.png" width={"80px"}/></li>
                    <li><img src="https://i.ibb.co/zZpr8rX/html-js-css.jpg" width={"300px"}/></li>
                    
                    </ul>
            </div>
            <div class="redes-sociales">
                <a href="https://www.linkedin.com/in/matias-taborda-full-stack/" className="btn btn-primary btn-linkedin" target="_blank" rel="noreferrer">in</a>
                <a src="https://i.ibb.co/gzgNxr0/git.png" href="https://github.com/matydelt" className='btn btn-dark' target="_blank" rel="noreferrer">Git</a>
            </div>
        </div>
    </section>
        </div>
    )
}

export default About
