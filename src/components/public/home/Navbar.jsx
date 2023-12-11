
import { header, navbar, navMenu, logoMenu, active, navLink } from '../../../scss/components/public/home/_Navbar.module.scss'
import menuLogo from '../../../images/icons/menu.svg'
import 'animate.css/animate.min.css'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

     const clickMenuIcon = () => {
          const menuWrapper = document.getElementById(`menuWrapper`);
          menuWrapper.classList.toggle(active);
     }

     return (
          <header className={header}>
               <nav className={navbar}>
                    <h3>ServForU</h3>

                    <ul className={navMenu} id='menuWrapper'>
                         <li>
                              <NavLink
                                   to='home'
                                   exact='true'
                                   onClick={clickMenuIcon}
                                   className={navLink}
                              >
                                   Home
                              </NavLink>
                              <p>Ir a la pagina principal</p>
                         </li>
                         <li>
                              {/* <NavLink
                                   to='#sobre-nosotros'
                                   exact='true'
                                   onClick={clickMenuIcon}
                                   className={navLink}
                              >
                                   Sobre Nosotros
                              </NavLink> */}
                              <a
                                   href="/#sobre-nosotros"
                                   onClick={clickMenuIcon}
                                   className={navLink}
                              >
                                   Sobre Nosotros
                              </a>
                              <p>Descubre quienes somos</p>
                         </li>
                         <li>
                              <NavLink
                                   to='services'
                                   exact='true'
                                   onClick={clickMenuIcon}
                                   className={navLink}
                              >
                                   Servicios
                              </NavLink>
                              <p>Mira lo que tenemos para ofrecer</p>
                         </li>
                         <li>
                              <NavLink
                                   to='https://servforu-english.netlify.app'
                                   exact='true'
                                   // onClick={clickMenuIcon}
                                   className={navLink}
                              >
                                   English
                              </NavLink>
                              <p>Visit servforu website in our english version</p>
                         </li>
                         <li>
                              <NavLink
                                   to='devs'
                                   exact='true'
                                   onClick={clickMenuIcon}
                                   className={navLink}
                              >
                                   Desarrolladores
                              </NavLink>
                              <p>Informacion sobre los fundadores de ServForU</p>
                         </li>
                         <li>
                              <NavLink
                                   to='contact'
                                   exact='true'
                                   onClick={clickMenuIcon}
                                   className={navLink}
                              >
                                   Contactanos
                              </NavLink>
                              <p>No te pierdas esta oportunidad</p>
                         </li>
                    </ul>

                    <img src={menuLogo} alt='menu' className={logoMenu} onClick={clickMenuIcon} />

               </nav>
          </header >
     )
}
