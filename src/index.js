import React from 'react';
import ReactDOM from 'react-dom';
import APP from './components/appContainer';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';

ReactDOM.render(
<Provider store={store}>
    <PersistGate persistor={persistor}>
        <APP/>
    </PersistGate>
</Provider>,
    document.getElementById('root'),);