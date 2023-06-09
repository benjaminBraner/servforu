import { useNavigate } from 'react-router-dom'
import {
     presentation,
     boxContainer,
     servicios,
     buttonHero,
     sobreNosotrosItem
} from '../../scss/components/public/_Services.module.scss'
import webShopping from '../../images/undraw_web_shopping_re_owap.svg'
import webSeo from '../../images/undraw_real_time_sync_re_nky7.svg'
import webBrand from '../../images/undraw_mobile_marketing_re_p77p.svg';
import { Footer } from './home/Footer';
export const Services = () => {
     const navigate = useNavigate();


     return (
          <>
               <section className={servicios}>
                    <div>
                         <div className={presentation}>
                              <p><span>Servicios.</span><br />
                                   Hecha un vistazo a lo que tenemos para ofrecer
                              </p>
                              <button className={buttonHero} onClick={() => navigate('/contact')}>
                                   <p>Contactanos</p>
                              </button>
                         </div>

                         <div className='boxes'>
                              <div className={boxContainer}>
                                   <img src={webShopping} alt="webShopping" />
                                   <div className={sobreNosotrosItem}>
                                        <h3>Creacion de tu negocio online</h3>
                                        <p>
                                             ¡Impulsa tu negocio al siguiente nivel con un ecommerce profesional y atractivo! Crea tu tienda online hoy mismo y llega a millones de clientes en todo el mundo. ¡Aprovecha esta oportunidad de éxito!
                                        </p>
                                   </div>
                              </div>

                              <div className={boxContainer}>
                                   <div className={sobreNosotrosItem}>
                                        <h3>SEO y responsive design</h3>
                                        <p>
                                             Maximiza tu visibilidad en línea con un ecommerce SEO-friendly y un diseño responsive. Atrae a clientes potenciales y ofrece una experiencia perfecta en cualquier dispositivo. ¡Potencia tu negocio con una página web de ecommerce optimizada para el éxito!
                                        </p>
                                   </div>
                                   <img src={webSeo} alt="webShopping" />
                              </div>

                              <div className={boxContainer}>
                                   <img src={webBrand} alt="webShopping" />
                                   <div className={sobreNosotrosItem}>
                                        <h3>Branding</h3>
                                        <p>
                                             Construye tu marca y destaca en línea con un ecommerce que refleje tu identidad única. Crea una experiencia de compra coherente, fortalece tu branding y deja una impresión duradera en tus clientes. ¡Eleva tu negocio con una página web de ecommerce que proyecte tu marca!
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               <Footer />
          </>

     )
}
