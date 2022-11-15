import React from 'react';
import ReactDOM,{createRoot}  from 'react-dom/client';
import App from './Component/App';
//ReactDOM.render(<App/>,document.getElementById('root'));
const container = document.getElementById('root');
const root =  createRoot(container);
root.render(<App/>);