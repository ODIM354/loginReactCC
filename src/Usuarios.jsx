import { useEffect, useState } from 'react'
import './App.css'

function Usuarios({ recargar }) {
  const [usuarios, setUsuarios] = useState([])

  async function obtenerUsuarios() {
    const peticion = await fetch('http://localhost:3000/usuarios', { credentials: 'include' })
    if (peticion.ok) {
      const respuesta = await peticion.json()
      setUsuarios(respuesta)
    }
  }

  async function eliminarUsuario(id) {
    const peticion = await fetch('http://localhost:3000/usuarios?id=' + id, { credentials: 'include', method: 'delete' })
    if (peticion.ok) {
      alert('Usuario eliminado')
      obtenerUsuarios();
    }
  }
  useEffect(() => {
    obtenerUsuarios()
  }, [recargar])

  return (
    <>
      <br />
      <div className="table-container">
        <table className="user-table">
          <caption><h2>Usuarios registrados</h2></caption>
          <thead>
            <tr>
              <th>Id</th>
              <th>Usuario</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {
              usuarios.map(usuario => (
                <tr key={usuario.id}>
                  <th>{usuario.id}</th>
                  <th>{usuario.usuario}</th>
                  <th>
                    <button className='btn-delete'
                      onClick={() => { eliminarUsuario(usuario.id) }}
                    >Eliminar</button>
                  </th>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </>
  )
}

export default Usuarios
