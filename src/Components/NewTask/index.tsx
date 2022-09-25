import { ClipboardText, PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { TaskList } from '../TaskList';
import styles from './styles.module.css'


export function NewTask() {
  const [tasks, setTasks] = useState([''])
  const [newTaks, setNewTask] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTaks]);
    setNewTask('')
  }

  function handleNewTaksChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function deleteTask(taskDelete: string) {
    const deleteTask = tasks.filter(task => {
      return task !== taskDelete
    })

    setTasks(deleteTask)
  }

  const isInputTaskEmpty = newTaks.length === 0;

  return (
    <div>
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
          onInvalid={handleNewTaskInvalid}
        />
        <button
          type="submit"
          className={styles.button}
          disabled={isInputTaskEmpty}
        >
          Criar <PlusCircle size={20} />
        </button>
      </form>

      {tasks.length === 0 ? (
        <div className={styles.emptyTask}>
          <ClipboardText size={70} />
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      ) : (
        <div className={styles.list}>
          {tasks.map((task) => {
            return <TaskList
              key={task}
              content={task}
              onDeleteTask={deleteTask}
            />
          })}
        </div>
      )}
    </div>
  )
}