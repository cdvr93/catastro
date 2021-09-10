import '../styles/globals.css'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import store from '../src/store'
import { ApolloProvider } from '@apollo/client'
import clientApollo from '../componets/layout/config/apollo'





function MyApp({ Component, pageProps }) {
  
  return (
              <ApolloProvider client={clientApollo}>
                  <Provider store={store}>
                    <Component {...pageProps} />
                  </Provider>
              </ApolloProvider>
     )              
 }           
            
export default MyApp            
            
          
  
  



