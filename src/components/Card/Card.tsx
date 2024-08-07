
interface CardProps{
    card: {titulo: string, descricao: string}
}

function Card({card}: CardProps) {
    return (
        <div className="card container">
            <h1>{card.titulo}</h1>
            <p>{card.descricao}</p>
        </div>
    )
}

export default Card;