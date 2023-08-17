import React from 'react'
import './Card.css'

const Card = ({nombre , cancion}) => {
    
    return <div className="card">
            <h2>Hola {nombre} !!</h2>
            <p>tu cancion favorita es {cancion}</p>
    </div>
}

export default Card
