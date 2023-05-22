
import { header, navbar, navMenu, logoMenu, active } from '../../../scss/components/public/home/_Navbar.module.scss'
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
                              >
                                   Home
                              </NavLink>
                              <p>Ir a la pagina principal</p>
                         </li>
                         <li>
                              <NavLink
                                   to='home'
                                   exact='true'
                                   onClick={clickMenuIcon}
                              >
                                   Sobre Nosotros
                              </NavLink>
                              <p>Descubre quienes somos</p>
                         </li>
                         <li>
                              <NavLink
                                   to='login'
                                   exact='true'
                                   onClick={clickMenuIcon}
                              >
                                   Ingresar
                              </NavLink>
                              <p>Tienes cuenta? genial! Ingresa ya</p>
                         </li>
                         <li>
                              <NavLink
                                   to='signin'
                                   exact='true'
                                   onClick={clickMenuIcon}
                              >
                                   Crear Cuenta
                              </NavLink>
                              <p>No tienes cuenta? no lo pienses</p>
                         </li>
                    </ul>

                    <img src={menuLogo} alt='menu' className={logoMenu} onClick={clickMenuIcon} />

               </nav>
          </header>
     )
}
