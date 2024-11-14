import { useEffect, useState } from 'react'
import './App.css'
import { FaUser, FaLock } from "react-icons/fa";

function Registro({recargarAhora}) {
  const [usuarioRegistro, setUsuarioRegistro] = useState('')
  const [claveRegistro, setClaveRegistro] = useState('')


  function cambiarUsuarioRegistro(evento) {
    setUsuarioRegistro(evento.target.value)
  }
  function cambiarClaveRegistro(evento) {
    setClaveRegistro(evento.target.value)
  }

  async function registrar() {
    const peticion = await fetch('http://localhost:3000/registro?usuario=' + usuarioRegistro + '&clave=' + claveRegistro, { credentials: 'include' })
    if (peticion.ok) {
      alert("Usuario registrado")
      recargarAhora()
      console.log("Bienvenido")
    } else {
      alert('Usuario no registrado')
    }
  }

  useEffect(() => {
  }, [])


  return (
    <>
      <h3>Registro</h3>
      <input placeholder='Usuario' type="text" name="usuario" id="usuario" value={usuarioRegistro} onChange={cambiarUsuarioRegistro} />
      <br />
      <input placeholder='Contraseña' type="password" name="clave" id="clave" value={claveRegistro} onChange={cambiarClaveRegistro} />
      <br />
      <br />
      <button onClick={registrar}>Registrarse</button>
    </>
  )
}

export default Registro
