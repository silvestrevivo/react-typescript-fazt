import React, { Component } from 'react'
import { ITask } from './Task';

interface ITaskListProps {
    tasks: ITask[],
    deleteTask: (id: number) => void | undefined
}

class TaskList extends Component<ITaskListProps, {}> {
    render(): JSX.Element[] {
        return this.props.tasks.map((task: ITask, i: number) => {
            return (
                <div className="col-md-4 mt-2" key={task.id}>
                    <div className="card card-body">
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <button
                            className="btn btn-danger btn-block"
                            onClick={() => this.props.deleteTask(task.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            )
        })
    }
}



export default TaskList;
