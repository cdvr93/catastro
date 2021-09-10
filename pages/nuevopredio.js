import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../componets/layout/Layout';
import { addNewPredioAction } from '../src/actions/predioActions';



export default function NuevoPredio(){
    //State
    const [nombre, setnombre] = useState('');
    const [avaluo, setavaluo] = useState(0);
    const [municipio, setmunicipio] = useState(0);

    const dispatch = useDispatch();

    const addPredio= predio => dispatch(addNewPredioAction(predio) );

    const submitnewPredio = e => {
            e.preventDefault ();

            //validar form
            if (nombre.trim() === '' || avaluo <= 0  || municipio <= 0) {
                return;
            }

            //si no hay errores

            //crear nuevo producto
            addPredio({
                nombre,avaluo,municipio
            });
        }

    return(
        <Layout>
        
        <div className="row justify-content-center">
           <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Predio
                        </h2>
                        
                        <form 
                            onSubmit={submitnewPredio}
                        >
                            <div className="form-group">
                                <label>Nombre Predio</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Predio"
                                    name="nombre"
                                    //Usamos el useState
                                    value={nombre}//El nombre del  state es el value
                                    onChange={e => setnombre(e.target.value)}//El set o guardar es el onChange
                                />
                            </div>

                            <div className="form-group">
                                <label>Avaluo</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Avaluo"
                                    name="avaluo"
                                    //Usamos el useState
                                    value={avaluo}//El nombre del  state es el value
                                    onChange={e => setavaluo(Number(e.target.value))}//El set o guardar es el onChange
                                />
                                
                            </div>
                                                            
                            
                            <div className="form-group">
                                <label>Municipio ID</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="ID municipio"
                                    name="municipio"
                                    // Usamos el useState
                                    value={municipio}//El nombre del  state es el value
                                    onChange={e => setmunicipio(Number(e.target.value))}//El set o guardar es el onChange
                                />
                                
                            </div>
                            
                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                    Agregar
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