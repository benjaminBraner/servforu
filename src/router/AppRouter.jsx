import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PublicRoutes } from '../components/public/routes/PublicRoutes';
export const AppRouter = () => {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path='/*' element={<PublicRoutes />} />

               </Routes>
          </BrowserRouter>
     )
}
