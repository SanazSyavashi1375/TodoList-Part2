import TodosContext from "./todosContext";
import { useReducer, useState } from "react";
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
const TodoProvider = (props) => {
        const [cartIsShown, setCartIsShown] = useState(false);

        const showCartHandler = () => {
            setCartIsShown(true);
        };

        const hideCartHandler = () => {
            setCartIsShown(false);

        };
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');
        const [dueDate, setDueDate] = useState('');
        const [id, setId] = useState(1);
        const [todoState, dispatchTodoAction] = useReducer(todoReducer, defaultTodoState);
        const addItemToTodos = (title, description, dueDate, id) => {
            dispatchTodoAction({ type: 'ADD', title: title, description: description, dueDate: dueDate, id: id })
        }
        const removeItemFromTodos = (id) => {
            dispatchTodoAction({ type: "REMOVE", idNum: id })
            console.log(todoState.todos);
        }
        const todoContext = {
            id: id,
            title: title,
            description: description,
            dueDate: dueDate,
            todos: todoState.todos,
            addTodo: addItemToTodos,
            removeTodo: removeItemFromTodos,
            setTitle: setTitle,
            setDescription: setDescription,
            setDueDate: setDueDate,
            setId: setId,
            cartIsShown: cartIsShown,
            showCartHandler: showCartHandler,
            hideCartHandler: hideCartHandler,
        }

        return ( <
            TodosContext.Provider value = { todoContext } > { props.children } <
            /TodosContext.Provider>)
        }
        export default TodoProvider;