import React, { Component } from 'react'
import ToDoList from './ToDoList'
import NavBar from './NavBar'
import AddTask from './AddTask'
import { BrowserRouter , Switch, Route} from 'react-router-dom'
import DevTools from 'mobx-react-devtools';

class App  extends Component {
  render(){
    return(
      <section id="toDo">
        <DevTools />
        <BrowserRouter>
          <>
            <Switch>
                <Route path="/add-task" component={AddTask} />
                <Route path="/:filter?" component={ToDoList} />
            </Switch>
            <NavBar onDeleteCompleted={this.onDeleteCompleted}/>
          </>
        </BrowserRouter>
       
    </section>
    )//end return in render
  }//end render


}//end App class
export default App;
