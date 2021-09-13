import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql, useMutation } from "@apollo/client";
import { application } from "express";
import clientApollo from "../../componets/layout/config/apollo";
import { ADD_PREDIO, ADD_PREDIO_ERR, ADD_PREDIO_SUC } from "../types";




export function addNewPredioAction(predio){
    return (dispatch) => {
        dispatch( addPredio());

        try {
            //Insertar en DB, Aqui mutation
            useMutation(application)
            dispatch( addPredioSuc(predio) );
        } catch (error) {
            dispatch( addPredioErr(true));
        }
    }
}

const addPredio = () => ({
    type: ADD_PREDIO,
    payload: true
})

const addPredioSuc = predio => ({
    type: ADD_PREDIO_SUC,
    payload: predio
})

const addPredioErr = estado => ({
    type: ADD_PREDIO_ERR,
    payload: estado
})