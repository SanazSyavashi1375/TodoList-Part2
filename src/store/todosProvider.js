import TodosContext from "./todosContext";
import { useState } from "react";
import UseInput from "../hooks/useInput";
import UseTodoList from "../hooks/useTodolist";

const TodoProvider = (props) => {

        const [cartIsShown, setCartIsShown] = useState(false);
        const showCartHandler = () => {
            setCartIsShown(true);
        };

        const hideCartHandler = () => {
            setCartIsShown(false);

        };


        const { value: title, reset: resetTitle, valueChangeHandler: setTitle } = UseInput()
        const { value: description, reset: resetDescription, valueChangeHandler: setDescription } = UseInput()
        const { value: dueDate, reset: resetDueDate, valueChangeHandler: setDueDate } = UseInput()


        const [id, setId] = useState(1);

        const addDelete = (state, action) => {
            let updatedTodos = [];
            if (action.type === 'ADD') {
                const actionTodo = [{ id: action.id, title: action.title, description: action.description, dueDate: action.dueDate }]
                updatedTodos = state.todos.concat(actionTodo);
            } else if (action.type === "REMOVE") {
                updatedTodos = state.todos.filter(todo => {
                    if (todo.id === action.idNum) {
                        return ''
                    } else {
                        return todo
                    }
                })
            }
            return updatedTodos;
        }

        const { todoList, deleteTodo, addTodo } = UseTodoList()
        const todoContext = {
            id: id,
            title: title,
            description: description,
            dueDate: dueDate,
            resetTitle: resetTitle,
            resetDescription: resetDescription,
            resetDueDate: resetDueDate,
            todos: todoList,
            addTodo: addTodo,
            removeTodo: deleteTodo,
            setTitle: setTitle,
            setDescription: setDescription,
            setDueDate: setDueDate,
            setId: setId,
            cartIsShown: cartIsShown,
            showCartHandler: showCartHandler,
            hideCartHandler: hideCartHandler,
            addDelete: addDelete

        }

        return ( < TodosContext.Provider value = { todoContext } > { props.children } < /TodosContext.Provider>)
        }
        export default TodoProvider;