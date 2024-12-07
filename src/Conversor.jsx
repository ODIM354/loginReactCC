import { useEffect, useState } from 'react';
import './App.css';

function Conversor() {
  const [textoAVoz, setTextoAVoz] = useState('');
  const [vozATexto, setVozATexto] = useState('');
  const [error, setError] = useState('');

  function cambiarTexto(evento) {
    setTextoAVoz(evento.target.value);
  }

  function convertirTextoAVoz() {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(textoAVoz);
    synth.speak(utterThis);
  }

  function resultado(event) {
    setVozATexto(event.results[0][0].transcript);
  }

  function grabarVozATexto() {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'es-ES'; // Establecemos el idioma español para la transcripción
    recognition.continuous = false; // Detener el reconocimiento después de una pausa
    recognition.interimResults = true; // Mostrar resultados intermedios

    recognition.onresult = resultado;

    recognition.onerror = (event) => {
      setError('Error al reconocer la voz: ' + event.error);
    };

    recognition.onstart = () => {
      setError('');
      setVozATexto('Escuchando...');
    };

    recognition.onend = () => {
      setError('');
    };

    recognition.start();
  }

  return (
    <>
      <h2>Conversor TTS y STT</h2>
      <br />
      <h2>Conversor de texto a voz</h2>
      <input
        type="text"
        id="textoAVoz"
        value={textoAVoz}
        onChange={cambiarTexto}
      />
      <br />
      <br />
      <button onClick={convertirTextoAVoz}>Convertir</button>
      <br />
      <br />
      <h2>Conversor de voz a texto</h2>
      <button onClick={grabarVozATexto}>Grabar</button>
      <br />
      <br />
      {/* Mostrar el texto reconocido */}
      <div>
        <h3>Texto reconocido: </h3>
        <p>{vozATexto}</p>
      </div>
      {/* Mostrar errores si los hay */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
}

export default Conversor;

