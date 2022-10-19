import { FC, memo, useEffect } from 'react';

interface Props {
    id: number
    task: string
    handleDelete: (taskId: number) => void;
}

const Task: FC<Props> = ({ task, id, handleDelete }) => {

    useEffect(() => {
        console.log(`<Task/> ${task} rendering...`);
    });

    return (
        <li>{task} <button onClick={() => { handleDelete(id) }}>X</button></li>
    )
};


export default memo(Task);