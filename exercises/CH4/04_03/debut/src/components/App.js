import React, { Component } from 'react'
import ToDoList from './ToDoList'
import NavBar from './NavBar'
import AddTask from './AddTask'
import { BrowserRouter , Switch, Route} from 'react-router-dom'

const initialData = {
  tasks: [
    {id: 'jsertu7a', name: 'Ranger la vaisselle', completed: false},
    {id: 'jseruo7l', name: 'Répondre appel d\'offres', completed: false},
    {id: 'jseruy2q', name: 'Signer contrat', completed: false},
    {id: 'jserv4sw', name: 'Aspirer le salon', completed: false}
  ]
};

const TaskData = React.createContext();


class App  extends Component {
  render(){
    return(
      <TaskData.Provider value={initialData}>
          <section id="toDo">
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
      </TaskData.Provider>
      
    )//end return in render
  }//end render


}//end App class
export default App;
