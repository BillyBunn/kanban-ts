import { IBoardState } from './types'

export enum BoardActionTypes {
  ADD_CARD = 'ADD_CARD'
}

export interface IAction {
  type: BoardActionTypes
  payload: {
    columnId: number
    text: string
  }
}

const initialState: IBoardState = {
  columns: [
    {
      cards: [{ text: 'Do this thing' }, { text: 'Another thing' }],
      name: 'To do'
    },
    { name: 'In progress', cards: [{ text: 'Work on this' }] },
    { name: 'Review', cards: [] },
    { name: 'Complete', cards: [{ text: 'Something done' }] }
  ]
}

export function boardReducer(
  state = initialState,
  action: IAction
): IBoardState {
  switch (action.type) {
    case BoardActionTypes.ADD_CARD:
      const { columnId, text } = action.payload
      const columns = [...state.columns]
      columns[columnId].cards.push({ text })
      return { ...state, columns }
    default:
      return state
  }
}
