import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import './styles/index.css';
import industrialPortDeBarcelonaEvening from "./assets/img/industrialPortDeBarcelonaEvening.jpg";
import chevronRight from "./assets/icons/chevronRight.svg";
import africanAmericanworkerWritingInventoryListWhileCheckingStock from "./assets/img/africanAmericanworkerWritingInventoryListWhileCheckingStock.jpg";
import teamEmployeesCheckingStock from "./assets/img/teamEmployeesCheckingStock.jpg";
import closeUpDeliveryPerson from "./assets/img/closeUpDeliveryPerson.jpg";
import CoTradSarlLogoV1 from "./assets/logo/CoTradSarlLogoV1.jpg";
import CoTradSarlLogoV4 from "./assets/logo/CoTradSarlLogoV4.png";
import CoTradSarlLogoV5 from "./assets/logo/CoTradSarlLogoV5.png";
import forkliftBoxesAssortment from "./assets/img/forkliftBoxesAssortment.jpg";
import userSolid from "./assets/icons/userSolid.svg";







function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <header>

          <div className='nav-bar'>

            <div className='logo-name'>

              <img src={CoTradSarlLogoV1} className='logoV1'/>

              <span className='logo-text'>cotrad sarl</span>


            </div>

            <nav>

              <li className='active'>accueil</li>
              <li className='active-propos'><a href="#propos">a propos de nous</a></li>
              <li className='active-mission'><a href="#missions">notre mission</a></li>
              <li className='active-services'><a href='#services'>nos services</a></li>
              <li className='active-post'><a href='#post'>temoinages</a></li>
              <li className='active-contacts'><a href='#contacts'>contacts</a></li>


            </nav>

          </div>

          <div className='header-filtre'>

            <img src={industrialPortDeBarcelonaEvening} alt="" className='header-background'/>

            <div className='filtre'></div>

            <div className='filter-content'>

              <div>

                <h1 className='header-title'>transitaire et commissionnaire de transport international</h1>

                <p className='header-description'>Nous assurons les meilleurs coûts, délais et conditionnements des marchandises du dédouanement à la livraison.</p>

                <img className='logo-v4' src={CoTradSarlLogoV4}/>

              </div>                

            </div>


          </div>

      </header>

      <section id='background-about'>

        <div className='background-filter'></div>

        <div className='section-text'>

            <div className='section-content' id='propos'>

              <h1>A propos de nous</h1>
              
              <p className='about-text'>Consulting & Trade, Commissionnaire agréé en Douane, notre rôle consiste à gérer les formalités douanières pour le compte des entreprises et des particuliers. Immatriculé auprès de la direction générale des Douanes depuis 2015</p>


            </div>

        </div>

      </section>

      <section id='background-missions'>

        <div className='background-filter'></div>

        <div className='section-text'>

            <div className='mission-description' id='missions'>

              <h1>notre mission</h1>
              
              <p className='about-text'>Aider les entreprises à se developper et à réduire leurs coûts grâce à un service ponctuel, adapté aux besoins du client.</p>

              <img src={chevronRight} alt='chevron right' className='chevronRight'/>

              <h1>ce qui nous rend spéciaux</h1>

              <div className='card-items'>

                <div className='card-item'>

                  <div className='card-filtre-img'>

                    <div className='card-filtre-missions'></div>
                    <img src={africanAmericanworkerWritingInventoryListWhileCheckingStock} className='card-img'/>

                  </div>

                  

                  <div className='card-description'>

                    <h3>Emballage et stockage</h3>
                    <p>Facilite les opérations de manutention, stockage, transport, et distribution du produit</p>

                  </div>                

                </div>

                <div className='card-item'>

                  <div className='card-filtre-img'>

                    <div className='card-filtre-missions'></div>
                    <img src={teamEmployeesCheckingStock} className='card-img'/>

                  </div>
           

                  <div className='card-description'>

                    <h3>service d' entrepot</h3>
                    <p>Nous disposons d'un entrepôt de avec une capacité de plus de 2000m² pour accueillir vos marchandises ou produits. </p>
                  </div>

                </div>

                <div className='card-item'>

                  <div className='card-filtre-img'>

                    <div className='card-filtre-missions'></div>
                    <img src={closeUpDeliveryPerson} className='card-img'/>

                  </div>

                  <div className='card-description'>

                    <h3>service de livraison </h3>
                    <p>Un service de livraison fiable et disponible en Afrique (Cameroun, Tchad, et Centrafrique)</p>

                  </div>

                </div>

              </div>


            </div>          

        </div>
       
      </section>

      <section id='background-services'>

        <div className='background-filter'></div>

        <div className='section-text'>

            <div className='section-content' id='services'>

              <h1>Nos services</h1>
              
              <p className='about-text'>Grâce à nos services concentrez-vous sur le développement de votre activité et confiez-nous toute votre chaine logistique.</p>

              <div className='card-services'>

                <div className='card-service'>

                  <span className='card-service-title'>douane & transit</span>

                  <div className='card-picture'>

                    <div className='card-filtre'></div>
                    <img className='douane-transit' src={industrialPortDeBarcelonaEvening}/>

                  </div>

                 


                </div>

                <div>

                  <span className='card-service-title'>transport & logistique</span>

                  <div className='card-picture'>

                    <div className='card-filtre'></div>
                    <img className='douane-transit' src={industrialPortDeBarcelonaEvening}/>

                  </div>
                 


                </div>

                <div>

                  <span className='card-service-title'>entreposage</span>

                 <div className='card-picture'>

                  <div className='card-filtre'></div>
                  <img className='douane-transit' src={africanAmericanworkerWritingInventoryListWhileCheckingStock}/>

                 </div>


                </div>

                <div>

                  <span className='card-service-title'>fret aerien</span>

                  <div className='card-picture'>

                    <div className='card-filtre'></div>
                    <img className='douane-transit' src={forkliftBoxesAssortment}/>

                  </div>


                </div>

              </div>


            </div>

        </div>

      </section>

       <section id='background-post'>

        <div className='background-filter'></div>

        <div className='section-text-post'>

            <div className='section-content' id='post'>

              <h1>temoinages</h1>
              
              <div className='post-text'>

                  <div className='profil'>

                    <img className='user-profil' src={userSolid}/>

                    
                  </div>

                  <div className='profil-text' id="profil-name">

                    <span>Service ponctuel, fiable et à l'écoute du client.</span>
                    
                    <span>Aissatou diare</span>
                    <span>entrepreneur</span>

                  </div>



              </div>

              <div className='post-text'>

                  <div className='profil'>

                  <img className='user-profil' src={userSolid}/>

                  </div>

                  <div className='profil-text'>

                    <span>je recommande vivement ce commissionnaire, très transparent dans leur travail au quotidien.</span>
                    
                    <span>joel edimo</span>
                    <span>Agriculteur</span>

                  </div>



              </div>

              <div className='post-text'>

                  <div className='profil'>

                    <img className='user-profil' src={userSolid}/>
                    
                  </div>

                  <div className='profil-text' id='profil-last'>

                    <span>j'ai confié mon cargo, et j'en suis très satisfait. Merci encore pour votre service. Continuez ainsi, vous êtes les meilleurs. </span>
                    
                    <span>Rodrigue kemmo</span>
                    <span>entrepreneur</span>

                  </div>



              </div>


            </div>

            <div className='post'>

                <div className='post-filtre'></div>
                <img className='img-post' src={africanAmericanworkerWritingInventoryListWhileCheckingStock}/>



            </div>

        </div>

      </section>


       <div className='header-filtre' id="contacts">

            <img src={industrialPortDeBarcelonaEvening} alt="" className='header-background'/>

            <div className='filtre'></div>

            <div className='filter-content'>

              <div>

                <p className='header-title' id='contact-title'>Contactez-nous:</p>

                <span className='header-description' id='contact-description'>Cameroon, Yaoundé | Nkoabang </span>
                <span className='header-description'  id='contact-description'>Tél : +237 673673267 / Portable : +237 654167168 - 692500261</span>
                <span className='header-description'  id='contact-description'>contact@cotradsarl.com</span>

                <img className='logo-v5' src={CoTradSarlLogoV5}/>

              </div>                

            </div>

            <div className='copyright'>

              <p>© 2024 COTRAD SARL | OEConception Theme</p>

            </div>


          </div>

         
      
      
    </>
  )
}

export default App
