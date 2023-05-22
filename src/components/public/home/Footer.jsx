
import { socialContainer, helpButtonsContainer, lastP, footerContainer } from '../../../scss/components/public/home/_Footer.module.scss';
import instagramLogo from '../../../images/icons/instagram.svg'
import linkedinLogo from '../../../images/icons/linkedin.svg'
import gmailLogo from '../../../images/icons/gmail.svg'
import facebookLogo from '../../../images/icons/facebook.svg'
import twitterLogo from '../../../images/icons/twitter.svg'
import copyrightLogo from '../../../images/icons/copyright.svg'


export const Footer = () => {
     return (
          <footer>
               <div className={footerContainer}>
                    <ul className={socialContainer}>
                         <li><img src={instagramLogo} alt="instagram" /></li>
                         <li><img src={linkedinLogo} alt="linkedin" /></li>
                         <li><img src={gmailLogo} alt="gmail" /></li>
                         <li><img src={facebookLogo} alt="facebook" /></li>
                         <li><img src={twitterLogo} alt="twitter" /></li>
                    </ul>

                    <h4>Necesitas Ayuda?</h4>
                    <div className={helpButtonsContainer}>
                         <button>Privacidad</button>
                         <button>Politica</button>
                    </div>
                    <h5>ServForU</h5>
                    <p> <img src={copyrightLogo} alt='c ' /> Copyright 2023</p>
                    <p className={lastP}>ServForU 2023. Todos los derechos reservados</p>

               </div>
          </footer>
     )
}
