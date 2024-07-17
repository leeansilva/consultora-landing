// @ts-nocheck
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Box, ChakraProvider } from '@chakra-ui/react'
import './style.css'

import "@fontsource/geist-sans"; // Defaults to weight 400
import "@fontsource/geist-sans/400.css"; // Specify weight

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
        <App />
    </ChakraProvider>
  </React.StrictMode>
)
