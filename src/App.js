import ErrorOfFill from "./component/layout/errorOfFill";
import GetInformation from "./component/layout/getInformation";
import TableOfTodo from "./component/layout/tableOfTodos";
import BorderBox from "./component/UI/borderBox";

import TodoProvider from "./store/todosProvider";


function App() {
    return ( <
        TodoProvider >
        <
        BorderBox >
        <
        GetInformation / >
        <
        TableOfTodo / >
        <
        /BorderBox> <
        ErrorOfFill / >
        <
        /TodoProvider>
    );
}

export default App;