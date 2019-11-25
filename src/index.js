import React from 'react';
import {render} from 'react-dom';

import App from './App';

//função render é responsável por renderizar um componente react dentro de algum conteúdo HTMLs
render(<App/>, document.getElementById('app'));
const soma = (a,b) => a + b;