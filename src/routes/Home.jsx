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

          <p>O projeto surgiu após um dos integrantes perder a melhor amiga durante o processo de insight do que seria produzido. A ideia de monitoramento das pessoas, principalemente daquelas que moram sozinhas/estarão sozinhas no período que estão doentes, para não acontecer mortes por negligência médica.</p>
        </section>
          
        {/* Parte direita da página */}
        <section className="detalhes">
          <div>
            <h2>O que é a solução</h2>

            <p>O projeto Cuidar Bem, uma iniciativa inovadora que visa
          aprimorar o monitoramento remoto de pacientes após consultas médicas. Utilizando uma abordagem
          integrada de hardware e software, o projeto incorpora uma pulseira inteligente para coleta em tempo
          real de dados vitais.</p>
          </div>

          <div>
            <h2>O que ela fará</h2>

            <p>Será feito o monitoramento dos batimentos cardíacos, temperatura e movimentação do paciente durante um certo período. Caso ocorra uma inconformidade, o SAMU será acionado para o socorro.</p>
          </div>

          <div>
            <h2>Como Funcionará</h2>

            <p>Após consulta com o médico especialista, o paciente será encaminhado para a recepção onde colocará suas informações básicas (Nome, data de nascimento, endereço, número de telefone) e pegará sua pulseira já programada para funcionar uma quantidade de dias. O paciente usará essa pulseira a todo momento; assim que estiver melhor, ele irá até o posto ou farmácia mais próxima para fazer a devolução.</p>
          </div>
        </section>
        
        {/* Cards de vantagens */}
        <section className="vantagens">
          <div>
            <h3>Vantagem 1</h3>

            <p>Resposta e atendimento mais rápido da equipe de socorros.</p>
          </div>

          <div>
            <h3>Vantagem 2</h3>

            <p>Monitoramento 24h do paciente, onde todos os dados serão armazenados e poderão ser acessados pelo paciente.</p>
          </div>

          <div>
            <h3>Vantagem 3</h3>
            
            <p>Evitar morte de pacientes por negligência médica.</p>
          </div>
        </section>
      </main>

      <Rodape/>
    </>
  )
}