import { CheckCircle, ClipboardText, Trash } from 'phosphor-react';
import { useTask } from '../../contexts/useTaskContextProvider';
import styles from './styles.module.css'



export function TaskList() {
    const { tasks, setTasks } = useTask();

    function handleTaskComplete(id: string) {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    task.isComplete = !task.isComplete
                }
                return task
            })
        )
    }


    function handleDeleteTask(id: string) {
        setTasks(
            tasks.filter((task) => {
                return task.id !== id
            })
        )
    }

    const tasksCreated = tasks.length

    const tasksCompleted = tasks.filter((task) => task.isComplete).length;

    return (
        <>
            <div className={styles.container}>
                <p>
                    Tarefas criadas <span>{tasksCreated}</span>
                </p>
                <p>
                    Concluídas{" "}
                    {tasksCreated > 0 ? (
                        <span>
                            {tasksCompleted} de {tasksCreated}
                        </span>
                    ) : (
                        <span>{tasksCreated}</span>
                    )}
                </p>
            </div>
            {tasksCreated > 0 ? (
                <ul className={styles.list}>
                    {tasks.map((task) => (
                        <li key={task.id} className={styles.taskContent}>
                            <button
                                onClick={() => handleTaskComplete(task.id)}
                                className={
                                    task.isComplete ? styles.btnComplete : styles.btnIncomplete
                                }
                            >
                                <CheckCircle size={20} />
                            </button>
                            <span
                                className={
                                    task.isComplete ? styles.taskComplete : styles.taskIncomplete
                                }
                            >
                                {task.title}
                            </span>
                            <button
                                onClick={() => handleDeleteTask(task.id)}
                                className={styles.btnDelete}
                            >
                                <Trash weight="light" />
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className={styles.emptyList}>
                    <ClipboardText size={40} />
                    <p>
                        <strong>Você ainda não tem tarefas cadastradas</strong> <br />
                        Crie tarefas e organize seus itens a fazer
                    </p>
                </div>
            )}
        </>
    )
}