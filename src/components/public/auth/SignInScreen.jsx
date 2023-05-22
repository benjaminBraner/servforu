import { Link } from 'react-router-dom';
import {
     SignUpScreen,
     formContainer,
     formSignup,
     form,
     formItem,
     haveAcc, formLogo
} from '../../../scss/components/public/auth/_SignInScreen.module.scss';

export const SignInScreen = () => {
     return (
          <>
               <div className={SignUpScreen}>
                    <div className={formContainer}>
                         <div className={formSignup}>
                              <h2 className={formLogo}>
                                   <i className={""}></i>
                                   ServForU
                              </h2>

                              <form className={form} onSubmit={'formSubmit'}>

                                   <input
                                        className={formItem}
                                        type='text'
                                        placeholder='Nombre'
                                        name='name'
                                        onChange={'handleInputChange'}
                                   />

                                   <input
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

                                   <input
                                        className={formItem}
                                        type='password'
                                        placeholder='Repetir Contraseña'
                                        name='password2'
                                        onChange={'handleInputChange'}
                                   />

                                   <button
                                        className={`${formItem}`}
                                        type='submit'
                                   >
                                        Crear cuenta
                                   </button>

                                   <p className={formItem}>
                                        By registering, you accept our <b>Conditions</b>
                                        , the <b>Data Policy</b> and the <b>Cookies Policy</b>.
                                   </p>
                              </form>

                         </div>

                         <p className={haveAcc}>Ya tienes cuenta? <Link to='/auth/login'>Login</Link></p>

                    </div>
               </div>
          </>
     )
}
