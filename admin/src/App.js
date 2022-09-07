import React, { Component } from 'react';
import { HydraAdmin } from '@api-platform/admin';
import platformVar from 'platformsh_variables';

// let entrypoint = 'https://test-t6dnbai-7rmsoyfng4yww.fr-3.platformsh.site/api';

let entrypoint = Object.keys(platformVar).find(url => url.startsWith('https://api.'));

console.log(platformVar);

// console.log(entrypoint, Object.keys(platformVar));

// // const currentURL = window.location.href
// entrypoint = entrypoint + 'api/'
// // console.log('entrypoint from current url', entrypoint)

// if(!entrypoint) { // default entrypoint
//     entrypoint = 'https://api.fix-502-errors-wivvlli-7rmsoyfng4yww.fr-3.platformsh.site/api/';
// }
// entrypoint = entrypoint.substring(0, entrypoint.length - 1);
// console.log('final entrypoint test6', entrypoint);



class App extends Component {
    render() {
        return <HydraAdmin entrypoint={entrypoint}/>
    }
}

export default App;
