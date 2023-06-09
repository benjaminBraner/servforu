import React from 'react'
import {
     container,
     form,
     inputBox,
     presentation
} from '../../scss/components/public/_ContactForm.module.scss'
import { Footer } from './home/Footer'
export const ContactForm = () => {
     return (
          <>
               <section className={container}>
                    <div className={presentation}>
                         <p><span>Contactanos.</span><br />
                              Cuentanos mas sobre tu negocio
                         </p>
                    </div>
                    <form action="https://formsubmit.co/benjamin.branner@gmail.com" className={form} method='POST'>
                         <div className={inputBox}>
                              <label>Nombre</label>
                              <input type="text" name='Nombre' required />
                         </div>

                         <div className={inputBox}>
                              <label>Email</label>
                              <input type="text" name='Email' required />
                         </div>

                         <div className={inputBox}>
                              <label>Mensaje</label><br />
                              <textarea rows={5} name='Mensaje' required />

                         </div>
                         <input type="hidden" name="_next" value="https://servforu.netlify.app/" />
                         <input type="hidden" name="_captcha" value="false"></input>

                         <button>Submit</button>
                    </form>
               </section>
               <Footer />
          </>
     )
}
