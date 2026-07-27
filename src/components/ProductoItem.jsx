export default function ProductoItem({
    item,
    borrarProducto,
    modificarProducto,
    editandoId,
    productoEditando,
    manejarCambioEdicion,
    guardarEdicion,
    cancelarEdicion
}) {
    const estaEditando = editandoId === item.id;

    return (
        <li>
            {estaEditando ? (
                <>
                    <input
                        type="text"
                        name="nombre"
                        value={productoEditando.nombre}
                        onChange={manejarCambioEdicion}
                    />
                    <input
                        type="text"
                        name="precio"
                        value={productoEditando.precio}
                        onChange={manejarCambioEdicion}
                    />
                    <input
                        type="text"
                        name="cantidad"
                        value={productoEditando.cantidad}
                        onChange={manejarCambioEdicion}
                        onKeyDown={(e) => e.key === "Enter" && guardarEdicion(item.id) }
                    />
                    <button onClick={() => guardarEdicion(item.id)}>Guardar</button>
                    <button onClick={cancelarEdicion}>Cancelar</button>
                </>
            ) : (
                <>
                    {item.id} - {item.nombre} - ${item.precio.toFixed(2)} - {item.cantidad}
                    <button onClick={() => borrarProducto(item.id)}>Borrar</button>
                    <button onClick={() => modificarProducto(item.id)}>Modificar</button>
                </>
            )}
        </li>
    );
}