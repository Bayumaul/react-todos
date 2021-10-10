import React, {useEffect} from 'react';
import { Tabs, Row, Col, Layout, List } from 'antd';
import TodoItem from '.TodoItem';

const TodoTab = ({todos, onTodoRemoval, onTodoToggle})=>{
    return(
        <>
            <List locale={{ emptyText : "There's Nothing", }} dataSource={todos} renderItem={todo => {
                <TodoItem   todo = {todo} onTodoToggle={onTodoToggle} onTodoRemoval={onTodoRemoval}>
                  
                </TodoItem>
                }
            }
            pagination={{ 
                position:'bottom', pageSize:10, 
             }}
            >
            </List>
        </>
    )
}

export default TodoTab;