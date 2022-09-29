import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { TaskTypes } from '../../@types';
import { useTask } from '../../contexts/useTaskContextProvider';
import styles from './styles.module.css'

export function NewTask() {
  const { tasks, setTasks } = useTask();
  const [newTaks, setNewTask] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([
      ...tasks,
      {
        id: uuid(),
        title: newTaks,
        isComplete: false
      }
    ])

    setNewTask('');
  }

  function handleChangeTaskInput(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value);
  }

  return (
    <form
      className={styles.content}
      onSubmit={handleCreateNewTask}
    >
      <input
        type="text"
        required
        value={newTaks}
        className={styles.input}
        onChange={handleChangeTaskInput}
        placeholder="Adicione uma nova tarefa"
      />
      <button
        type="submit"
        className={styles.button}
      >
        Criar <PlusCircle size={20} />
      </button>
    </form>
  )
}