// import React from 'react';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { createRoot } from 'react-dom/client';
// import store from './redux/store';
// // import './components/tools/io';
// import './styles/main.scss';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store.store}>
//       <PersistGate loading={null} persistor={store.persistor}>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>,
//   // document.getElementById('root'),
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import 'styles/main.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App.js';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store.store}> */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  // document.getElementById('root'),
);
