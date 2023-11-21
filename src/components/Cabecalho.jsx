import { Link, useLocation } from "react-router-dom";
import { useState} from "react";
import "./Cabecalho.scss";


export default function Cabecalho() {

  const rotaAtual = useLocation();

    const userLogado = JSON.parse(sessionStorage.getItem("user-obj"));
    const [usuario] = useState(userLogado);

    const handleLogout = ()=>{
      sessionStorage.removeItem("user-obj");
      sessionStorage.removeItem("token-user");
      window.location = "/";
    }
    
if(sessionStorage.getItem("token-user")){
  return (
    <>
      <header>
        <img src="../img/logo.png" alt="logo" />
        <h2>Cuidar Bem</h2>
        <h3>GLOBAL SOLUTION 2023 - ENGENHARIA DE SOFTWARE</h3>

        <p className="nome">Olá {usuario.name}</p>
        <p className="email">{usuario.email}</p>

        <nav>
          <ul>
            <li>
              <Link to="/login" className={rotaAtual.pathname === '/login' ? 'active' : ''} onClick={handleLogout}>LOGOUT</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
  } else{
    return (
      <>
        <header className="cabecalhoLogin">
          <img src="../img/logo.png" alt="logo" />
          <h2>Cuidar Bem</h2>
        </header> 
      </>
    )
  }

  
}