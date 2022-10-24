import Avatar from '../componentes/avatar'
import Botao from '../componentes/botao'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Botao
        texto={'Login'}
        manipularClique={() => console.log('Click no botão')}
      />
      <Avatar />
    </div>
  )
}
