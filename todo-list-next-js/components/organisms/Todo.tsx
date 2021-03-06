import { ChangeEvent } from 'react'
import PropTypes from 'prop-types'

type Prop = {
  index: number
  title: string
  isDone: boolean
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeIsDone: (event: ChangeEvent<HTMLInputElement>) => void
  onDelete: () => void
}
const Todo = (prop: Prop) => {
  return (
    <div style={{ border: '1px solid #000', margin: '4px' }}>
      {prop.index}
      <input type="checkbox" checked={prop.isDone} onChange={prop.onChangeIsDone} />
      <input type="text" placeholder="Todo Name" value={prop.title} onChange={prop.onChangeTitle} />
      <button onClick={prop.onDelete}>Delete</button>
    </div>
  )
}
export default Todo
