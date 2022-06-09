import TodosContext from "./todosContext";
import { useState } from "react";
import UseInput from "../hooks/useInput";
const TodoProvider = (props) => {
        const [todoList, setTodoList] = useState([]);
        const [cartIsShown, setCartIsShown] = useState(false);
        const showCartHandler = () => {
            setCartIsShown(true);
        };

        const hideCartHandler = () => {
            setCartIsShown(false);

        };
        const addTodo = (title, description, dueDate, id) => {
            setTodoList(prev => [...prev, { "title": title, "description": description, "dueDate": dueDate, "id": id }])
        }

        const { value: title, reset: resetTitle, valueChangeHandler: setTitle } = UseInput()
        const { value: description, reset: resetDescription, valueChangeHandler: setDescription } = UseInput()
        const { value: dueDate, reset: resetDueDate, valueChangeHandler: setDueDate } = UseInput()


        const [id, setId] = useState(1);


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
            // removeTodo: deleteTodo,
            setTitle: setTitle,
            setDescription: setDescription,
            setDueDate: setDueDate,
            setId: setId,
            cartIsShown: cartIsShown,
            showCartHandler: showCartHandler,
            hideCartHandler: hideCartHandler,
            setTodo: setTodoList,



        }

        return ( < TodosContext.Provider value = { todoContext } > { props.children } < /TodosContext.Provider>)
        }
        export default TodoProvider;