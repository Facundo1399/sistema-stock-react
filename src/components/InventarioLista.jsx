import ProductoItem from "./ProductoItem";

export default function InventarioLista({
    inventario,
    borrarProducto,
    modificarProducto,
    editandoId,
    productoEditando,
    manejarCambioEdicion,
    guardarEdicion,
    cancelarEdicion
}) {
    return (
        <ul>
            <p>Resultados: {inventario.length}</p>

            {inventario.length === 0 ? (
                <p>Sin productos en el Inventario</p>
            ) : (
                inventario.map((item) => (
                    <ProductoItem
                        key={item.id}
                        item={item}
                        borrarProducto={borrarProducto}
                        modificarProducto={modificarProducto}
                        editandoId={editandoId}
                        productoEditando={productoEditando}
                        manejarCambioEdicion={manejarCambioEdicion}
                        guardarEdicion={guardarEdicion}
                        cancelarEdicion={cancelarEdicion}
                    />
                ))
            )}
        </ul>
    );
}