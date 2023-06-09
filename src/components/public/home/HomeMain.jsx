import { useState, useEffect } from 'react';
import {
     titulo,
     main,
     pExplain,
     buttonHero,
     mainContent,
     imgContainer,
     mainContainer,
     hero
} from '../../../scss/components/public/home/_HomeMain.module.scss'
import 'animate.css/animate.min.css'
import heroImg from '../../../images/undraw_business_deal_re_up4u.svg'
import { SobreNosotros } from './SobreNosotros';
import { Footer } from './Footer';
import { useNavigate } from 'react-router-dom';


export const HomeMain = () => {
     const navigate = useNavigate();
     const [text, setText] = useState("Innova");
     const [count, setCount] = useState(0);

     useEffect(() => {
          const intervalId = setInterval(() => {
               setText(prevText => {
                    if (prevText === 'Innova') return 'Vende';
                    else if (prevText === 'Vende') return 'Destaca'
                    else if (prevText === 'Destaca') return prevText
               })
          }, 1500);

          return () => clearInterval(intervalId);
     }, []);

     useEffect(() => {
          setCount(count + 1)

     }, [text])

     return (
          <main className={main}>
               <div className={hero}>

                    <div className={mainContainer}>
                         <div className={mainContent}>
                              <h1 className={titulo}>
                                   <span key={count}
                                        className="animate__animated animate__bounceIn animate__slow"
                                   >
                                        {text}
                                   </span><br />
                                   con tu negocio<br />
                                   digitalizado
                              </h1>
                              <p className={pExplain}>
                                   ServForU es una plataforma para contratar el servicio de hacer tu website
                                   ya sea personal o para tu negocio  ;)
                              </p>
                              <button className={buttonHero} onClick={() => navigate('/contact')}>
                                   <p>Contactanos</p></button>
                         </div>

                         <div className={imgContainer}>
                              <img src={heroImg} alt="servforu" />

                         </div>

                    </div>
               </div>
               <SobreNosotros />

               <Footer />
          </main >
     )
}
