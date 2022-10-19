import { FC, memo, useEffect } from 'react';

interface Props {
    id: number
    task: string
}

const Task: FC<Props> = ({task}) => {

    useEffect(() => {
        console.log(`<Task/> ${task} rendering...`);
    });

    return (
        <li>{task}</li>
    )
};


export default memo(Task);