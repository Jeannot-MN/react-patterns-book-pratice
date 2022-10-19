import { FC, useEffect } from 'react';

interface Props {
    id: number
    task: string
}

const Task: FC<Props> = ({task}) => {
    
    useEffect(() => {
        console.log("Task rendering...");
    });

    return (
        <li>{task}</li>
    )
};


export default Task;