import { IBoardState } from './types'

export enum BoardActionTypes {
  ADD_CARD = 'ADD_CARD',
  MOVE_CARD = 'MOVE_CARD'
}

export interface IAction {
  type: BoardActionTypes
  payload: {
    columnId: number
    text: string
    cardId: number
    direction: string
  }
}

const initialState: IBoardState = {
  columns: [
    {
      cards: [
        { text: 'Do this thing' },
        { text: 'Another thing' },
        { text: 'One more task' }
      ],
      name: 'To do'
    },
    {
      name: 'In progress',
      cards: [{ text: 'Working on this' }, { text: 'Do this thing' }]
    },
    { name: 'Review', cards: [{ text: 'Some task' }] },
    { name: 'Complete', cards: [{ text: 'Something completed' }] }
  ]
}

export function boardReducer(
  state = initialState,
  action: IAction
): IBoardState {
  switch (action.type) {
    case BoardActionTypes.ADD_CARD: {
      const columns = [...state.columns]
      const { columnId, text } = action.payload
      columns[columnId].cards.push({ text })
      return { ...state, columns }
    }
    case BoardActionTypes.MOVE_CARD: {
      const { cardId, columnId, direction } = action.payload
      if (
        (columnId === 0 && direction === 'left') ||
        (columnId === state.columns.length - 1 && direction === 'right')
      ) {
        return state
      }
      const columns = [...state.columns]
      const card = columns[columnId].cards.splice(cardId, 1)[0]
      const destColumnId = direction === 'right' ? columnId + 1 : columnId - 1
      columns[destColumnId].cards.push(card)

      return { ...state, columns }
    }

    default:
      return state
  }
}
