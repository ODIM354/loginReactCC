import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import homePage from './homePage'

function App() {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState ('')
  const [login, setLogin] =useState (false)

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }
  function cambiarClave(evento) {
    setClave(evento.target.value)
  }
  function inicioSesion() {
    if (usuario == 'admin' && clave == 'admin') {
      alert("Inicio de sesión correcto")
      setLogin(true)
    } else{
      alert("Usuario o contraseña incorrectos")
    }
  }

  if (login) {
    return <homePage/>

  }

  return (
    <>
    <h2>Cuentas Claras</h2>
    <h3>Inicio de Sesión</h3>
    <input placeholder='Usuario' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario}/>
    <br />
    <input placeholder='Contraseña' type="password" name="clave" id="clave" value={clave} onChange={cambiarClave}/>
    <br />
    <br />
    <button onClick={inicioSesion}>Ingresar</button>
    </>
  )
}

export default App
