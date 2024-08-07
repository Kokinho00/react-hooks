import { useState } from "react"
import Card from "./components/Card/Card"
import Task from "./components/Task/Task"
import Contador from "./components/Contador/Contador";
import "./App.css"

function App() {
  const [login, setLogin] = useState(false)

  function handleLogin() {
    setLogin(!login);
  }

  return (
    <>
      <button onClick={handleLogin}>{
        login ?
          `Deslogar` :
          `Logar`
      }</button>

      {
        login ?
          <>
            <Card card={{ titulo: "olá", descricao: "Hello" }} />
            <Contador />
            <Task />
          </>
          : <p>Você precisa fazer login</p>

      }

    </>
  )
}

export default App
