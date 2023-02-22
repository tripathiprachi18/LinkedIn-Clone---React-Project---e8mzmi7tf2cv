<<<<<<< HEAD
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

import './index.css';

const container = document.getElementById('root');
=======
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from "./components/App";

import './index.css';

ReactDOM.render(<App />, document.getElementById("root"));
>>>>>>> d6a44755e31f7605f2b5280fa4c09cb0d83e6619
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
<<<<<<< HEAD
);
=======
);
>>>>>>> d6a44755e31f7605f2b5280fa4c09cb0d83e6619
