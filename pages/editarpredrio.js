import React from 'react';
import Layout from '../componets/layout/Layout';



export default function EditarPredio(){
    return(
        
        <Layout>
        <div className="row justify-content-center">
           <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Predio
                        </h2>
                        
                        <form 
                            
                        >
                            <div className="form-group">
                                <label>Nombre Predio</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Predio"
                                    name="nombre"
                                    //Usamos el useState
                                    // value={nombre}//El nombre del  state es el value
                                    // onChange={e => setnombre(e.target.value)}//El set o guardar es el onChange
                                />
                            </div>

                            <div className="form-group">
                                <label>Avaluo</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Avaluo"
                                    name="precio"
                                    //Usamos el useState
                                    // value={precio}//El nombre del  state es el value
                                    // onChange={e => setprecio(Number(e.target.value))}//El set o guardar es el onChange
                                />
                                
                            </div>
                            <div className="form-group">
                                <label>Departamento</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="departamento"
                                    name="departamento"
                                    //Usamos el useState
                                    // value={nombre}//El nombre del  state es el value
                                    // onChange={e => setnombre(e.target.value)}//El set o guardar es el onChange
                                />
                                
                            </div>
                            <div className="form-group">
                                <label>Municipio</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Municipio"
                                    name="Municipio"
                                    //Usamos el useState
                                    // value={nombre}//El nombre del  state es el value
                                    // onChange={e => setnombre(e.target.value)}//El set o guardar es el onChange
                                />
                                
                            </div>
                            
                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                    Guardar Cambios
                                </button>

                        </form>
                        {/* Ponemos un Ternario para la condición en True del Producto linea 26 
                            aqui tambien  puedo poner un spinner de carga                        
                        */}
                        {/* { cargando ? <p>Cargando..</p> : null}
                        {/* Aquí ponemos lo que tenga error, ponemos un alert */}
                        {/* {error ? <p className="alert alert-danger p2 mt-4 text center">Hubo un error</p> : null} */}
                    </div>
                </div>
            </div> 
        </div>
        </Layout>
    )
}