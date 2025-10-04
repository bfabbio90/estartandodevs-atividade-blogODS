import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import SobreODS from './pages/SobreODS'
import Artigos from './pages/Artigos'
import Artigo from './pages/Artigo'
import NaoEncontrada from './pages/NaoEncontrada'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Menu />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<SobreODS />} />
          <Route path="/artigos" element={<Artigos />} />
          <Route path="/artigos/:id" element={<Artigo />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
    </div>
  )
}
