import ReactDOM from 'react-dom'
import './index.css'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'


ReactDOM.render(
    <div id='app'>   
        <Primeiro></Primeiro>
        <ComParametro 
        titulo='Segundo Componente' 
        aluno='Pedro' nota={6.3}/>
        <Fragmento/>
    </div>,
document.getElementById('root')
)