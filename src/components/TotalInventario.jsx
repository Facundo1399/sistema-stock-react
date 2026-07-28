export default function TotalInventario({ inventario }) {
    const cantidadTotalProductos = inventario.reduce((total, item) => total + item.cantidad, 0);
    const valorTotalInventario = inventario.reduce((total, item) => total + item.precio * item.cantidad, 0);

    return (
        <div>
            <p>Cantidad de productos: {inventario.length}</p>
            <p>Cantidad total de unidades: {cantidadTotalProductos}</p>
            <p>Valor total del inventario: ${valorTotalInventario.toFixed(2)}</p>
        </div>
    );
}