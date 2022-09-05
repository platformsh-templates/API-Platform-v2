import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Enables CORS
const cors = require('cors');
App.use(cors({ origin: true }));

console.log(App);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
