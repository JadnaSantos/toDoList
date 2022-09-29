import { Header } from "./Components/Header"
import { NewTask } from "./Components/NewTask"
import { TaskList } from "./Components/TaskList"
import { TasksProvider } from "./contexts/useTaskContextProvider"
import "./styles/global.css"

export function App() {
  //const [tasks, setTasks] = useState<TaskTypes[]>([])

  return (
    <TasksProvider>
      <Header />
      <NewTask />
      <TaskList />
    </TasksProvider>
  )
}


