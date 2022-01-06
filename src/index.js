import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
  colors: {
    brand: {
      100: "#333758",
      200: "#0077ff",
      300:'#eaf1ff',
      400:'#c2d9ff',
      500: '#15b36c',
      600: '#999999',
      700: '#4d2fe6',
      800: '#ed803f',
      900: '#15b36c'
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
