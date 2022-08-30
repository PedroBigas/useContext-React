import React from 'react';
import './App.css';
import Contador from './componentes/contador';
import Cabecalho from './componentes/Cabecalho';
import {createStore} from 'redux'
import contadorReducer from './redcucers/contadorReducer';
import {Provider} from 'react-redux'

function App() {

  const store = createStore(contadorReducer)

  return (


    <div className="App">
        <Provider store={store}>
            <Cabecalho></Cabecalho>
            <Contador></Contador>
        </Provider>
    </div>

  );
}

export default App;
