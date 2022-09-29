import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface TaskTypes {
    id: string;
    title: string;
    isComplete: boolean;
};


interface TasksProviderProps {
    children: ReactNode;
}

interface TaskContextData {
    tasks: TaskTypes[]
    setTasks: React.Dispatch<React.SetStateAction<TaskTypes[]>>;
}

export const TaskContext = createContext<TaskContextData>({} as TaskContextData)

export function TasksProvider({ children }: TasksProviderProps) {
    const [tasks, setTasks] = useState<TaskTypes[]>(() => {
        const storeTasks = localStorage.getItem('tasks')

        if (storeTasks) {
            return JSON.parse(storeTasks)
        }
        return []
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);


    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    )
}

export function useTask() {
    const context = useContext(TaskContext);

    return context
}