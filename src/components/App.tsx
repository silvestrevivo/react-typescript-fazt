import React, { Component } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { ITask } from './Task';
import './App.css';

interface IProps {
  title: string
}

interface IState {
  tasks: ITask[]
}

class App extends Component<IProps, IState> {
  state = {
    tasks: []
  }

  addNewTask = (task: ITask) => {
    this.setState({ tasks: [...this.state.tasks, task] })
  }

  deleteTask = (id: number) => {
    const tasks = this.state.tasks.filter((x: ITask) => x.id !== id);
    this.setState({ tasks })
  }

  render() {
    const { tasks } = this.state
    const { title } = this.props
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a href="/" className="navbar-brand">{title}</a>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <TaskForm addNewTask={this.addNewTask} />
            </div>
            <div className="col-md-8">
              <div className="row">
                <TaskList tasks={tasks} deleteTask={this.deleteTask} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
