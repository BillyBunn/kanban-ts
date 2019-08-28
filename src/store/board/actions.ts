export function addCard(payload: string) {
  console.log('ADD CARD')
  return {
    type: 'ADD_CARD',
    payload
  }
}
