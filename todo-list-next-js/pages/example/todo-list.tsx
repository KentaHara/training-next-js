import { useTodoList, UseTodoListActionType } from '../../modules/uses/useTodo'
import Todo from '../../components/organisms/Todo'

const TodoList = () => {
  const list = useTodoList()
  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => list.dispatch({ type: UseTodoListActionType.ADD })}>Add TODO</button>
      {list.list.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          title={todo.title}
          isDone={todo.isDone}
          onChangeTitle={(event) =>
            list.dispatch({ type: UseTodoListActionType.CHANGE_TEXT, index, event })
          }
          onChangeIsDone={(event) =>
            list.dispatch({ type: UseTodoListActionType.CHANGE_IS_DONE, index, event })
          }
          onDelete={() => list.dispatch({ type: UseTodoListActionType.DELETE, index })}
        />
      ))}
    </div>
  )
}

export default TodoList
