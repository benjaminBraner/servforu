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
          <section className={`${sobreNosotrosSection} ${divVisible ? changeColorSection : resetColorSection}`}>
               <div className={sobreNosotrosContainer}>
                    <div className={sobreNosotrosItem}>
                         <div className={itemContent}>
                              <h3>¿Quienes Somos?</h3>
                              <p>
                                   ServForU, la plataforma revolucionaria que cambia la forma en que compras, vendes y ofreces tus servicios! ¿Estás buscando una experiencia de compra y venta en línea excepcional? ¿Quieres mostrar tus habilidades y ofrecer tus servicios al mundo? ¡Entonces, ServForU es la plataforma perfecta para ti
                              </p>

                         </div>
                         <img src={QuienesSomosImg} alt="quienes somos?" />
                    </div>
                    <div className={sobreNosotrosItem}>
                         <h3>¿Que te espera?</h3>
                         <p>
                              En ServForU, encontrarás un mercado vibrante y dinámico donde puedes comprar una amplia variedad de productos de calidad. Ya sea que busques artículos nuevos, usados o incluso personalizados, nuestra plataforma te conectará con vendedores confiables y profesionales que ofrecen productos de primera categoría.
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
                              No pierdas más tiempo navegando por múltiples plataformas. Únete a ServForU hoy mismo y experimenta la comodidad de comprar, vender y ofrecer tus servicios en un solo lugar. ¡Descubre un mundo de posibilidades con ServForU y lleva tus compras y servicios al siguiente nivel
                         </p>
                    </div>
                    <div className={sobreNosotrosItem}>
                         <h3>Demuestra</h3>
                         <h3>Se libre.</h3>
                    </div>
                    <div className={sobreNosotrosItem} ref={divRef}>
                         <div className={crearCuentaContent}>
                              <h3>Crea tu cuenta ahora mismo.</h3>
                              <p>¡Únete a la revolución de ServForU y descubre un mundo de oportunidades! Crea tu cuenta ahora y sé parte de una plataforma innovadora que te conectará con compradores, vendedores y personas ansiosas por aprovechar tus habilidades. ¡No esperes más para ser parte de ServForU y comienza a hacer realidad tus sueños hoy mismo!</p>

                         </div>
                         <button onClick={() => navigate('/auth/signin')}>
                              <img src={userIcon} alt='Crear cuenta' />
                         </button>
                    </div>
                    <div className={sobreNosotrosItem}>
                         <img src={handshakeImg} alt="handshake" className={imgHandshake} />
                    </div>
               </div>
          </section>

     )
}
