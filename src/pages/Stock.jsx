import { useState } from "react";
import StockForm from "../components/StockForm";
import InventarioLista from "../components/InventarioLista";

export default function Stock() {
    const [stock, setStock] = useState({
        nombre: "",
        precio: "",
        cantidad: ""
    });

    const [inventario, setInventario] = useState([]);
    const [editandoId, setEditandoId] = useState(null);
    const [productoEditando, setProductoEditando] = useState({
        nombre: "",
        precio: "",
        cantidad: ""
    });

    const getStock = (event) => {
        const nombreIngresado = event.target.name;
        let newValue = event.target.value;

        if (nombreIngresado === "precio") {
            newValue = newValue.replace(",", ".");
        }

        setStock((prevStock) => ({ ...prevStock, [nombreIngresado]: newValue }));
    };

    const cargarStock = () => {
        const precioFlotante = parseFloat(stock.precio);
        const cantidadEntero = parseInt(stock.cantidad, 10);

        if (!stock.nombre.trim() || isNaN(precioFlotante) || precioFlotante <= 0 || isNaN(cantidadEntero) || cantidadEntero <= 0) {
            alert("Cargar todos los datos para continuar");
            return;
        }

        setInventario((prevInventario) => [
            ...prevInventario,
            { ...stock, precio: precioFlotante, cantidad: cantidadEntero, id: Date.now() }
        ]);

        setStock({
            nombre: "",
            precio: "",
            cantidad: ""
        });
    };

    const modificarProducto = (id) => {
        const productoViejo = inventario.find((item) => item.id === id);

        if (!productoViejo) { 
            alert("no existe ese producto")
            return
        };

        setEditandoId(id);
        setProductoEditando({
            nombre: productoViejo.nombre,
            precio: productoViejo.precio.toString(),
            cantidad: productoViejo.cantidad.toString()
        });
    };

    const manejarCambioEdicion = (event) => {
        const { name, value } = event.target;
        setProductoEditando((prev) => ({ ...prev, [name]: value }));
    };

    const guardarEdicion = (id) => {
        const precioFlotante = parseFloat(productoEditando.precio.replace(",", "."));
        const cantidadEntero = parseInt(productoEditando.cantidad, 10);

        if (!productoEditando.nombre.trim() || isNaN(precioFlotante) || precioFlotante <= 0 || isNaN(cantidadEntero) || cantidadEntero <= 0) {
            alert("Datos inválidos para modificar el producto");
            return;
        }

        setInventario((prevInventario) =>
            prevInventario.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        nombre: productoEditando.nombre.trim(),
                        precio: precioFlotante,
                        cantidad: cantidadEntero
                    }
                    : item
            )
        );

        setEditandoId(null);
        setProductoEditando({ nombre: "", precio: "", cantidad: "" });
    };

    const cancelarEdicion = () => {
        setEditandoId(null);
        setProductoEditando({ nombre: "", precio: "", cantidad: "" });
    };

    const borrarProducto = (idProduct) => {
        setInventario((prevInventario) => prevInventario.filter((item) => item.id !== idProduct));
    };

    return (
        <>
            <StockForm stock={stock}
                getStock={getStock}
                cargarStock={cargarStock} />

            <InventarioLista inventario={inventario}
                borrarProducto={borrarProducto}
                modificarProducto={modificarProducto}
                editandoId={editandoId}
                productoEditando={productoEditando}
                manejarCambioEdicion={manejarCambioEdicion}
                guardarEdicion={guardarEdicion}
                cancelarEdicion={cancelarEdicion} />
        </>
    );
}