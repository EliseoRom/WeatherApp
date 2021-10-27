import './About.css'
import portrait from '../images/Portrait.jpg'
import { useRef } from 'react'

export default function About() {

    const github = useRef()
    const linked = useRef()
    
    
    return (
      <div className="allabout">
        <div className="contentabt">
            <aside className="sideabt">
              <figure className="picture">
                <div className="picture-shadow"></div>

                <img id="pictureImage" className="picture-image"
                src={`${portrait}`}
                alt="Portrait"
                width="315"
                height="315" />
              </figure>
            </aside>
            <main className="aboutabt">
              <h1 className="nameabt">
                Hola, soy Eliseo
              </h1>
              <p className="jobabt">
                Full Stack Developer & Photographer
              </p>
              <p>Podes encontrarme en mis redes sociales</p>
              <hr className="hrnashe"></hr>
              <div className="contactabt">
                <ul className="social" style={{ listStyleType: 'none' }}>
                  <li>
                    <a href="https://github.com/EliseoRom" style={{ textDecoration: 'none', color: 'black' }} rel="noreferrer" target="_blank" ref={github} onMouseEnter={() => {github.current.classList.toggle('hover')}} onMouseLeave={() => {github.current.classList.remove('hover')}} >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/eliseo-joaquin-romero-developer/" style={{ textDecoration: 'none', color: 'black' }} rel="noreferrer" target="_blank" ref={linked} onMouseEnter={() => {linked.current.classList.toggle('hover')}} onMouseLeave={() => {linked.current.classList.remove('hover')}}>
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
              
                </ul>
              </div>
              <div className="descriptionabt">
                <p>
                Esta App fue creada en el bootcamp de <a href="https://www.soyhenry.com/" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} rel="noreferrer" target="_blank">Henry</a> , el cual nos brindo herramientas para desarrollar la misma.
                 <br></br>
                Las tecnologias que utilizaron JavaScript, CSS y React, la Web recopila datos por medio de una API externa openWeatherMap que mantiene actualizado los datos meteorologicos.

                </p>
              </div>
              
            </main>
        </div>
      </div>
    );
  }

  
