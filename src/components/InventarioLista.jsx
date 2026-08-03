import ProductoItem from "./ProductoItem";
import style from '../styles/ProductoItem.module.css'

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
        <ul className={style.lista}>
            <p style={{backgroundColor:'#6FA8DC', fontSize:'25px', color:'#000302'}}>Resultados: {inventario.length}</p>

            {inventario.length === 0 ? (
                <p style={{color:'#000302', backgroundColor:'#6FA8DC'}}>Sin productos en el Inventario</p>
            ) : (
                <div className={style.contenedorTabla}>
                    <table className={style.tabla}>
                        <thead className={style.cabecera}>
                            <tr>
                                <th>N°</th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Estado</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody className={style.cuerpo}>
                            {inventario.map((item, index) => (
                                <ProductoItem
                                    key={item.id}
                                    numero={index + 1}
                                    item={item}
                                    borrarProducto={borrarProducto}
                                    modificarProducto={modificarProducto}
                                    editandoId={editandoId}
                                    productoEditando={productoEditando}
                                    manejarCambioEdicion={manejarCambioEdicion}
                                    guardarEdicion={guardarEdicion}
                                    cancelarEdicion={cancelarEdicion}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </ul>
    );
}