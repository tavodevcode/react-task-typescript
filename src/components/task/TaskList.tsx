import { Task } from '../../interfaces/task.interface'
import TaskCard from './TaskCard'

interface Props {
  tasks: Task[]
  deleteTask: (id: number) => void
}

const TaskList = ({ tasks, deleteTask }: Props) => {
  if (tasks.length === 0)
    return (
      <div className="px-3 w-full h-full flex justify-center items-center">
        <h1 className="font-bold text-2xl text-white text-center">
          No hay tareas
        </h1>
      </div>
    )

  return (
    <div className="w-full flex flex-wrap">
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  )
}

export default TaskList
