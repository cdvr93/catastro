import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql, useMutation } from "@apollo/client";


const clientApollo = new ApolloClient({
    uri:"http://localhost:5000/graphql",
    cache: new InMemoryCache()
});

export default clientApollo;