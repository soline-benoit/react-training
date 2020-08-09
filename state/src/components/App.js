import React, {Component} from 'react'
import ToDoList from './ToDoList'
import NavBar from './NavBar'
import AddTask from './AddTask'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import initialData from '../initialData'


class App extends Component {

    state = {
        fetching: true,
        tasks: []
    }

    onDeleteCompleted = () => {
        this.setState(prevState => {
            let newState = prevState.tasks.filter(task => !task.completed)
            return {
                tasks: newState
            }
        })
    }

    render() {
        return (
            <section id="toDo">
                <BrowserRouter>
                    <>
                        <Switch>
                            <Route path="/add-task" component={AddTask}/>} />
                            <Route path="/:filter?" component={ToDoList}/>} />
                        </Switch>
                        <NavBar onDeleteCompleted={this.onDeleteCompleted}/>
                    </>
                </BrowserRouter>

            </section>
        )//end return in render
    }//end render


}//end App class
export default App;
