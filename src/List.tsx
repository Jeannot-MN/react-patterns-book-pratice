import { FC, memo, useEffect } from 'react';
import Task from './Task';

type Todo = {
    id: number
    task: string
}

interface Props {
    todoList: Todo[]
    handleDelete: (taskId: number) => void;
}

const List: FC<Props> = ({ todoList, handleDelete }) => {

    useEffect(() => {
        console.log("<List/> rendering...");
    });

    return (
        <ul>
            {todoList.map(todo => (
                <Task key={todo.id} handleDelete={handleDelete} {...todo} />
            ))}
        </ul>
    )
}

export default memo(List);