import { useLocation, Link } from 'react-router-dom'

export default function NaoEncontrada() {
  const location = useLocation()
  return (
    <div>
      <h1>404 — Página não encontrada</h1>
      <p>A rota <code>{location.pathname}</code> não existe neste site.</p>
      <p><Link to="/">Ir para a página inicial</Link></p>
    </div>
  )
}
