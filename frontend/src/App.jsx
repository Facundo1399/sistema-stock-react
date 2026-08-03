import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Stock from './pages/Stock'
import CargarProducto from './pages/CargarProducto'
import style from './styles/NavBar.module.css'

function App() {
  const [stock, setStock] = useState({ nombre: '', precio: '', cantidad: '' })
  const [inventario, setInventario] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [editandoId, setEditandoId] = useState(null)
  const [productoEditando, setProductoEditando] = useState({ nombre: '', precio: '', cantidad: '' })

  const getStock = (event) => {
    const nombreIngresado = event.target.name
    let newValue = event.target.value

    if (nombreIngresado === 'precio') {
      newValue = newValue.replace(',', '.')
    }

    setStock((prevStock) => ({ ...prevStock, [nombreIngresado]: newValue }))
  }

  const cargarStock = () => {
    const precioFlotante = parseFloat(stock.precio)
    const cantidadEntero = parseInt(stock.cantidad, 10)

    if (!stock.nombre.trim() || isNaN(precioFlotante) || precioFlotante <= 0 || isNaN(cantidadEntero) || cantidadEntero <= 0) {
      alert('Cargar todos los datos para continuar')
      return
    }

    setInventario((prevInventario) => [
      ...prevInventario,
      { ...stock, precio: precioFlotante, cantidad: cantidadEntero, id: Date.now() }
    ])

    setStock({ nombre: '', precio: '', cantidad: '' })
  }

  const modificarProducto = (id) => {
    const productoViejo = inventario.find((item) => item.id === id)

    if (!productoViejo) {
      alert('No existe ese producto')
      return
    }

    setEditandoId(id)
    setProductoEditando({
      nombre: productoViejo.nombre,
      precio: productoViejo.precio.toString(),
      cantidad: productoViejo.cantidad.toString()
    })
  }

  const manejarCambioEdicion = (event) => {
    const { name, value } = event.target
    setProductoEditando((prev) => ({ ...prev, [name]: value }))
  }

  const guardarEdicion = (id) => {
    const precioFlotante = parseFloat(productoEditando.precio.replace(',', '.'))
    const cantidadEntero = parseInt(productoEditando.cantidad, 10)

    if (!productoEditando.nombre.trim() || isNaN(precioFlotante) || precioFlotante <= 0 || isNaN(cantidadEntero) || cantidadEntero <= 0) {
      alert('Datos inválidos para modificar el producto')
      return
    }

    setInventario((prevInventario) =>
      prevInventario.map((item) =>
        item.id === id
          ? {
              ...item,
              nombre: productoEditando.nombre.trim(),
              precio: precioFlotante,
              cantidad: cantidadEntero
            }
          : item
      )
    )

    setEditandoId(null)
    setProductoEditando({ nombre: '', precio: '', cantidad: '' })
  }

  const cancelarEdicion = () => {
    setEditandoId(null)
    setProductoEditando({ nombre: '', precio: '', cantidad: '' })
  }

  const manejarBusqueda = (event) => {
    setBusqueda(event.target.value)
  }

  const borrarProducto = (idProduct) => {
    setInventario((prevInventario) => prevInventario.filter((item) => item.id !== idProduct))
  }

  return (
    <>
      <nav className={style.navBar}>
        <Link to="/" className={style.linkInventario}>Inventario</Link>
        <Link to="/cargar" className={style.linkCargar}>Cargar producto</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Stock
              inventario={inventario}
              busqueda={busqueda}
              manejarBusqueda={manejarBusqueda}
              editandoId={editandoId}
              productoEditando={productoEditando}
              manejarCambioEdicion={manejarCambioEdicion}
              guardarEdicion={guardarEdicion}
              cancelarEdicion={cancelarEdicion}
              borrarProducto={borrarProducto}
              modificarProducto={modificarProducto}
            />
          }
        />
        <Route path="/cargar" element={<CargarProducto stock={stock} getStock={getStock} cargarStock={cargarStock} />} />
      </Routes>
    </>
  )
}

export default App
