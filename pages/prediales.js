import React, { Fragment } from 'react';
import Layout from '../componets/layout/Layout';

export default function Prediales(){
    return(
        <Layout>
        <Fragment>
            <h2 className="text-center my-5">Lictado de Productos</h2>
            {/* En caso de que se encuentre un error vamos a mostralo aqui */}
            {/* { error ? <p className="font-weigth-bold alert alert-danger text-center mt -4"
            >Hubo un error</p> : null}
            { cargando ? <p className="text-center">Cargando...</p> : null} */}

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Avaluo</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* { productos.length === 0 ? 'No hay productos' : (
                        productos.map(producto => (
                            <Producto
                                key={producto.id}
                                producto={producto}
                            />
                        ))
                    ) } */}
                </tbody>
            </table>
        </Fragment>
        </Layout>
    )
}