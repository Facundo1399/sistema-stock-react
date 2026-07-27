// export default function StockForm({
//   stock = { nombre: '', precio: '', cantidad: '' },
//   getStock = () => {},
//   cargarStock = () => {}
// }) sirve para que si no llegan los props no se rompa

export default function StockForm({stock, getStock, cargarStock }) {
    return (
        <>
            <p>Ingresa el nombre del producto:</p>
            <input
                type="text"
                name="nombre"
                placeholder="producto"
                value={stock.nombre}
                onChange={getStock}
            />
            <br />

            <p>Ingresa el precio:</p>
            <input
                type="text"
                name="precio"
                placeholder="0.00"
                value={stock.precio}
                onChange={getStock}
            />
            <br />

            <p>Ingresa la cantidad:</p>
            <input
                type="text"
                name="cantidad"
                placeholder="unidades"
                value={stock.cantidad}
                onChange={getStock}
                onKeyDown={(e) => e.key === "Enter" && cargarStock()}
            />
            <br />
            <br />

            <button onClick={cargarStock}>Cargar</button>
            <hr />
        </>
    );
}