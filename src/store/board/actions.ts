export function addCard(payload: string) {
  return {
    payload,
    type: 'ADD_CARD'
  }
}

export function moveCard(payload: { columnId: number; cardId: string }) {
  return {
    payload,
    type: 'MOVE_CARD'
  }
}
