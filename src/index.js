import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { GlobalStyle } from './page/NewsDetale/components';

const client = new ApolloClient({
    uri: 'https://point.md/graphql',
    cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <GlobalStyle />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>,
);