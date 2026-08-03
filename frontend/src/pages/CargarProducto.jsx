import { Link } from 'react-router-dom'
import StockForm from '../components/StockForm'

export default function CargarProducto({ stock, getStock, cargarStock }) {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: '35px', backgroundColor:'#6FA8DC', margin:'0', borderBlockColor:'black' }}>Cargar producto</h1>
      <StockForm stock={stock} getStock={getStock} cargarStock={cargarStock} />
      <Link to="/">← Volver al inventario</Link>
    </div>
  )
}
