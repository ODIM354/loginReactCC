import { useEffect, useState } from 'react'
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
  async function inicioSesion() {
    const peticion = await fetch ('http://localhost:3000/login?usuario='+ usuario +'&clave='+ clave, {credentials: 'include'})
    if (peticion.ok) {
      setLogin(true)
      console.log("Bienvenido")    
    } else{
      alert('Usuario o clave incorrectos')
    }
  }

  async function validar() {
    const peticion = await fetch ('http://localhost:3000/validar', {credentials: 'include'})
    if (peticion.ok) {
      setLogin(true)
    }
  }

  useEffect(() => {
    validar()
  }, [])

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
