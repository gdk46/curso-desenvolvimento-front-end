/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

// componentes
import Primeiro from './components/Primeiro';
import Segundo from './components/Segundo'; 
import Terceiro from './components/Terceiro';
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';



import './app.css';

import Card from './layout/Card'
export default (props) => (
    <div className="app">
        <Card
            titulo="Star in React JS"
        >
            <Primeiro></Primeiro>
        </Card>

        <Card
            titulo="Passagem de parametros"
        >
            <Segundo
                titulo="Casa da mãe joana"
                subtitulo="Olá como você tá senhor(a)?"
            />
        </Card>

        <Card
            titulo="Componentes com filho"
        >
            <Terceiro>
                <ul>
                    <li>Gleisson</li>
                    <li>Amanda</li>
                    <li>Arthur</li>
                    <li>Gleide</li>
                    <li>Isaias</li>
                </ul>
            </Terceiro>
        </Card>

        <Card
            titulo="Compontes de layout"
        >
            Criando um card
        </Card>

        <Card
            titulo="Incrementando funções"
        >
            <Repeticao></Repeticao>
        </Card>

        <Card>
            <Condicional num={2}></Condicional>
        </Card>
    </div>


)