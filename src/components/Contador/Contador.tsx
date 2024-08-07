import { useState } from 'react'

function Contador() {
const [count, setCount] = useState<number>(0) ;

function contadorHandler () {
  setCount(count+1);
}
return (
    <div className="container">
        <p>O valor é: {count}</p>
        <button onClick={contadorHandler}>Adicionar +1</button>
    </div>
  )
}

export default Contador