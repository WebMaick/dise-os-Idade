import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '../components/menu/Navbar'
import { AppPrincipal } from '../components/principal/AppPrincipal'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<AppPrincipal />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
