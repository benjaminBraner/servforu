import { HomeScreen } from '../home/HomeScreen'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from '../home/Navbar'
import { Services } from '../Services'
import { ContactForm } from '../ContactForm'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DevsInfo } from '../home/DevsInfo'
export const PublicRoutes = () => {
     const location = useLocation();

     useEffect(() => {
          window.scrollTo(0, 0);
     }, [location]);
     return (
          <>
               <Navbar />
               <Routes>
                    <Route path='home' element={<HomeScreen />} />
                    <Route path='services' element={<Services />} />
                    <Route path='contact' element={<ContactForm />} />
                    <Route path='devs' element={<DevsInfo />} />

                    <Route path='/*' element={<HomeScreen />} />


               </Routes>
          </>
     )
}
