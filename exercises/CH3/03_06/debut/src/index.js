import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/todo.css';

import TaskListModel from './models/TaskListModel';

const store = new TaskListModel();
store.addTask('Ajouter items');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

