// import React, { Component } from 'react';
import { HydraAdmin } from '@api-platform/admin';
import platformVar from 'platformsh_variables';

console.log(Object.keys(platformVar));

let entrypoint = Object.keys(platformVar).find(url => url.endsWith('/api'));

console.log('entrypoint before tests', entrypoint);

if(!entrypoint) {
  entrypoint = 'https://master-7rqtwti-7rmsoyfng4yww.fr-3.platformsh.site/api/docs/';
}

entrypoint = entrypoint.substring(0, entrypoint.length - 1);
console.log('entrypoint final', entrypoint);

// export default () => (
//     <HydraAdmin entrypoint="{entrypoint}" />
// );

class App extends Component {
  render() {
    return <HydraAdmin entrypoint={entrypoint}/>
  }
}

export default App;
