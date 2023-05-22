import { Link } from 'react-router-dom'
import {
     SignUpScreen,
     formContainer,
     formSignup,
     form,
     formItem,
     haveAcc,
     formLogo
} from '../../../scss/components/public/auth/_SignInScreen.module.scss'

export const LoginScreen = () => {
     return (
          <>
               <div className={SignUpScreen}>
                    <div className={formContainer}>
                         <div className={formSignup}>
                              <h2 className={formLogo}>
                                   ServForU
                              </h2>

                              <form className={form} onSubmit={'formSubmit'}>


                                   <input
                                        autoComplete='off'
                                        className={formItem}
                                        type='text'
                                        placeholder='Email'
                                        name='email'
                                        onChange={'handleInputChange'}
                                   />

                                   <input
                                        className={formItem}
                                        type='password'
                                        placeholder='Contraseña'
                                        name='password'
                                        onChange={'handleInputChange'}
                                   />


                                   <button
                                        className={`${formItem}`}
                                        type='submit'
                                   >
                                        Ingresar
                                   </button>

                                   {/* <p className={formItem}>
                                        By registering, you accept our <b>Conditions</b>
                                        , the <b>Data Policy</b> and the <b>Cookies Policy</b>.
                                   </p> */}
                              </form>

                         </div>

                         <p className={haveAcc}>No tienes cuenta? <Link to='/auth/signin'>Crear Cuenta</Link></p>

                    </div>
               </div>
          </>
     )
}
