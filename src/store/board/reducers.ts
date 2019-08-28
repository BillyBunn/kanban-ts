import { IBoardState } from './types'

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

export function boardReducer(state = initialState, action: object) {
  return state
}
