import Rodape from "../components/Rodape"
import "./Home.scss"

export default function Home() {
  return (
    <>
      <main>
        <section className="principal">
          {/* Parte esquerda da página */}
          <img src="../img/medicina.jpg" alt="medicina" />

          <h2>Titulo da solução</h2>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam eligendi illum ut saepe soluta quasi assumenda, dolores, numquam facilis consequatur ex maiores, quaerat perspiciatis eius quae porro error vero voluptate deleniti nihil harum! Doloremque nulla totam voluptatem iure necessitatibus velit eum aliquid libero, accusantium ad mollitia maiores eveniet maxime.</p>
        </section>
          
        {/* Parte direita da página */}
        <div className="detalhes">
          {/* O que é a solução */}
          <section>
            <h2>O que é a solução</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, omnis. Nostrum minus placeat quasi recusandae, possimus deleniti, ab ipsum totam aut autem odio a temporibus incidunt ex et consequatur pariatur obcaecati quam harum sed? Nisi, iste quam laboriosam tempore inventore quas nobis temporibus rem aut, eligendi error corporis pariatur suscipit?</p>
          </section>

          {/* O que ela fará */}
          <section>
            <h2>O que ela fará</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, omnis. Nostrum minus placeat quasi recusandae, possimus deleniti, ab ipsum totam aut autem odio a temporibus incidunt ex et consequatur pariatur obcaecati quam harum sed? Nisi, iste quam laboriosam tempore inventore quas nobis temporibus rem aut, eligendi error corporis pariatur suscipit?</p>
          </section>

          {/* Como funcionará */}
          <section>
            <h2>Como Funcionará</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, omnis. Nostrum minus placeat quasi recusandae, possimus deleniti, ab ipsum totam aut autem odio a temporibus incidunt ex et consequatur pariatur obcaecati quam harum sed? Nisi, iste quam laboriosam tempore inventore quas nobis temporibus rem aut, eligendi error corporis pariatur suscipit?</p>
          </section>
        </div>
        
        {/* Cards de vantagens */}
        <div className="vantagens">
          <section>
            <h3>Vantagem 1</h3>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim architecto totam repudiandae reiciendis praesentium illum eos, eligendi at veniam quisquam.</p>
          </section>

          <section>
            <h3>Vantagem 2</h3>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim architecto totam repudiandae reiciendis praesentium illum eos, eligendi at veniam quisquam.</p>
          </section>

          <section>
            <h3>Vantagem 3</h3>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim architecto totam repudiandae reiciendis praesentium illum eos, eligendi at veniam quisquam.</p>
          </section>
        </div>
      </main>

      <Rodape/>
    </>
  )
}