import style from '../styles/ProductoItem.module.css'

export default function ProductoItem({
    item,
    numero,
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
        <>
            {estaEditando ? (
                <tr>
                    <td colSpan="6">
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
                            onKeyDown={(e) => e.key === "Enter" && guardarEdicion(item.id)}
                        />
                        <button onClick={() => guardarEdicion(item.id)}>Guardar</button>
                        <button onClick={cancelarEdicion}>Cancelar</button>
                    </td>
                </tr>
            ) : (
                <tr className={style.fila}>
                    <td>{numero}</td>
                    <td>{item.nombre}</td>
                    <td>${item.precio.toFixed(2)}</td>
                    <td>{item.cantidad}</td>
                    <td>{item.cantidad < 5 ? 'Stock bajo' : ''}</td>
                    <td>
                        <button onClick={() => borrarProducto(item.id)}>Borrar</button>
                        <button onClick={() => modificarProducto(item.id)}>Modificar</button>
                    </td>
                </tr>
            )}
        </>
    );
}