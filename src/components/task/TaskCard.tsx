import { Task } from '../../interfaces/task.interface'

interface Props {
  task: Task
  deleteTask: (id: number) => void
}

const TaskCard = ({ task, deleteTask }: Props) => {
  return (
    <div className="w-2/4 px-2 py-2">
      <div className="flex border-l-8 border-blue-400 hover:border-blue-500">
        <div className="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-white py-6 pr-6 pl-9">
          <p className="text-2xl uppercase font-bold text-gray-500 group-hover:text-gray-700">
            {task.title}
          </p>

          <p className="text-sm font-semibold text-gray-500 group-hover:text-gray-900 mt-2 leading-6">
            {task.description}
          </p>
          <button
            className="bg-red-500 text-white px-5 py-2 rounded mt-5 w-full font-bold uppercase hover:bg-red-600 transition-all duration-200"
            type="button"
            onClick={() => task.id && deleteTask(task.id)}
          >
            Eliminar tarea
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
