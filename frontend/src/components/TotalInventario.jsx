export default function TotalInventario({ inventario }) {
    const cantidadTotalProductos = inventario.reduce((total, item) => total + item.cantidad, 0);
    const valorTotalInventario = inventario.reduce((total, item) => total + item.precio * item.cantidad, 0);

    return (
        <div style={{backgroundColor:'#6FA8DC'}}>
            <p style={{color:'#000302'}}>Cantidad de productos: {inventario.length}</p>
            <p style={{color:'#000302'}}>Cantidad total de unidades: {cantidadTotalProductos}</p>
            <p style={{color:'#000302'}}>Valor total del inventario: ${valorTotalInventario.toFixed(2)}</p>
        </div>
    );
}