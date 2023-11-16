import Cabecalho from "./components/Cabecalho"
import { Outlet } from "react-router-dom";
import "./Global.scss"

function App() {

  return (
    <>
      <Cabecalho/>
      <Outlet/>
    </>
  )
}

export default App
