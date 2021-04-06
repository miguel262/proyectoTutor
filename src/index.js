import React from 'react';
import reactDom from 'react-dom';
import Principal from './Principal';
import './index.css';


const divRoot = document.querySelector('#root');

reactDom.render( <Principal/>,divRoot);