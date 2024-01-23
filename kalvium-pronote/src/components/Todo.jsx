import { Component } from "react";

export default class Todo extends Component {
    constructor() {
        super()
        this.state = {
            inputText: "",
            todos: [],
        }
    }

    handleChange = (event) => {
        this.setState(
            {
            inputText: event.target.value,
        })
    }

    handleADD = () => {
        this.setState(
            {
                inputText: "",
                todos: [...this.state.todos, this.state.inputText],
            }
        )
    }

    handleUpdate = (index) => {
        let updatedTodo = prompt("Change the todo")

        let filteredtodos = this.state.todos.map((el, i) => {
            if(i == index){
                return updatedTodo
            }
            return el
        })
        this.setState({...this.state, todos: filteredtodos})
    }

    handleDelete = (index) => {
        this.state.todos.splice(index, 1)
        this.setState({...this.state, todos: this.state.todos})
    }



    render() {
        return (
            <>
                <h1>To-do app</h1>
                <div className="main-container">
                    <input type="text" placeholder="Do something with your life" onChange={this.handleChange}/>
                    <button onClick={this.handleADD}>Add Todo</button>
                    {
                    this.state.todos.map((el, i) => {
                        return(
                            <div key={i}>
                            <p>{el}</p>
                            <button onClick={() => this.handleUpdate(i)}>Update</button>
                            <button onClick={() => this.handleDelete(i)}>Delete</button>
                            </div>
                        )
                    })
                }
                </div>
            </>
        )
    }
}