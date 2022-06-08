import TodoProvider from '../../store/todosProvider';
import Row from '../UI/row'
import { useContext } from 'react';
import TodosContext from '../../store/todosContext';

const TableOfTodo = (props) => {
        const todosCTX = useContext(TodosContext);

        let tableHeader = < Row number = 'No'
        title = 'Title'
        description = 'Description'
        dueDate = 'DueDate' / > ;
        let todosArr = todosCTX.todos;
        let resultArr = [];
        if (todosArr.length > 4) {

            resultArr = todosArr.map((todo, index) => < Row key = { todo.id }
                number = { index + 1 }

                title = { todo.title }
                description = { todo.description }
                dueDate = { todo.dueDate }
                deleteBtn = 'True'
                onClick = {
                    () => todosCTX.removeTodo(todo.id)
                }
                / >  )

            }
            if (4 >= todosArr.length) {
                let emptyRow = 4 - todosArr.length;
                let todosArray = todosArr.map((todo, index) => < Row key = { todo.id }
                        number = { index + 1 }
                        title = { todo.title }
                        description = { todo.description }
                        dueDate = { todo.dueDate }
                        deleteBtn = 'True'
                        onClick = {
                            () => todosCTX.removeTodo(todo.id)
                        }
                        / > )
                        let emptyArr = [];
                        for (let i = 0; i < emptyRow; i++) {
                            emptyArr = [...emptyArr, < Row key = { Math.floor(Math.random() * 10000) }
                                /> ]
                            }
                            resultArr = [...todosArray, ...emptyArr]
                        }

                        return ( < TodoProvider > { tableHeader } { resultArr } < /TodoProvider>)
                        }

                        export default TableOfTodo;