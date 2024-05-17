import { NotFound } from "./components/Pages/NotFound/NotFound";
import { Portfolio } from "./components/Pages/Portfolio/Portfolio";
import { Header } from "./components/Layouts/Header/Header";
import { AboutMe } from "./components/Pages/AboutMe/AboutMe";
import { ContactMe } from "./components/Pages/ContactMe/ContactMe";
import { Home } from "./components/Pages/Home/Home";
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contactme' element={<ContactMe/>} />
        <Route path='/*' element={<NotFound />} />
      </Routes>


    </>

  )
}
export default App