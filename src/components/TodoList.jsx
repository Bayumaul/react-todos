import React, {useCallback, useEffect, useState} from 'react';
import { Tabs, Row, Col, Layout, Input, message } from 'antd';
import '.TodoList.css';
import TodoTab from './TodoTab';
import TodoForm from './TodoForm';
import { createTodo, deleteTodo, loadTodo, updateTodo} from '../services/todoSevice';

const {TabPane} = Tabs;
const {content} = Layout;

const TodoList = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [todos, setTodos] = useState([]);
    const [activeTodos, setActiveTodos] = useState([]);
    const [completedTodos, setcompletedTodos] = useState([]);

    const handleFormSubmit = (todo) => {
        console.log('Todo create', todo);
        createTodo(todo).then(onRefresh());
        message.success('Todo added !');
    }

    const handleRemoveTodo = (todo) => {
        deleteTodo(todo.id).then(onRefresh());
        message.warn('Todo removed !');
    }

    const handleToggleTodoStatus = (todo) =>{
        todo.completed = !todo.completed;
        updateTodo(todo).then(onRefresh());
        message.info('Todo status update !')
    }

    const refresh = () =>{
        loadTodo().then(json => {
            setTodos(json);
            setActiveTodos(json.filter(todo => todo.completed === false));
            setcompletedTodos(json.filter(todo => todo.completed === true));
        }).then(console.log('fecth complted'));
    }
    const onRefresh = useCallback( async () => {
        setRefreshing(true);
        let data = await loadTodo;
        setTodos(data);
        setActiveTodos(data.filter(todo => todo.completed === false));
        setcompletedTodos(data.filter(todo => todo.completed === true));
        setRefreshing(false);
        console.log('Refresh state', refreshing);
    }, [refreshing]);

    useEffect(() =>{
        refresh();
    }, [onRefresh])
}

export default TodoList;