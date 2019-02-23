import React, { Component } from 'react'
import { ITask } from './Task';

interface IProps {
    addNewTask: (task: ITask) => void
}

interface IState {
    title: string,
    description: string
}

class TaskForm extends Component<IProps, IState> {
    state = {
        title: '',
        description: ''
    }

    getCurrentTimeStamp = (): number => {
        const date: Date = new Date();
        return date.getTime()
    }

    handleNewTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { title, description } = this.state
        const newTask: ITask = {
            id: this.getCurrentTimeStamp(),
            title,
            description,
            completed: false
        }
        this.props.addNewTask(newTask)
        this.setState({ title: '', description: '' })
    }

    public handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        } as { [K in keyof IState]: IState[K] });
    };

    render() {
        const { title, description } = this.state
        return (
            <div className="card card-body">
                <form onSubmit={this.handleNewTask}>
                    <div className="form-group">
                        <input
                            name="title"
                            type="text"
                            className="form-control"
                            placeholder="Task Title"
                            value={title}
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="description"
                            className="form-control"
                            placeholder="Task Description"
                            value={description}
                            onChange={this.handleInputChange}>
                        </textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Save Task</button>
                </form>
            </div>
        )
    }
}


export default TaskForm
