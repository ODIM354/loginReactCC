import { useEffect, useState } from 'react'
import './App.css'
import Usuarios from './Usuarios'
import Registro from './Registro'

function Conversor() {
  const [textoAVoz,setTextoAVoz] = useState('')
  const [vozATexto,setVozATexto] = useState('')

  function cambiarTexto(evento) {
    setTextoAVoz(evento.target.value)
  }

  function convertirTextoAVoz() {
    const synth = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance (textoAVoz)
    synth.speak(utterThis)
  }

  function resultado(event) {
    setVozATexto(event.results[0][0].transcript)
  }

  function grabarVozATexto() {
    const recognition = new window.webkitSpeechRecognition()
    recognition.start()
    recognition.onresult = resultado  
  }

  return(
    <>
    <h2>Conversor TTS y STT</h2>
    <br />
    <h3>Conversor de texto a voz</h3>
    <input type="text" id='textoAVoz' value={textoAVoz} onChange={cambiarTexto}/>
    <br />
    <br />
    <button onClick={convertirTextoAVoz}>Convertir</button>
    <br />
    <br />
    <h3>Conversor de voz a texto</h3>
    <button onClick={grabarVozATexto}>Grabar</button>
    </>

  )
}

export default Conversor
