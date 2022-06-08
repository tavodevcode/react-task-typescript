import { useState } from 'react'
import TaskForm from './components/task/TaskForm'
import TaskList from './components/task/TaskList'
import { Task } from './interfaces/task.interface'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const getCurrentTimestamp = (): number => new Date().getTime()

  const addTask = (task: Task): void =>
    setTasks([...tasks, { ...task, id: getCurrentTimestamp() }])

  const deleteTask = (id: number): void =>
    setTasks([...tasks.filter(task => task.id !== id)])

  return (
    <div className="App">
      <div className="flex flex-wrap w-full h-full">
        <div className="flex p-5 bg-gray-50 w-2/5 h-screen justify-center items-center overflow-auto">
          <TaskForm addTask={addTask} />
        </div>
        <div className="bg-slate-600 w-3/5 p-4 overflow-auto">
          <TaskList tasks={tasks} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  )
}

export default App
