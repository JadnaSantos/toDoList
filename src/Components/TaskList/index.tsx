import styles from './styles.module.css'
import { Trash } from 'phosphor-react';

type Task = {
    id: string;
    title: string;
    isCompleted: boolean;
};

interface TaskProps {
    content: string;
    onDeleteTask: (task: string) => void;
}

export function TaskList({ content, onDeleteTask }: TaskProps) {


    function handleDeleteTask() {
        onDeleteTask(content)
    }

    return (
        <div className={styles.container}>
            <div className={styles.taskBox}>
                <div className={styles.taskContent}>
                    <input
                        className={styles.checkbox}
                        type="checkbox"
                        readOnly
                    />
                    <p>{content}</p>
                    <button>
                        <Trash
                            role="button"
                            size={20}
                            onClick={handleDeleteTask}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}