import React from "react";
const TodosContext = React.createContext({
    id: 1,
    title: '',
    description: '',
    dueDate: '',
    todos: [],
    addTodo: () => {},
    removeTodo: () => {},
    setTitle: () => {},
    setDescription: () => {},
    setId: () => {},
    setDueDate: () => {},
    cartIsShown: '',
    showCartHandler: () => {},
    hideCartHandler: () => {},
});
export default TodosContext;