import { useParams, Link } from 'react-router-dom'
import { artigos } from '../data/dados'

export default function Artigo(){
  const { id } = useParams()

  const artigo = artigos.find(a => String(a.id) === id)

  if (!artigo) {
    return (
      <div>
        <h1>Artigo não encontrado</h1>
        <p>Não existe artigo com id <strong>{id}</strong>.</p>
        <Link to="/artigos">Voltar para a lista de artigos</Link>
      </div>
    )
  }

  return (
    <article>
      <h1>{artigo.titulo}</h1>
      <p><Link to="/artigos">← Voltar</Link></p>
    </article>
  )
}
