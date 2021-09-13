import React from 'react';
import { gql, useMutation } from '@apollo/client';
import gql from 'graphql-tag';


const CREATE_PREDIO = gql `
        mutation Mymutation($predio:CreatePredioInput!){
            createPredio(input:$predio){
                predio{
                    nombre
                    avaluo
                    municipio
        }}
    }
`;

export default CREATE_PREDIO;




