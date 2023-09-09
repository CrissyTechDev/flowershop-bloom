import FetchTodos from "../page"

;


type PageProps = {
    params: {
        todoId: string
    }
}

  
const fetchTodo = async (todoId: string ) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)


}

async function TodoPage ({ params: { todoId }}: PageProps) {




    return (
        <div>
            {todoId}
        </div>
    )
}

export default TodoPage;