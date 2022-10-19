import { FC, memo, useEffect } from 'react';
import Task from './Task';

type Todo = {
    id: number
    task: string
}

interface Props {
    todoList: Todo[]
}

const List: FC<Props> = ({ todoList }) => {

    useEffect(() => {
        console.log("<List/> rendering...");
    });

    return (
        <ul>
            {todoList.map(todo => (
                <Task key={todo.id} {...todo} />
            ))}
        </ul>
    )
}

export default memo(List);