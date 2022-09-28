import styles from './styles.module.css'
import { CheckCircle, Trash } from 'phosphor-react';

interface TaskProps {
    content: string;
    onDeleteTask: (task: string) => void;
    onCompleted: (task: string) => void;
}

export function TaskList({ content, onDeleteTask, onCompleted }: TaskProps) {

    function handleCheckChange() {
        onCompleted(content);
    }

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
                        checked={true}
                        onClick={() => handleCheckChange()}
                    />

                    <p>{content}</p>
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