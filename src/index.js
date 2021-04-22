import React from 'react';
import reactDom from 'react-dom';
import Tutor from './Tutor';
import './index.css';


const divRoot = document.querySelector('#root');

reactDom.render( <Tutor/>,divRoot);