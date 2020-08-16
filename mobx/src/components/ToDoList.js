import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import ToDo from './ToDo';

@inject('store')
@observer
class ToDoList extends Component {
    render() {
        const store = this.props.store;
        return (
            <>
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                    {
                        store.tasks.map((task, idx) => <ToDo task={task} key={idx} />)
                    }
                </ul>
            </>
        )
    }
}

export default ToDoList;
