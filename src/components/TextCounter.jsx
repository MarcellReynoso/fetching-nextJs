"use client"

import { useState } from "react"

export default function TextCounter() {
  const [text, setText] = useState('');
    return (
    <section>
        <h1>Componente <strong>TextCounter</strong> </h1>
        <textarea placeholder='Escribe aquí' 
        onChange={e => setText(e.target.value)}/>
        <p>Límite: {text.length}/200 </p>
    </section>
  )
}
