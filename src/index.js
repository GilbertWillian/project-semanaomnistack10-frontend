import React from 'react'; // Importado sempre que houver JSX(JS + HTML)
import ReactDOM from 'react-dom'; // Importado para manter contato com a Árvore DOM
import App from './App'; // Importação para usar o Componente App

// Renderiza o conteúdo do Arquivo App entro do elemento com ID 'root'
ReactDOM.render(<App />, document.getElementById('root')); 