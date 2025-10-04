import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo ao Blog — ODS 7: Energia Limpa e Acessível</h1>
      <p>Neste blog você vai encontrar artigos, ideias e casos práticos sobre como levar energia limpa e acessível para mais pessoas.</p>
      <p>
        Comece por <Link to="/sobre">saber mais sobre o ODS</Link> ou veja nossos <Link to="/artigos">artigos</Link>.
      </p>
    </div>
  )
}
