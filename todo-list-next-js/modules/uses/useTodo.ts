import { ChangeEvent, useReducer } from 'react'

export const UseTodoListActionType = {
  ADD: 'add',
  CHANGE_TEXT: 'change_text',
  CHANGE_IS_DONE: 'change_is_done',
  DELETE: 'delete',
} as const
export type UseTodoListActionType = typeof UseTodoListActionType[keyof typeof UseTodoListActionType]

export interface UseTodoListAction {
  type: UseTodoListActionType
  index?: number
  event?: ChangeEvent<HTMLInputElement>
}

export interface Todo {
  isDone: boolean
  title: string
}

export const useTodoList = () => {
  const initialList: Todo[] = []
  const addAction = (state: Todo[]): Todo[] => {
    return [...state, { isDone: false, title: '' }]
  }
  const deleteAction = (state: Todo[], index?: number) => {
    return _splice(state, index, 1)
  }
  const _splice = <T>(state: T[], index: number, deleteCount: number, ...items: T[]): T[] => {
    const nextState = state.slice()
    nextState.splice(index, deleteCount, ...items)
    return nextState
  }

  const _update = <T>(state: T[], index: number, value: { [key in keyof T]?: T[key] }): T[] => {
    const prev = state[index]
    if (prev === undefined) return state
    return _splice(state, index, 1, { ...prev, ...value })
  }

  const updateTodo = (
    state: Todo[],
    index: number | undefined,
    value: { [key in keyof Todo]?: Todo[key] },
  ) => {
    if (index === undefined) return state
    const prevState = state[index]
    if (prevState === undefined) return state
    return _update(state, index, value)
  }

  const reducer = (state: Todo[], action: UseTodoListAction) => {
    const index = action.index
    switch (action.type) {
      case UseTodoListActionType.ADD: {
        return addAction(state)
      }
      case UseTodoListActionType.CHANGE_TEXT:
        return updateTodo(state, index, {
          title: action.event?.target.value,
        })
      case UseTodoListActionType.CHANGE_IS_DONE:
        return updateTodo(state, index, {
          isDone: action.event?.target.checked,
        })
      case UseTodoListActionType.DELETE:
        return deleteAction(state, index)
    }
  }
  const [list, dispatch] = useReducer(reducer, initialList)

  return {
    list,
    dispatch,
  }
}
export type UseTodoList = ReturnType<typeof useTodoList>
