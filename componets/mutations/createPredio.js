import { gql, useMutation } from '@apollo/client';

const CREATE_PREDIO = gql `
    createPredio(input:{$predio:[]}){
              predio{

                
                        avaluo
                        nombre
                        municipio    					
                        }} 
                            `;
export default CREATE_PREDIO;



