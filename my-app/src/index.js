import React from 'react';
import { StrictMode } from 'react/cjs/react.production.min';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Button } from './App';
import styled from 'styled-components';

const BigButton = styled(Button)`
    margin: 0 auto;
    width: 245px;
    text-align: center;
`;

ReactDOM.render(
    <StrictMode>
        <App/>
        <BigButton as="a" >Отправить отчет</BigButton>
    </StrictMode>,
  document.getElementById('root')
);
