import { useContext, useReducer } from "react";
import TodosContext from "../store/todosContext";

const defaultTodoState = {
    todos: []
}
const todoReducer = (state, action) => {
    if (action.type === 'ADD') {
        const actionTodo = [{ id: action.id, title: action.title, description: action.description, dueDate: action.dueDate }]
        const updatedTodos = state.todos.concat(actionTodo);
        return {
            todos: updatedTodos,
        }
    } else if (action.type === "REMOVE") {
        const updatedTodos = state.todos.filter(todo => {
            if (todo.id === action.idNum) {
                return ''
            } else {
                return todo
            }
        })
        return {
            todos: updatedTodos,
        }
    }



    return defaultTodoState;
}
const UseTodoList = () => {
    var todoCTX = useContext(TodosContext)

    const [todoState, dispatchTodoAction] = useReducer(todoReducer, defaultTodoState);
    const addTodo = (title, description, dueDate, id) => {
        dispatchTodoAction({ type: 'ADD', title: title, description: description, dueDate: dueDate, id: id })
    }
    const deleteTodo = (id) => {
        dispatchTodoAction({ type: "REMOVE", idNum: id, })

    }
    return {
        todoList: todoState.todos,
        addTodo,
        deleteTodo,

    }
}
export default UseTodoList;