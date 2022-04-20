import React from 'react'
import Primeiro from './Componentes/basicos/Primeiro'
import ComParametro from './Componentes/basicos/ComParametro'
import Fragmento from './Componentes/basicos/Fragmento'
import NumeroAle from './Componentes/basicos/NumeroAle'
import Cartao from './Componentes/basicos/layout/Cartao'
import './App.css'


export default () => {

    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className = "card">
                <Cartao titulo="Primeiro componente" cor="pink">
                    <Primeiro></Primeiro>
                </Cartao>

                <Cartao titulo="Com Parâmetros" cor="green">
                    <ComParametro titulo="Hoje é quarta-feira" subtitulo='Véspera de feriado' />
                </Cartao>

                <Cartao titulo="React Fragment" cor="blue">
                    <Fragmento />
                </Cartao>

                <Cartao titulo= "Números aleatórios" cor="orange"> 
                    <NumeroAle min={1} max={10} />
                </Cartao>




            </div>
        </div>
    )
}