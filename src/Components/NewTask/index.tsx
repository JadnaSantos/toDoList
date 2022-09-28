import { ClipboardText, PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { TaskList } from '../TaskList';
import styles from './styles.module.css'

export interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

export function NewTask() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaks, setNewTask] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: newTaks,
        isComplete: false
      }
    ])

    setNewTask('');
  }

  function handleNewTaksChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function deleteTask(taskId: string) {
    const newTaks = tasks.filter((task) => task.title !== taskId)

    setTasks(newTaks)
  }

  function toggleTaskCompletion(taskId: string) {
    setTasks((state) => {
      return state.map((taskItem) => {
        if (taskItem.title === taskId) {
          return {
            ...taskItem,
            isCompleted: !taskItem.isComplete,
          };
        }
        return taskItem;
      });
    });
  }


  const isInputTaskEmpty = newTaks.length === 0;

  const tasksQuantity = tasks.length;

  const completedTasks = tasks.filter((task) => task.isComplete).length;
  console.log(completedTasks)

  return (
    <div className={styles.container}>
      <form
        className={styles.content}
        onSubmit={handleCreateNewTask}
      >
        <input
          className={styles.input}
          type="text"
          value={newTaks}
          required
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaksChange}
        />
        <button
          type="submit"
          className={styles.button}
          disabled={isInputTaskEmpty}
        >
          Criar <PlusCircle size={20} />
        </button>
      </form>

      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <p>Tarefas criadas</p>
            <span>{tasksQuantity}</span>
          </div>

          <div>
            <p className={styles.textPurple}>Concluídas</p>
            <span>
              {completedTasks} de {tasksQuantity}
            </span>
          </div>
        </header>
      </div>

      <div className={styles.list}>
        {tasks.map((task) => {
          return <TaskList
            key={task.id}
            content={task.title}
            onDeleteTask={deleteTask}
            onCompleted={toggleTaskCompletion}
          />
        })}
      </div>

      {tasks.length <= 0 && (
        <div className={styles.emptyTask}>
          <ClipboardText size={70} />
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      )}
    </div>
  )
}