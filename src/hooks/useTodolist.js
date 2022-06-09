import { useContext } from 'react';
import TodosContext from '../store/todosContext';

export const UseTodoList = () => {
    const todoCTX = useContext(TodosContext);
    let resultArr = [];
    const deleteTodo = (idNum) => {
        resultArr = todoCTX.todos.filter(todo => {
            if (todo.id !== idNum) {
                return todo;
            }
        })
        todoCTX.setTodo(resultArr);
    }
    return {
        deleteTodo,
        resultArr
    }
}