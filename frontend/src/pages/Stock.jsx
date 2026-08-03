import InventarioLista from "../components/InventarioLista";
import Buscador from "../components/Buscador";
import TotalInventario from "../components/TotalInventario";

export default function Stock({
  inventario,
  busqueda,
  manejarBusqueda,
  editandoId,
  productoEditando,
  manejarCambioEdicion,
  guardarEdicion,
  cancelarEdicion,
  borrarProducto,
  modificarProducto
}) {
  const inventarioFiltrado = inventario.filter((item) =>
    item.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h1 style={{color:'#000302', backgroundColor:'#6FA8DC', fontSize:'25px', margin:0}}>Inventario</h1>
      <Buscador busqueda={busqueda} manejarBusqueda={manejarBusqueda} />
      <TotalInventario inventario={inventario} />
      <InventarioLista
        inventario={inventarioFiltrado}
        borrarProducto={borrarProducto}
        modificarProducto={modificarProducto}
        editandoId={editandoId}
        productoEditando={productoEditando}
        manejarCambioEdicion={manejarCambioEdicion}
        guardarEdicion={guardarEdicion}
        cancelarEdicion={cancelarEdicion}
      />
    </div>
  );
}
