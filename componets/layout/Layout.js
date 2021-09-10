
import React from 'react';
import Link from 'next/link';
import { Provider } from 'react-redux';
import store from '../../src/store';



const Layout = props => {
    return ( 
        <>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
                <div className="container">
                    <h1>
                        <Link href='/' ><a  className="text-light">Catastro Municipal</a></Link>{' '}
                        <Link href='/prediales'><a  className="text-light">Predios</a></Link>
                    </h1>       
                      
                </div>
                <Link href="/nuevopredio"><a  className="btn btn-danger nuevo-post d-block d-md-inline-block">Agregar Predio &#43;</a></Link> 
            </nav>                   
                        
            <main>{props.children}</main> 
            
        </>            
                                              
         );
}                
                
export default Layout;                

                
                
            
                
        


 


