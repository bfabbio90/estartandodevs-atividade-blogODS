import { Link } from 'react-router-dom'
import { artigos } from '../data/dados'

export default function Artigos() {
  return (
    <div>
      <h1>Artigos</h1>

        {artigos.map(art => (
          <li key={art.id} style={{ marginBottom:18, paddingBottom:12, borderBottom:'1px solid #ddd' }}>
            <h2>
              <Link to={`/artigos/${art.id}`}>{art.titulo}</Link>
            </h2>
            <p>{art.resumo}</p>
          </li>
        ))}

    </div>
  )
}
