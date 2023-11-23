import Rodape from "../components/Rodape"
import "./Home.scss"

export default function Home() {
  return (
    <>
      <main>
        <section className="principal">
          {/* Parte esquerda da página */}
          <img src="../img/medicina.jpg" alt="medicina" />

          <h2>Cuidar Bem, Monitorando sua saúde de longe</h2>

          <p>Este documento apresenta o projeto Cuidar Bem, uma iniciativa inovadora que visa
          aprimorar o monitoramento remoto de pacientes após consultas médicas. Utilizando uma abordagem
          integrada de hardware e software, o projeto incorpora uma pulseira inteligente para coleta em tempo
          real de dados vitais.</p>
        </section>
          
        {/* Parte direita da página */}
        <section className="detalhes">
          <div>
            <h2>O que é a solução</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, omnis. Nostrum minus placeat quasi recusandae, possimus deleniti, ab ipsum totam aut autem odio a temporibus incidunt ex et consequatur pariatur obcaecati quam harum sed? Nisi, iste quam laboriosam tempore inventore quas nobis temporibus rem aut, eligendi error corporis pariatur suscipit?</p>
          </div>

          <div>
            <h2>O que ela fará</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, omnis. Nostrum minus placeat quasi recusandae, possimus deleniti, ab ipsum totam aut autem odio a temporibus incidunt ex et consequatur pariatur obcaecati quam harum sed? Nisi, iste quam laboriosam tempore inventore quas nobis temporibus rem aut, eligendi error corporis pariatur suscipit?</p>
          </div>

          <div>
            <h2>Como Funcionará</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, omnis. Nostrum minus placeat quasi recusandae, possimus deleniti, ab ipsum totam aut autem odio a temporibus incidunt ex et consequatur pariatur obcaecati quam harum sed? Nisi, iste quam laboriosam tempore inventore quas nobis temporibus rem aut, eligendi error corporis pariatur suscipit?</p>
          </div>
        </section>
        
        {/* Cards de vantagens */}
        <section className="vantagens">
          <div>
            <h3>Vantagem 1</h3>

            <p>Resposta mais rápida do socorro.</p>
          </div>

          <div>
            <h3>Vantagem 2</h3>

            <p>Monitoramento 24h.</p>
          </div>

          <div>
            <h3>Vantagem 3</h3>
            
            <p>Evita perdas.</p>
          </div>
        </section>
      </main>

      <Rodape/>
    </>
  )
}