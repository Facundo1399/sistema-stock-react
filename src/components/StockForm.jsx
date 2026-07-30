import styles from "../styles/StockForm.module.css";

// export default function StockForm({
//   stock = { nombre: '', precio: '', cantidad: '' },
//   getStock = () => {},
//   cargarStock = () => {}
// }) sirve para que si no llegan los props no se rompa

export default function StockForm({stock, getStock, cargarStock }) {
    return (
        //{styles["formulario-carga"]} sirve cuando el nombre tiene guiones, espacios o cualquier cosa que no sea un identificador válido
        <div className={styles["formulario-carga"]}>  

            <div className={styles.campo}>
                <label className={styles.label}>
                Ingresa el Producto: 
                <input
                    className={styles.input}
                    type="text"
                    name="nombre"
                    placeholder="producto"
                    value={stock.nombre}
                    onChange={getStock}
                />
                </label>
            </div>


            <div className={styles.campo}>
                <label className={styles.label}>
                Ingresa el Precio:  
                <input
                    className={styles.input}
                    type="text"
                    name="precio"
                    placeholder="0.00"
                    value={stock.precio}
                    onChange={getStock}
                />
                </label>
            </div>
            

            <div className={styles.campo}>
                <label className={styles.label}>
                Ingresa la Cantidad: 
                <input
                    className={styles.input}
                    type="text"
                    name="cantidad"
                    placeholder="unidades"
                    value={stock.cantidad}
                    onChange={getStock}
                    onKeyDown={(e) => e.key === "Enter" && cargarStock()}
                />
                </label>
            </div>
            <br/>

            <button onClick={cargarStock} className={styles.botonCargar}> Cargar </button>
            <hr />
        </div>
    );
}