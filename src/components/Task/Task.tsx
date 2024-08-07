import { useEffect, useState } from 'react'

function Task() {
  const [finalizada, setFinalizada] = useState<boolean>(false);
  const [tarefa, setTarefa] = useState<string>("Tarefa Pendente.");

  useEffect(() => {
    if (finalizada === true) {
      setTarefa("Tarefa conclúida")
    } else {

      setTarefa("Tarefa pendente")
    }
  }, [finalizada])

  const handleTaskCompletion = () => {
    setFinalizada(!finalizada);
  }

  return (
    <div className="container">
      <h1>Tarefa</h1>
      <h3>Status da Tarefa: {tarefa}</h3>
      <button onClick={handleTaskCompletion}>Trocar status da tarefa</button>
    </div>
  )
}

export default Task