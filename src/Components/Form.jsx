import React, { useState } from 'react'
import Card from './Card'
import './Form.css'

const Form = () => {
    
    const [nombre, setNombre] = useState('')
    const [cancion, setCancion] = useState('')
    const [error, setError] = useState('')
    const [card, setCard] = useState(false)

    const handleSubmit = () => {

        if (nombre.length <= 3 || nombre.startsWith(' ') || cancion.length <= 6) {
            setCard(false)
            setError("Por favor chequea que la información sea correcta")
        } else {
            setError('')
            setCard(true)
        }

    }
    return (
        <div className='Form'>
            <input type="text" placeholder='Ingrese su nombre' onChange={(e) => setNombre(e.target.value)} />
            <input type="text" placeholder='Ingrese su cancion favorita' onChange={(e) => setCancion(e.target.value)} />
            {error}
            <button onClick={handleSubmit}>Enviar</button>
            {card && <Card nombre={nombre} cancion={cancion}/>}
        </div>
    )
}

export default Form
