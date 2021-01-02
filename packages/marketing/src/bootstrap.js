import React from 'react';
import ReactDom from 'react-dom';
import App from './App'

const mount = (el) => {
    ReactDom.render(
        <App />, el
    )
}
//Mount function to start up the app 
//call mount innediately
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    !!devRoot && mount(devRoot);
}

// Runing throught container
export { mount };