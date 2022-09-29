import styles from './styles.module.css'
import { Check, CheckCircle, Trash } from 'phosphor-react';

interface TaskProps {
    task: string;
    isComplete?: boolean;
    onDeleteTask: (task: string) => void;
}

export function TaskList({ task, onDeleteTask }: TaskProps) {
    function handleDeleteTask() {
        onDeleteTask(task)
    }

    return (
        <div className={styles.container}>

            <div className={styles.taskBox}>
                <div className={styles.taskContent}>
                    <button
                    >
                        <CheckCircle size={32} />
                    </button>

                    <p>{task}</p>
                    <button
                        onClick={handleDeleteTask}
                    >
                        <Trash size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}