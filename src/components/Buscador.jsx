

export default function Buscador({ busqueda, manejarBusqueda }) {
    return (
        <div>
            <label>
                Buscar Producto:
                <input
                    type="text"
                    name="buscar"
                    placeholder="Ingrese el nombre"
                    value={busqueda}
                    onChange={manejarBusqueda}
                />
            </label>
        </div>
    );
}