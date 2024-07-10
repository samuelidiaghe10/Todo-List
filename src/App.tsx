import { useState } from "react"
import roller from '../src/images/icons8-paint-roller-50 (1).png'
import close from '../src/images/icons8-close-50.png'

type Todo = {
  id: number,
  task: string,
  completed: boolean
}

function App() {
  const [todo, setTodo] = useState<Todo[]>([])

  const [newTodo, setNewTodo] = useState<string>('')

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const [filter, setFilter] = useState<'all'| 'active' | 'completed'>('all')

  const d = new Date

  const day = days[d.getDay()]

  const month = months[d.getMonth()] 

  const year = d.getFullYear()

  const date = d.getDate()

  const [toggle, setToggle] = useState<boolean>(false)

  const handleInput = (event:React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value)
  }

  const handleAdd = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter' && newTodo.trim() !== '') {
        setTodo([...todo, {id: Date.now(), task:newTodo, completed:false}])
        setNewTodo('')
    } 
  }

  const handleCompleted = (id:number) => {
    setTodo(
      todo.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    )
  }

  const handleDelete = (id: number) => {
    setTodo(todo.filter(todo => todo.id != id))
  }

  const filteredTodo = filter === 'all' ? todo : filter === 'completed' ? todo.filter(todo => todo.completed) : todo.filter(todo => !todo.completed)

  const inCompleteTodo = todo.filter(todo => !todo.completed).length

  return (
    <div className={`flex ${toggle ? 'bg-black text-white' : 'bg-white text-black'} pt-10 md:pt-20 justify-center min-h-screen`}>
      <div className="lg:w-[27rem] w-[22rem] flex flex-col gap-3">
        <div className="flex mb-5 items-center justify-between">
          <div className="text-2xl font-bold">
            {`${day}  ${month}  ${date} ${year}`}
          </div>

          <button onClick={() => setToggle(!toggle)}>
            <img className={`w-[30px] ${toggle ? 'light' : ''}`} src={roller} alt="" />
          </button>
        </div>

        <div className="flex text-lg items-center. justify-between">
          <div>
            {inCompleteTodo} tasks
          </div>

          <div className={`flex  items-center gap-3`}>
            <button className={`${filter === 'all' ? `${toggle ? 'bg-white text-black rounded-full px-2' : 'text-white bg-black'}` : ''} rounded-full px-2`}
            onClick={() => setFilter('all')}>
              All
            </button>

            <button className={`${filter === 'active' ? `${toggle ? 'bg-white text-black ' : 'text-white bg-black'}` : ''} rounded-full px-2`}
            onClick={() => setFilter('active')}>
              Active
            </button>

            <button className={`${filter === 'completed' ? `${toggle ? 'bg-white text-black ' : 'text-white bg-black'}` : ''} rounded-full px-2`}
            onClick={() => setFilter('completed')}>
              Completed
            </button>
          </div>
        </div>

        <div className="">
          <input value={newTodo}
          onChange={handleInput}
          onKeyPress={handleAdd}
          className={`outline-none border-b-2 w-full ${toggle ? 'bg-black text-white' : ''}`}
          type="text" 
          placeholder="Add a new task..." />
        </div>

        <ul className="divide-y-2">

          {filteredTodo.map((todo) =>
            <li key={todo.id} className="flex items-center justify-between">
              <div className="flex  py-2 items-center gap-5">
                <input checked={todo.completed} onChange={() => handleCompleted(todo.id)}
                type="checkbox" />

                <p className={todo.completed ? 'line-through' : ''}>
                  {todo.task}
                </p>
              </div>

              <button onClick={() => handleDelete(todo.id)}>
                <img src={close} className={`w-[17px] ${toggle ? 'light' : ''}`} alt="" />
              </button>
            </li>
          )}
        </ul>

      </div>

    </div>
  )
}

export default App
