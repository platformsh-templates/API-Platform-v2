import React, { Component } from 'react';
import { HydraAdmin } from '@api-platform/admin';

let entrypoint = process.env.PUBLIC_URL;

if(!entrypoint) { // default entrypoint to current url
    entrypoint = window.location.href;
}

entrypoint = entrypoint + '/api';

class App extends Component {
    componentDidMount(){
        document.title = "Admin API Platform.sh"
    }

    render() {
        return <HydraAdmin entrypoint={entrypoint}/>;
    }
}

export default App;
