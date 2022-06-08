import { ChangeEvent, FormEvent, useState, useRef } from 'react'
import { Task } from '../../interfaces/task.interface'

interface Props {
  addTask: (task: Task) => void
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const inititalState = {
  title: '',
  description: '',
  status: 'PENDING'
}

const TaskForm = ({ addTask }: Props) => {
  const [task, setTask] = useState<Task>(inititalState)
  const titleInput = useRef<HTMLInputElement>(null)

  const handleInputChange = ({ target: { value, name } }: HandleInputChange) =>
    setTask({ ...task, [name]: value })

  const handleAddTask = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    addTask(task)
    setTask(inititalState)
    titleInput.current?.focus()
  }

  return (
    <form
      onSubmit={handleAddTask}
      className="py-5 px-7 w-4/5 bg-white shadow-sm rounded items-center"
    >
      <h1 className="text-xl uppercase mb-5 text-center font-bold">
        Formulario de tareas
      </h1>
      <div className="">
        <label className="block font-semibold text-md mb-2" htmlFor="username">
          Titulo
        </label>
        <input
          className="block w-full px-4 py-2 mb-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:border-2"
          placeholder="task title"
          type="text"
          name="title"
          id="title"
          value={task.title}
          onChange={handleInputChange}
          ref={titleInput}
          autoFocus
          required
        />
      </div>
      <div className="w-full">
        <label className="block font-semibold text-md mb-2" htmlFor="username">
          Descripcion
        </label>
        <textarea
          className="block w-full px-4 py-2 mb-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:border-2"
          rows={2}
          cols={20}
          id="description"
          name="description"
          value={task.description}
          onChange={handleInputChange}
          required
        />
      </div>
      <button
        className="bg-green-500 text-white px-5 py-2 rounded mt-5 w-full font-bold uppercase hover:bg-green-600 transition-all duration-200"
        type="submit"
      >
        Crear tarea
      </button>
    </form>
  )
}

export default TaskForm
