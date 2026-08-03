export default function Buscador({ busqueda, manejarBusqueda }) {
    return (
        <div style={{ width: '100%', margin: 0, padding: 0 }}>
            <label
                style={{
                    backgroundColor: '#6FA8DC',
                    fontSize: '25px',
                    color: '#000302',
                    margin: 0,
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '100%',
                    boxSizing: 'border-box',
                    textAlign: 'center'
                }}
            >
                <span>Buscar Producto:</span>
                <input
                    style={{ borderRadius: '5px', fontSize: '20px', margin: 0, padding: 0 }}
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