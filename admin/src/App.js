import React, { Component } from 'react';
import { HydraAdmin } from '@api-platform/admin';

let entrypoint = process.env.PUBLIC_URL;

if(!entrypoint) { // default entrypoint to current url
    entrypoint = window.location.href
}

entrypoint = entrypoint + 'api'
console.log('final entrypoint test6', entrypoint);

class App extends Component {
    render() {
        return <HydraAdmin entrypoint={entrypoint}/>
    }
}

export default App;
