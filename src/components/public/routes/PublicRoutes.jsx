import { HomeScreen } from '../home/HomeScreen'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from '../home/Navbar'
import { LoginScreen } from '../auth/LoginScreen'
import { SignInScreen } from '../auth/SignInScreen'

export const PublicRoutes = () => {
     return (
          <>
               <Navbar />
               <Routes>
                    <Route path='home' element={<HomeScreen />} />
                    <Route path='login' element={<LoginScreen />} />
                    <Route path='signin' element={<SignInScreen />} />
               </Routes>
          </>
     )
}
