import { sobreNosotrosSection, sobreNosotrosContainer, sobreNosotrosItem, itemContent, iconsContainer, icon, imgHandshake, changeColorSection, resetColorSection, crearCuentaContent } from '../../../scss/components/public/home/_SobreNosotros.module.scss';
import QuienesSomosImg from '../../../images/undraw_business_deal_re_up4u.svg';
import conexionLogo from '../../../images/icons/conect.svg';
import bolsaLogo from '../../../images/icons/bag.svg';
import handshakeImg from '../../../images/handshake-background-design_1284-595.jpg';
import userIcon from '../../../images/icons/user.svg';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';



export const SobreNosotros = () => {
     const navigate = useNavigate();
     const divRef = useRef(null);
     const [divVisible, setDivVisible] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               const divElement = divRef.current;
               const divRect = divElement.getBoundingClientRect();
               const windowHeight = window.innerHeight;

               if (divRect.top < windowHeight && divRect.bottom > 0) {
                    setDivVisible(true);
               } else {
                    setDivVisible(false);
               }
          };

          window.addEventListener('scroll', handleScroll);
          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, [])



     return (
          <section className={`${sobreNosotrosSection} ${divVisible ? changeColorSection : resetColorSection}`} id='sobre-nosotros'>
               <div className={sobreNosotrosContainer}>
                    <div className={sobreNosotrosItem}>
                         <div className={itemContent}>
                              <h3>¿Quienes Somos?</h3>
                              <p>
                                   ServForU, es una idea ambiciosa que nacio de 5 amigos universitarios (Daniel, Benjamin, Jose Maria, Fabian y Sergio), con ganas de mejorar el mercado y ayudar a los emprendedores pequeños, medianos o grandes, a digitalizar su marca y dejar un impacto en la sociedad
                              </p>

                         </div>
                         <img src={QuienesSomosImg} alt="quienes somos?" />
                    </div>
                    <div className={sobreNosotrosItem}>
                         <h3>¿Que te espera?</h3>
                         <p>
                              {/* En ServForU, encontrarás un mercado vibrante y dinámico donde puedes comprar una amplia variedad de productos de calidad. Ya sea que busques artículos nuevos, usados o incluso personalizados, nuestra plataforma te conectará con vendedores confiables y profesionales que ofrecen productos de primera categoría. */}
                              En ServForU encontraras sitios web profesionales, atractivos y personalizados para hacer crecer tu negocio. Impulsa tu presencia en línea y alcanza el éxito con nuestra plataforma de creación de sitios web. ¡Potencia tu marca y conviértete en un referente en la web!
                         </p>
                         <div className={iconsContainer}>
                              <div className={icon}>
                                   <img src={conexionLogo} alt="conexion" />
                              </div>
                              <div className={icon}>
                                   <img src={bolsaLogo} alt="bolsa" />
                              </div>
                         </div>
                    </div>
                    <div className={sobreNosotrosItem}>
                         <h3>Animate!</h3>
                         <p>
                              No pierdas más tiempo, descubre todo lo que ServForU puede hacer por ti. Crea un sitio web único, cautivador y totalmente personalizado. Impulsa tu negocio hacia el éxito online y sorprende a tus clientes. ¡No esperes más para destacar en la web con ServForU!
                         </p>
                    </div>
                    <div className={sobreNosotrosItem}>
                         <h3>Innova.</h3>
                         <h3>Da el salto.</h3>
                    </div>
                    <div className={sobreNosotrosItem} ref={divRef}>
                         <div className={crearCuentaContent}>
                              <h3>Contactanos ahora</h3>
                              <p>¡Únete a la revolución de ServForU y descubre un mundo de oportunidades! Permítenos llevar tu negocio al siguiente nivel con un sitio web profesional y atractivo. Nuestro equipo experto está listo para elegirte un plan minusiosamente para ver tus necesidades y las de tu marca. ¡No pierdas más tiempo, contáctanos hoy mismo y comienza tu transformación digital!</p>

                         </div>
                         <button onClick={() => navigate('/contact')}>
                              <img src={userIcon} alt='Contacto' />
                         </button>
                    </div>
                    <div className={sobreNosotrosItem}>
                         <img src={handshakeImg} alt="handshake" className={imgHandshake} />
                    </div>
               </div>
          </section>

     )
}
