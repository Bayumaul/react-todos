const baseUrl= '${process.env.REACT_APP_API_URL}/todos';

export const loadTodos = ()=>{
    return fetch (baseUrl).then((res) => res.json());
}

export const getTodo = (id) =>{
    return fetch('${baseUrl/${id}').then((res) => res.json());
}

export const createTodo = (todo) => {
    return fetch(baseUrl, {
        method : "Post",
        header : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            title : todo.title,
            completed : todo.completed
        }),
    }).then((res) => res.json());
}

export const uppdateTodo = (todo) => {
    return fetch('${baseUrl}/{todo.id}', {
        method : "Put",
        header : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            id          : todo.id,
            title       : todo.title,
            completed   : todo.completed
        }),
    }).then((res) => res.json());
}

export const deleteTodo = (id) => {
    return fetch('${baseUrl}/{todo.id}', {
        method : "DELETE",
    }).then(res => res.json());
}

