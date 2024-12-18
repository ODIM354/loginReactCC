import { useEffect, useState } from 'react'
import './App.css'
import Usuarios from './Usuarios'
import Registro from './Registro'
import Conversor from './Conversor';

function Login() {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [login, setLogin] = useState(false)
  const [recargar, setRecargar] = useState(false)

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }

  function cambiarClave(evento) {
    setClave(evento.target.value)
  }

  function recargarAhora() {
    setRecargar(!recargar)
  }

  async function inicioSesion() {
    const peticion = await fetch('http://localhost:3000/login?usuario=' + usuario + '&clave=' + clave, { credentials: 'include' })
    if (peticion.ok) {
      setLogin(true)
      console.log("Bienvenido")
    } else {
      alert('Usuario o clave incorrectos')
    }
  }

  async function validar() {
    const peticion = await fetch('http://localhost:3000/validar', { credentials: 'include' })
    if (peticion.ok) {
      setLogin(true)
    }
  }

  useEffect(() => {
    validar()
  }, [])

  if (login) {
    return (
      <>
        <br />
        <Conversor />
        <br />
        <Registro recargarAhora={recargarAhora}/>
        <br />
        <Usuarios recargar={recargar} />
       
      </>)
  }

  return (
    <>
      <div className="login-container">
        <div className="login-box">

          <img src="/Logo.png" alt="Logo de la página" className="logo" />
          <h2>Inicio de Sesión</h2>
          <input placeholder='Usuario' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
          <br />
          <input placeholder='Contraseña' type="password" name="clave" id="clave" value={clave} onChange={cambiarClave} />
          <br />
          <br />
          <button onClick={inicioSesion}>Ingresar</button>

        </div>
      </div>
    </>
  )
}

export default Login
