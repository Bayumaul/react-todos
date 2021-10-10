import React, {useState} from 'react';
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from 'antd';
import {CloseOutlined, CheckOutlined} from '@ant-design/icons';

const Todo = ({todo, onTodoRemoval, onTodoToggle})=>{
    return (
        <List.Item className="list-tem" key="todo.id" actions={[
            <Tooltip title={todo.completed ? 'Mark as uncompleted' : 'Mark as completed'}>
                <Switch checkedChildren={<CheckOutlined/>} unCheckedChildren={<CloseOutlined/>} onChange={()=>onTodoToggle(todo)} defaultChecked={todo.completed}>

                </Switch>
            </Tooltip>,
            <Popconfirm title={'Are you deleted ?'} onConfirm={()=>{
                onTodoRemoval(todo);
            }}>
                <Button className="remove-todo-button" type="primary">
                    X
                </Button>
            </Popconfirm>
        ]} >
            <div className="todo-item">
                <Tag className="todo-tag" color={todo.completed ? 'cyan':"red"} >
                    {todo.title}
                </Tag>
            </div>
        </List.Item>
    )
}

export default Todo;